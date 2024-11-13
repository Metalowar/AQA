import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    baseUrl: 'https://rozetka.com.ua/ua/',
    chromeWebSecurity: false,
    video: false,
    defaultCommandTimeout: 20000,
    requestTimeout: 10000,
    cacheAcrossSpecs: true,
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/e2e/cy-tests/**/*.cy.{js,jsx,ts,tsx}'
  },
});
