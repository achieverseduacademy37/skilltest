/**
 * SkillTest Pro — Google Sheets API Connector
 * =============================================
 * HOW TO SET UP (one-time):
 *
 * 1. Create a Google Sheet with these column headers in Row 1:
 *    Timestamp | TestName | StudentName | Mobile | Score | MaxScore |
 *    Correct | Wrong | Skipped | Accuracy | TimeTaken | TotalTime | Details
 *
 * 2. In Google Sheet → Extensions → Apps Script → paste this code:
 * ─────────────────────────────────────────────────────────────────
 *  function doPost(e) {
 *    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *    const data = JSON.parse(e.postData.contents);
 *    sheet.appendRow([
 *      new Date().toLocaleString('en-IN'),
 *      data.testName, data.name, data.mobile,
 *      data.score, data.maxScore, data.correct,
 *      data.wrong, data.skipped, data.accuracy,
 *      data.timeTaken, data.totalTime, data.details
 *    ]);
 *    return ContentService.createTextOutput(JSON.stringify({status:'ok'}))
 *      .setMimeType(ContentService.MimeType.JSON);
 *  }
 *
 *  function doGet(e) {
 *    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *    const rows = sheet.getDataRange().getValues();
 *    const headers = rows[0];
 *    const data = rows.slice(1).map(row => {
 *      const obj = {};
 *      headers.forEach((h, i) => obj[h] = row[i]);
 *      return obj;
 *    });
 *    return ContentService.createTextOutput(JSON.stringify(data))
 *      .setMimeType(ContentService.MimeType.JSON);
 *  }
 * ─────────────────────────────────────────────────────────────────
 * 3. Deploy → New Deployment → Web App
 *    Execute as: Me  |  Access: Anyone
 * 4. Copy the deployment URL and paste below as SHEET_URL
 */

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzVLcSZy1aLYKaXli2p3F4MWNZ96tvzBrMpseMXiR_p5Hbm8FzbwFqauE7yMQyBFoEV/exec';
// Example: 'https://script.google.com/macros/s/AKfyc.../exec'

const SheetsAPI = {

  /**
   * Submit a test result to Google Sheets
   * @param {Object} result - The result object
   */
  async submit(result) {
    if (!SHEET_URL || SHEET_URL === 'https://script.google.com/macros/s/AKfycbzVLcSZy1aLYKaXli2p3F4MWNZ96tvzBrMpseMXiR_p5Hbm8FzbwFqauE7yMQyBFoEV/exec') {
      console.warn('SheetsAPI: No URL configured. Data not saved.');
      return { status: 'skipped', reason: 'no_url' };
    }
    try {
      const res = await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result)
      });
      return { status: 'ok' };
    } catch (err) {
      console.error('SheetsAPI submit error:', err);
      return { status: 'error', reason: err.message };
    }
  },

  /**
   * Fetch all results from Google Sheets (for leaderboard)
   * @returns {Array} Array of result objects
   */
  async getLeaderboard() {
    if (!SHEET_URL || SHEET_URL === 'https://script.google.com/macros/s/AKfycbzVLcSZy1aLYKaXli2p3F4MWNZ96tvzBrMpseMXiR_p5Hbm8FzbwFqauE7yMQyBFoEV/exec') {
      return [];
    }
    try {
      const res = await fetch(SHEET_URL);
      const raw = await res.json();
      return raw.map(r => ({
        testName:  r['TestName']   || '',
        name:      r['StudentName']|| '',
        mobile:    r['Mobile']     || '',
        score:     parseFloat(r['Score']) || 0,
        maxScore:  parseFloat(r['MaxScore']) || 50,
        correct:   parseInt(r['Correct'])  || 0,
        wrong:     parseInt(r['Wrong'])    || 0,
        skipped:   parseInt(r['Skipped'])  || 0,
        accuracy:  r['Accuracy']   || '0',
        timeTaken: r['TimeTaken']  || '',
        totalTime: r['TotalTime']  || '',
        date:      r['Timestamp']  || '',
        details:   r['Details']    || ''
      }));
    } catch (err) {
      console.error('SheetsAPI fetch error:', err);
      return [];
    }
  }
};
