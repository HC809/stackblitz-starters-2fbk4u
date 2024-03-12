
import type {Config} from 'jest';

const config = {
    transform: {
      "^.+\\.(t|j)sx?$": ["@swc/jest"],
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
    },
  clearMocks: true,
};

export default config;
