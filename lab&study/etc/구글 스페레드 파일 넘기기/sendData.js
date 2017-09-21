/**
 * Moves row of data to another spreadsheet based on criteria in column 6 to sheet with same name as the value in column 4.
*/
 
function onEdit(e) {
  // see Sheet event objects docs
  // https://developers.google.com/apps-script/guides/triggers/events#google_sheets_events
  var ss = e.source;
  var s = ss.getActiveSheet();
  var r = e.range;
   
  // to let you modify where the action and move columns are in the form responses sheet
  var actionCol = 6;
  var nameCol = 4;
 
  // Get the row and column of the active cell.
  var rowIndex = r.getRowIndex();
  var colIndex = r.getColumnIndex();
   
  // Get the number of columns in the active sheet.
  // -1 to drop our action/status column
  var colNumber = s.getLastColumn()-1;
   
  // if our action/status col is changed to ok do stuff
  if (e.value == "ok" && colIndex == actionCol) {
    // get our target sheet name - in this example we are using the priority column
    var targetSheet = s.getRange(rowIndex, nameCol).getValue();
    // if the sheet exists do more stuff
    if (ss.getSheetByName(targetSheet)) { 
      // set our target sheet and target range
      var targetSheet = ss.getSheetByName(targetSheet);
      var targetRange = targetSheet.getRange(targetSheet.getLastRow()+1, 1, 1, colNumber);
      // get our source range/row
      var sourceRange = s.getRange(rowIndex, 1, 1, colNumber);
      // new sheets says: 'Cannot cut from form data. Use copy instead.' 
      sourceRange.copyTo(targetRange);
      // ..but we can still delete the row after
      s.deleteRow(rowIndex);
      // or you might want to keep but note move e.g. r.setValue("moved");
    }
  }
}