const { defineConfig } = require("cypress");
const task = require("@cypress/code-coverage/task.js");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.cy.js",
    setupNodeEvents(on, config) {
      task(on, config);
      return config;
    },
  },
});
