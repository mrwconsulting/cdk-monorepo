const { defaults } = require('jest-config')
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  roots: [
    '../../packages/core/',
    '../../packages/patterns/',
    '../../packages/examples/',
  ],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
