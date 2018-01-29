const { promiseToReject, onReject } = require('./solution');

global.console = {
  log: jest.fn(),
};

describe('Tests for checking the value returned by the promise', () => {
  test('Verify REJECTED! is printed to the console on reject by the promise', () => {
    expect.assertions(1);
    return expect(promiseToReject).rejects.toEqual(new Error('REJECTED!'));
  });
});

describe('Test for checking the string logged by the onReject helper function', () => {
  test('Verify REJECT is printed to the console by the onReject helper function', () => {
    onReject({ message: 'REJECT' });
    expect(global.console.log).toHaveBeenCalledWith('REJECT');
  });
});
