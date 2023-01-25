const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    
    defaultCommandTimeout: 10000,
    chromewebsecurity: false
  },
});
