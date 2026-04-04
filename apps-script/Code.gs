const SPREADSHEET_ID = '1NpQPdr638rzmJUwHfRzBYSap7-iV6xQcoR1KH93RHco'

// Optional handler so the web app URL works in a browser (GET /exec).
// Frontend submissions should use POST (doPost).
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Apps Script endpoint is ready. Send a POST with name, company, phone, email, message, timestamp.',
    }))
    .setMimeType(ContentService.MimeType.JSON)
}

// Web App entry point for POST requests.
// Expects: name, company, phone, email, message, timestamp
function doPost(e) {
  try {
    const p = (e && e.parameter) ? e.parameter : {}

    const name = (p.name || '').toString().trim()
    const company = (p.company || '').toString().trim()
    const phone = (p.phone || '').toString().trim()
    const email = (p.email || '').toString().trim()
    const message = (p.message || '').toString().trim()
    const timestamp = (p.timestamp || new Date().toISOString()).toString().trim()

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID)
    const sheet = ss.getSheets()[0]

    // Append to the sheet (assumes your first row can be headers).
    sheet.appendRow([name, company, phone, email, message, timestamp])

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    const msg = (err && err.message) ? err.message : String(err)
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: msg }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

