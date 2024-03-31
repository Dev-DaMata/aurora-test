const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportWidth: 1366,
  viewportHeight: 768,
  // projectId: 'sfjguw',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    overwrite: true,
    reporter: 'mochawesome',
    chromeWebSecurity: true,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}',
  },
});
