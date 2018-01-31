const solution = require('./solution');

let { alwaysThrows } = solution;
let { iterate } = solution;
let { promiseResolver } = solution;

global.console = {
  log: jest.fn(),
};

describe('Test for checking the promise return and helper functions', () => {
  test('Verify alwaysThrows throws an error', (done) => {
    expect(alwaysThrows).toThrow('OH NOES');
    done();
  });
  test('Verify iterate prints the argument and returns incremented value', (done) => {
    expect(iterate(1)).toBe(2);
    expect(global.console.log).toHaveBeenCalledWith(1);
    done();
  });
  test('Verify iterate prints the argument and returns incremented value', (done) => {
    expect.assertions(1);
    expect(promiseResolver).resolves.toBe(2);
    done();
  });
});
