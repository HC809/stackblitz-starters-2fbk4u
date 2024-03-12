// const fs = require('node:fs');

// const swcrc = JSON.parse(fs.readFileSync('.swcrc', 'utf8'));

// ((swcrc.jsc ??= {}).experimental ??= {}).plugins = [['jest_workaround', {}]];

// module.exports = {
//   preset: 'ts-jest', // Si estás utilizando TypeScript
//   testEnvironment: 'node',
//   transform: {
//     '^.+\\.(t|j)sx?$': ['@swc/jest', swcrc],
//   },
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/$1',
//   },
// };

module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  // Si utilizas alias en tus importaciones, aquí puedes mapearlos
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};
