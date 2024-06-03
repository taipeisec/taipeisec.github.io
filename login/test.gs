var USER_SHEET_NAME = 'Users';

function doGet(e) {
  var page = e.parameter.page;
  if (!page) {
    page = 'index';
  }
  return HtmlService.createHtmlOutputFromFile(page);
}

function checkLogin(email, password) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(USER_SHEET_NAME);
  var data = sheet.getDataRange().getValues();
  Logger.log('Checking login for email: ' + email + ' and password: ' + password); // Add this line
  
  for (var i = 1; i < data.length; i++) { // Start at 1 to skip header row
    Logger.log('Checking row: ' + data[i][0] + ', ' + data[i][1]); // Add this line
    
    // Trim spaces from email and password for comparison
    if (data[i][0].trim() === email.trim() && data[i][1].trim() === password.trim()) {
      var user = {email: email};
      var token = ScriptApp.newStateToken()
                          .withMethod('isLoggedIn')
                          .withParameter('user', JSON.stringify(user))
                          .withTimeout(3600)
                          .createToken();
      var cache = CacheService.getUserCache();
      cache.put('token', token, 3600); // Store token for 1 hour
      Logger.log('Login successful'); // Add this line
      return true;
    }
  }
  
  Logger.log('Login failed'); // Add this line
  return false;
}

function isLoggedIn() {
  var cache = CacheService.getUserCache();
  var token = cache.get('token');
  Logger.log('isLoggedIn check: ' + (token ? 'logged in' : 'not logged in')); // Add this line
  
  if (token) {
    return true;
  } else {
    return false;
  }
}

function logout() {
  var cache = CacheService.getUserCache();
  cache.remove('token');
}
