/**
 * GOOGLE APPS SCRIPT TEMPLATE
 * -------------------------------------------------------------
 * Copy and paste this code into your Google Sheets Apps Script Editor:
 * 1. Open your target Google Sheet.
 * 2. Click Extensions > Apps Script.
 * 3. Replace all code with the snippet below.
 * 4. Click Deploy > New deployment > Select type "Web app".
 * 5. Under "Who has access", choose "Anyone".
 * 6. Copy the resulting Web App URL and paste it into `src/config.ts` as `googleSheetsEndpoint`!
 */

export const GOOGLE_APPS_SCRIPT_SNIPPET = `
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Student Name",
        "Mobile Number",
        "School/College Name",
        "City/Batch",
        "Session Code",
        "Project Theme",
        "Project Description",
        "Project / Demo Link"
      ]);
      // Format header
      var headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#8B1E2D");
      headerRange.setFontColor("#FFFFFF");
    }
    
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.studentName || "",
      data.mobileNumber || "",
      data.schoolName || "",
      data.cityBatch || "Default Batch",
      data.sessionCode || "N/A",
      data.projectTheme || "",
      data.projectDescription || "",
      data.projectLink || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      message: "Project submitted successfully!"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    service: "NIAT Class 12 AI Workshop Submissions API"
  })).setMimeType(ContentService.MimeType.JSON);
}
`;
