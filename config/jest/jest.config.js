module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  roots: ['../../packages'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
