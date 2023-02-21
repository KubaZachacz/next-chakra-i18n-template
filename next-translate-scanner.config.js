const i18next = require('./i18n.json');

/** @type {import('next-translate-scanner').ScannerConfig } */
module.exports = {
  input: ['./src/**/*.@(jsx|tsx|js|ts)'],
  output: './locales/$LOCALE/$NAMESPACE.json',
  locales: i18next.locales,
  defaultLocale: i18next.defaultLocale,
  defaultNS: i18next.defaultNS,
};
