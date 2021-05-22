const { pathsToModuleNameMapper } = require("ts-jest/utils");

const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  preset: 'ts-jest',
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json"
    }
  },
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "html", "text", "text-summary"],
  collectCoverageFrom: ["<rootDir>/advanced/**/*.ts"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  testPathIgnorePatterns: ["<>/lib/", "<rootDir>/node_modules/"]
};