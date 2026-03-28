# SkillTest Pro — SSC Steno Exam Platform

A complete, mobile-friendly mock test platform for **SSC Steno Grade C & D** aspirants.
Built with pure HTML/CSS/JS — no frameworks, no server needed.

---

## 📁 Project Structure

```
skilltest/
├── index.html          ← Main landing page (list of all tests + leaderboard preview)
├── test.html           ← Universal test engine (loads any test dynamically)
├── leaderboard.html    ← Full leaderboard with filters, search, podium
├── js/
│   └── sheets.js       ← Google Sheets API connector (configure your URL here)
└── tests/
    ├── history.js      ← History test data (50 questions — LIVE)
    ├── geography.js    ← (add your next test here)
    └── polity.js       ← (add more tests here)
```

---

## 🚀 How to Run

### Option 1 — GitHub Pages (Recommended)
1. Fork or upload this repository to GitHub
2. Go to **Settings → Pages → Branch: main → / (root) → Save**
3. Your site will be live at: `https://yourusername.github.io/skilltest/`

### Option 2 — Local
Just open `index.html` in any browser. No server needed.

---

## 🔗 Google Sheets Setup (Student Data Collection)

### Step 1 — Create Google Sheet
Create a new Google Sheet with these column headers in **Row 1** (exact order):
```
Timestamp | TestName | StudentName | Mobile | Score | MaxScore | Correct | Wrong | Skipped | Accuracy | TimeTaken | TotalTime | Details
```

### Step 2 — Create Apps Script
In the Google Sheet: **Extensions → Apps Script** → paste this code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date().toLocaleString('en-IN'),
    data.testName, data.name, data.mobile,
    data.score, data.maxScore, data.correct,
    data.wrong, data.skipped, data.accuracy,
    data.timeTaken, data.totalTime, data.details
  ]);
  return ContentService.createTextOutput(JSON.stringify({status:'ok'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const rows = sheet.getDataRange().getValues();
  const headers = rows[0];
  const data = rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Step 3 — Deploy
1. Click **Deploy → New Deployment**
2. Type: **Web App**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Click **Deploy** → Copy the URL

### Step 4 — Paste URL
Open `js/sheets.js` and replace:
```javascript
const SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```
with your actual URL.

---

## ➕ How to Add a New Test

1. Copy `tests/history.js` → rename to `tests/geography.js` (or any name)
2. Update the `meta` object and `questions` array
3. In `index.html`, add a new test card with `href="test.html?test=geography"`
4. That's it! The test engine (`test.html`) loads it automatically.

### Question Format
```javascript
{
  sec: "Section Name",        // shown as pill on question
  diff: "Moderate",           // "Moderate" or "Hard"
  q: "Question text here",   // the question
  ops: ["Option 1","Option 2","Option 3","Option 4"],  // 4 options (no A/B/C/D prefix needed)
  ans: 1,                     // index of correct answer (0-based)
  note: "Explanation here. Use <strong>bold</strong> and <em>italic</em>.",
  src: "NCERT Class 8"        // optional source reference
}
```

---

## 📊 Exam Pattern (SSC Steno 2025)

| Feature | Detail |
|---------|--------|
| Marking | +1 correct, −0.25 wrong |
| Duration | 48 min per 50 questions (scaled from 200Q/120min) |
| Pattern | Indirect reasoning, moderate–hard |
| Sections | Mixed (not grouped by topic) |

---

## 🛠️ Features

- ✅ Student registration (Name + Mobile)
- ✅ SSC-pattern test interface with timer
- ✅ Question palette (answered/marked/not visited)
- ✅ Mark for Review functionality
- ✅ Auto-submit on time expiry
- ✅ Detailed result analysis (Correct/Wrong/Skipped tabs)
- ✅ Section-wise performance bars
- ✅ Testbook-style explanations with sources
- ✅ Google Sheets integration for data collection
- ✅ Live leaderboard with podium, search, and filters
- ✅ Reattempt functionality
- ✅ Mobile responsive
- ✅ No backend / no server required

---

## 📱 Pages

| URL | Page |
|-----|------|
| `/index.html` | Home — all tests + leaderboard preview |
| `/test.html?test=history` | History mock test |
| `/test.html?test=geography` | Geography test (when added) |
| `/leaderboard.html` | Full leaderboard |

---

*Built for serious SSC Steno aspirants. Free forever.*
