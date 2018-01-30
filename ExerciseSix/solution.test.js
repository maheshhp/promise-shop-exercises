const { promiseOne, promiseTwo, promiseThree } = require('./solution');

describe('Tests for checking the value returned by the promises', () => {
  test('Verify SECRET VALUE is returned on resolve by the promiseOne', () => {
    expect.assertions(1);
    return expect(promiseOne).resolves.toBe('SECRET VALUE');
  });
  test('Verify ANOTHER SECRET VALUE is returned on reject by the promiseTwo', () => {
    expect.assertions(1);
    return expect(promiseTwo).rejects.toEqual(Error('ANOTHER SECRET VALUE'));
  });
  test('Verify ONE MORE SECRET VALUE is returned on reject by the promiseThree', () => {
    expect.assertions(1);
    return expect(promiseThree).rejects.toEqual(Error('ONE MORE SECRET VALUE'));
  });
});
