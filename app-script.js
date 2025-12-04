// === CONFIG ===
const SPREADSHEET_ID = '1bsBo2OTwHR7bI2zlrhagV23wRTRkZdGnZdjqtZW4arM';
const SHEET_NAME = 'New Year Family Registration';
const STRIPE_SECRET_PROP = 'STRIPE_SECRET_KEY';
const STRIPE_WEBHOOK_SECRET_PROP = 'STRIPE_WEBHOOK_SECRET';

// === MAIN HANDLERS ===

/**
 * Handle form submissions (creates PaymentIntent with metadata, NO sheet write)
 */
function doPost(e) {
  let ss, debugSheet;

  try {
    ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    debugSheet = getOrCreateDebugSheet(ss);

    // Log incoming request
    debugSheet.appendRow([
      new Date(),
      'FORM SUBMISSION',
      JSON.stringify({
        hasPostData: !!(e && e.postData),
        contentType: e && e.postData ? e.postData.type : null
      })
    ]);

    // Check if this is a webhook event
    if (e && e.postData && e.postData.type === 'application/json') {
      const bodyText = e.postData.contents || '';
      if (bodyText.includes('"type":"payment_intent.succeeded"')) {
        return handleWebhook(e, ss, debugSheet);
      }
    }

    // Otherwise, it's a form submission
    const data = parseRequestData(e, debugSheet);

    // Normalize fields
    const asString = (v) => (v || '').toString().trim();
    const primaryFirstName = asString(data.primaryFirstName);
    const primaryLastName = asString(data.primaryLastName);
    const spouseFirstName = asString(data.spouseFirstName);
    const phone = asString(data.phone);
    const adults = Number(data.adults ?? data.adultCount ?? 0) || 0;
    const children = Number(data.children ?? data.childCount ?? 0) || 0;

    let adultNames = '';
    if (Array.isArray(data.adultNames)) {
      adultNames = data.adultNames.join(', ');
    } else if (data.adultNames) {
      adultNames = asString(data.adultNames);
    }

    let childNames = '';
    if (Array.isArray(data.childNames)) {
      childNames = data.childNames.join(', ');
    } else if (data.childNames) {
      childNames = asString(data.childNames);
    }

    const totalCostNum = Number(data.totalCost || 0) || 0;

    // Store all registration data in PaymentIntent metadata
    const registrationData = {
      primaryFirstName,
      primaryLastName,
      spouseFirstName,
      phone,
      adults: String(adults),
      children: String(children),
      adultNames,
      childNames,
      totalCost: String(totalCostNum)
    };

    // Create PaymentIntent with metadata
    const piResult = createPaymentIntent(totalCostNum, registrationData);

    if (piResult.error) {
      debugSheet.appendRow([new Date(), 'PAYMENT ERROR', piResult.error]);
      return jsonResponse({
        status: 'error',
        paymentError: piResult.error
      });
    }

    debugSheet.appendRow([
      new Date(),
      'PAYMENT INTENT CREATED',
      piResult.paymentIntentId,
      'Data stored in metadata (will save to sheet after payment)'
    ]);

    return jsonResponse({
      status: 'ok',
      clientSecret: piResult.clientSecret,
      paymentError: null
    });

  } catch (err) {
    try {
      if (!ss) ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      debugSheet = getOrCreateDebugSheet(ss);
      debugSheet.appendRow([new Date(), 'UNCAUGHT ERROR', String(err)]);
    } catch (_) { }

    return jsonResponse({ status: 'error', message: String(err) });
  }
}

/**
 * Handle Stripe webhook events (writes to sheet after payment succeeds)
 */
