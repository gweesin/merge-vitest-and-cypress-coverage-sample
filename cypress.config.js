const {defineConfig} = require("cypress");
const task = require("@cypress/code-coverage/task.js");

module.exports = defineConfig({
    component: {
        specPattern: "**/*.cy.js",
        devServer: {
            framework: 'vue',
            bundler: 'vite'
        },
        setupNodeEvents(on, config) {
            task(on, config);
            return config;
        },
    }
});
