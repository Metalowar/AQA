import { defineConfig } from "cypress";

// function getConfigurationByFile(file) {
//   const pathToConfigFile = path.resolve('cypress/e2e/cy-tests/configs', `cypress.env.${file}.json`) // cypress/e2e/cy-tests/configs/cypress.env.invalid.json
//
//   return fs.readJsonSync(pathToConfigFile)
// }

import fs from 'fs-extra';
import * as path from 'path';

function getConfigurationByFile(file) {
  const configPath = path.resolve('cypress/e2e/cy-tests/configs', `cypress.env.${file}.json`);
  return fs.readJsonSync(configPath);
}

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
    specPattern: 'cypress/e2e/cy-tests/**/*.cy.{js,jsx,ts,tsx}',

    setupNodeEvents(on, config) {
      // Отримую значення configFile
      const file = config.env.configFile || 'valid';
      const customConfig = getConfigurationByFile(file);

      // Об'єдную конфігурації
      return { ...config, ...customConfig };
    },
  }
});
