const { parsePromised } = require('./solution');


describe('Test for checking the parsed JSON and error logged by the promise', () => {
  test('Verify parsePromised resolves to the JSON supplied being parsed', () => {
    let validJson = JSON.stringify({ name: 'John', age: 31, city: 'New York' });
    expect.assertions(1);
    return expect(parsePromised(validJson)).resolves.toEqual(JSON.parse(validJson));
  });
  test('Verify parsePromised returns Error on invalid JSON as input', () => {
    expect.assertions(1);
    return expect(parsePromised('Hello World')).rejects.toEqual(new Error('Parse error'));
  });
});
