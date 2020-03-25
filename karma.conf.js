// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN = require('puppeteer').executablePath();

const baseConfig = require('./karma-base.conf');

module.exports = function (config) {
  config.set({
   ...baseConfig,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      }
    }
  });
};
