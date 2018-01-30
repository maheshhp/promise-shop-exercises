const { multiPromise, onResolve } = require('./solution');

global.console = {
  log: jest.fn(),
};

describe('Test for checking the string logged by the onResolve helper function', () => {
  test('Verify MAIN PROGRAM is printed to the console by the onResolve helper function', () => {
    onResolve();
    expect(global.console.log).toHaveBeenCalledWith('MAIN PROGRAM');
  });
});

describe('Tests for checking the value returned by the promise', () => {
  test('Verify PROMISE VALUE is printed to the console on reject by the promise', () => {
    expect.assertions(1);
    return expect(multiPromise).resolves.toBe('PROMISE VALUE');
  });
});
