const printToConsole = require('./solution');

global.console = {
  log: jest.fn(),
};

describe('Tests for checking the string logged to the console', () => {
  test('Verify nothing is printed to the console', (done) => {
    process.argv = [];
    let callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith(undefined);
      done();
    };
    printToConsole(callbackFn);
  });
  test('Verify TIMED OUT! is printed to the console', (done) => {
    let callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('TIMED OUT!');
      done();
    };
    process.argv = ['TIMED OUT!'];
    printToConsole(callbackFn);
  });
});
