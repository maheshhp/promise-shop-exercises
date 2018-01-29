const promiseToPrint = require('./solution');

global.console = {
  log: jest.fn(),
};

describe('Tests for checking the string logged to the console', () => {
  test('Verify FULFILLED! is printed to the console', () => {
    expect.assertions(1);
    return expect(promiseToPrint).resolves.toBe('FULFILLED!');
  });
});
