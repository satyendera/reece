// jest.config.ts

export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jest-environment-jsdom",

  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "/^components/(.*)$/": "<rootDir>/src/components/$1", // You missed out `/` before the rest value `$1`
  },
  useESM: true,
};