function handleWebhook(e, ss, debugSheet) {
  try {
    const bodyText = e.postData.contents || '';

    debugSheet.appendRow([new Date(), 'WEBHOOK RECEIVED', bodyText.substring(0, 200)]);

    // Parse webhook event
    let event;
    try {
      event = JSON.parse(bodyText);
    } catch (parseErr) {
      debugSheet.appendRow([new Date(), 'WEBHOOK PARSE ERROR', String(parseErr)]);
      return jsonResponse({ received: false, error: 'Invalid JSON' });
    }

    // Only process payment_intent.succeeded events
    if (event.type !== 'payment_intent.succeeded') {
      debugSheet.appendRow([new Date(), 'WEBHOOK IGNORED', 'Event type: ' + event.type]);
      return jsonResponse({ received: true, message: 'Event type not handled' });
    }

    const paymentIntent = event.data.object;
    const metadata = paymentIntent.metadata || {};

    debugSheet.appendRow([
      new Date(),
      'PAYMENT SUCCEEDED',
      paymentIntent.id,
      JSON.stringify(metadata)
    ]);

    // Write to sheet
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    const familyLabel = metadata.primaryLastName
      ? metadata.primaryLastName + ' family'
      : 'Family';

    sheet.appendRow([
      new Date(),
      familyLabel,
      metadata.primaryFirstName || '',
      metadata.primaryLastName || '',
      metadata.spouseFirstName || '',
      metadata.phone || '',
      Number(metadata.adults) || 0,
      Number(metadata.children) || 0,
      metadata.adultNames || '',
      metadata.childNames || '',
      Number(metadata.totalCost) || 0
    ]);

    debugSheet.appendRow([
      new Date(),
      'ROW APPENDED AFTER PAYMENT',
      familyLabel
    ]);

    return jsonResponse({ received: true });

  } catch (err) {
    debugSheet.appendRow([new Date(), 'WEBHOOK ERROR', String(err)]);
    return jsonResponse({ received: false, error: String(err) });
  }
}

function doGet(e) {
  return jsonResponse({ status: 'ok' });
}

// === HELPERS ===

function getOrCreateDebugSheet(ss) {
  let debugSheet = ss.getSheetByName('Debug');
  if (!debugSheet) {
    debugSheet = ss.insertSheet('Debug');
  }
  return debugSheet;
}

function parseRequestData(e, debugSheet) {
  let body = '';
  if (e && e.postData && typeof e.postData.contents === 'string') {
    body = e.postData.contents.trim();
  }

  if (body) {
    try {
      const data = JSON.parse(body);
      debugSheet.appendRow([new Date(), 'PARSE MODE', 'JSON']);
      return data;
    } catch (err) {
      debugSheet.appendRow([
        new Date(),
        'JSON PARSE FAILED, USING PARAMETER',
        String(err)
      ]);
      return (e && e.parameter) || {};
    }
  }

  debugSheet.appendRow([new Date(), 'PARSE MODE', 'PARAMETER ONLY']);
  return (e && e.parameter) || {};
}

/**
 * Create a PaymentIntent with registration data in metadata
 */
function createPaymentIntent(totalCost, registrationData) {
  const secret = PropertiesService.getScriptProperties()
    .getProperty(STRIPE_SECRET_PROP);

  if (!secret) {
    return {
      error: 'Stripe is not configured (missing script property ' + STRIPE_SECRET_PROP + ').'
    };
  }

  const dollars = parseFloat(totalCost || 0);
  const amountCentsNumber = Math.max(0, Math.round(dollars * 100));

  if (!amountCentsNumber) {
    return { error: 'Amount is zero.' };
  }

  const amountCents = String(amountCentsNumber);

  // Build payload with metadata
  const payload = {
    amount: amountCents,
    currency: 'usd',
    'automatic_payment_methods[enabled]': 'true'
  };

  // Add all registration data as metadata
  for (const key in registrationData) {
    if (registrationData.hasOwnProperty(key)) {
      payload['metadata[' + key + ']'] = registrationData[key];
    }
  }

  const options = {
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + secret
    },
    payload: payload,
    muteHttpExceptions: true
  };

  const resp = UrlFetchApp.fetch(
    'https://api.stripe.com/v1/payment_intents',
    options
  );

  const status = resp.getResponseCode();
  const text = resp.getContentText() || '';

  // Log raw Stripe response
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const debugSheet = getOrCreateDebugSheet(ss);
    debugSheet.appendRow([
      new Date(),
      'STRIPE RESPONSE',
      status,
      text.substring(0, 500)
    ]);
  } catch (_) { }

  let body;
  try {
    body = JSON.parse(text || '{}');
  } catch (err) {
    return { error: 'Stripe response parse error: ' + String(err) };
  }

  if (status >= 300 || body.error) {
    return {
      error:
        (body.error && body.error.message) ||
        'Payment creation failed with status ' + status
    };
  }

  if (!body.client_secret) {
    return { error: 'No client_secret in Stripe response.' };
  }

  return {
    clientSecret: body.client_secret,
    paymentIntentId: body.id
  };
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

// Run this ONCE from the editor to authorize UrlFetchApp + Stripe
function testStripePermission() {
  const result = createPaymentIntent(1, { test: 'true' });
  Logger.log(result);
}
