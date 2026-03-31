const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: '.',
});

module.exports = createJestConfig({
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['require', 'default'],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^react-dom/client$': '<rootDir>/node_modules/preact/compat/client.js',
    '^react-dom/test-utils$':
      '<rootDir>/node_modules/preact/compat/test-utils.js',
  },
});
