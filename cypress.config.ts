import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 60000,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
