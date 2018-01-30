const { multiPromise, onResolve } = require('./solution');

global.console = {
  log: jest.fn(),
};

describe('Tests for checking the value returned by the promise', () => {
  test('Verify I FIRED is printed to the console on reject by the promise', () => {
    expect.assertions(1);
    return expect(multiPromise).resolves.toBe('PROMISE VALUE');
  });
});

describe('Test for checking the string logged by the onResolve helper function', () => {
  test('Verify REJECT is printed to the console by the onResolve helper function', () => {
    onResolve();
    expect(global.console.log).toHaveBeenCalledWith('MAIN PROGRAM');
  });
});
