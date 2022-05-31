module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  roots: ['../../packages/core/', '../../packages/patterns/'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
