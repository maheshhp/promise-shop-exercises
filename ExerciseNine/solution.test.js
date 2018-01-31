const { parsePromised } = require('./solution');

describe('Test for checking the parsed JSON and error logged by the promise', () => {
  test('Verify parsePromised resolves to the JSON supplied being parsed', () => {
    process.argv[2] = { hello: 'world' };
    expect.assertions(1);
    return expect(parsePromised).resolves.toBe(JSON.parse({ hello: 'world' }));
  });
  test('Verify parsePromised returns Error on invalid JSON as input', () => {
    process.argv[2] = 'Helo World';
    expect.assertions(1);
    return expect(parsePromised).rejects.toEqual(new Error('Parse error'));
  });
});
