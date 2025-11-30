const SHEET_NAME = 'New Year Family Registration';
const STRIPE_API_BASE = 'https://api.stripe.com/v1';
const STRIPE_SECRET_KEY = PropertiesService.getScriptProperties().getProperty('STRIPE_SECRET_KEY');

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ status: 'error', message: 'Invalid request' }, 400);
    }

    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return jsonResponse(
        { status: 'error', message: `Sheet "${SHEET_NAME}" not found` },
        500
      );
    }

    const data = JSON.parse(e.postData.contents || '{}');
    const familyLabel = (data.primaryLastName || '').trim()
      ? `${data.primaryLastName} family`
      : 'Family';
    const totalCostNumber = Number(data.totalCost || 0);

    sheet.appendRow([
      new Date(),
      familyLabel,
      data.primaryFirstName || '',
      data.primaryLastName || '',
      data.spouseFirstName || '',
      data.phone || '',
      data.adults || 0,
      data.children || 0,
      Array.isArray(data.adultNames) ? data.adultNames.join(', ') : '',
      Array.isArray(data.childNames) ? data.childNames.join(', ') : '',
      totalCostNumber || '',
    ]);

    const paymentIntentResult = createPaymentIntent(totalCostNumber, data);

    return jsonResponse(
      {
        status: 'ok',
        clientSecret: paymentIntentResult ? paymentIntentResult.clientSecret || null : null,
        paymentIntentId: paymentIntentResult ? paymentIntentResult.id || null : null,
        paymentError: paymentIntentResult ? paymentIntentResult.error || null : null,
      },
      200
    );
  } catch (err) {
    console.error(err);
    return jsonResponse({ status: 'error', message: String(err) }, 500);
  }
}

function doGet() {
  return jsonResponse({ status: 'ok' }, 200);
}

function doOptions() {
  return jsonResponse({}, 200);
}

function createPaymentIntent(totalCostNumber, data) {
  try {
    if (!STRIPE_SECRET_KEY) {
      return { error: 'Stripe secret key missing' };
    }

    const amountInCents = Math.round(Number(totalCostNumber || 0) * 100);
    if (amountInCents <= 0) {
      return { error: 'Invalid payment amount' };
    }

    const payload = {
      amount: amountInCents,
      currency: 'usd',
      description: 'NYE Registration',
      'automatic_payment_methods[enabled]': 'true',
      'metadata[primaryFirstName]': data.primaryFirstName || '',
      'metadata[primaryLastName]': data.primaryLastName || '',
      'metadata[phone]': data.phone || '',
    };

    const response = UrlFetchApp.fetch(`${STRIPE_API_BASE}/payment_intents`, {
      method: 'post',
      contentType: 'application/x-www-form-urlencoded',
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      },
      muteHttpExceptions: true,
      payload,
    });

    const status = response.getResponseCode();
    const body = response.getContentText() || '{}';
    const parsed = JSON.parse(body);

    if (status >= 300) {
      console.error('Stripe error', status, body);
      return { error: (parsed && parsed.error && parsed.error.message) || 'Stripe error' };
    }

    return {
      id: parsed.id,
      clientSecret: parsed.client_secret,
    };
  } catch (err) {
    console.error('Stripe exception', err);
    return { error: String(err) };
  }
}

function jsonResponse(payload, status) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
    .setStatusCode(status || 200)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
}
