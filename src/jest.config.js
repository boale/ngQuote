const { resolve } = require("path");

const jestBaseConfig = {
  globals: {
    "ts-jest": {
      diagnostics: true,
      ignoreCodes: [151001],
    },
  },
  preset: "jest-preset-angular",
  roots: [resolve(__dirname, "./app")],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageDirectory: resolve(__dirname, "../coverage"),
  collectCoverageFrom: ["**/*.ts"],
  coveragePathIgnorePatterns: [
    ".*\\.mock.ts$",
    ".*\\.module.ts$",
    ".*\\.config.ts$",
    ".*\\.models.ts$",
    ".*\\.directive.ts$",
    ".*\\.font.ts$",
    ".*\\.worker.ts$",
    "utag.service.ts",
    "index.ts",
    "/store/",
    "/environments/",
    "/utils/",
    "/assets/",
    "/text/",
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!@amway-acc|comlink|intl).+\\.js$",
  ],
};

const ciSpecificConfig = {
  collectCoverage: true,
  coverageReporters: ["lcovonly", "text-summary"],
};

/**
 * By default collecting the coverage is disable for development.
 * In order to enable it we use jest CLI option `--coverage`
 */
const devSpecificConfig = {
  coverageReporters: ["lcov", "text-summary"],
};

const jestSensitiveConfig = process.env.TEST_ENV_CI
  ? ciSpecificConfig
  : devSpecificConfig;

module.exports = {
  ...jestBaseConfig,
  ...jestSensitiveConfig,
};
