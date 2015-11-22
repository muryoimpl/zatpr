var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  var mainWindow    = new BrowserWindow({'height': 720, 'width': 1024});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  //mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
