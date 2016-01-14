/*global browser*/
require('babel-register')({
  presets: ['es2015', 'stage-0', 'stage-1', 'react'],
  plugins: ['babel-plugin-espower'],
  only: /e2e/,
  extensions: ['.js']
});

exports.config = {
  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'mocha',
  directConnect: true,
  specs: [
    'test/e2e/*.e2e.js'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: './node_modules/electron-prebuilt/dist/electron',
      args: ['--test-type=webdriver', 'app=main.js']
    }
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true; //not Angular な環境で protractor が使える
    browser.resetUrl = 'file://';
  },
  mochaOpts: {
    ui: 'bdd',
    reporter: 'progress',
    slow: 3000,
    enableTimeouts: false
  }
};
