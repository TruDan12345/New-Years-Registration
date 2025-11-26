const SHEET_NAME = 'New Year Family Registration';

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
      data.totalCost || '',
    ]);

    return jsonResponse({ status: 'ok' }, 200);
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

function jsonResponse(payload, status) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
    .setStatusCode(status || 200)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
}
