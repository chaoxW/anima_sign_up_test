const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    baseUrl: "https://anima1317.surge.sh",
    email: "shuai.wang.kaos@gmail.com",
    password: "105114Yuyan",
  },
  e2e: {
    // baseUrl: "",
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
    },
  },
  reporter: "cypress-mochawesome-reporter",
  video: true,
  reporterOptions: {
    reportFilename: "[status]_[datetime]_performance_report",
    timestamp: "longDate",
    toConsole: true,
    charts: true,
    reportPageTitle: "Cypress Reporter",
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
    saveAllAttempts: true,
  },
});
