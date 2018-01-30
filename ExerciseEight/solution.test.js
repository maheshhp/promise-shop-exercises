const { attachTitle, fulfilledPromise } = require('./solution');

describe('Test for checking the value returned by the promises', () => {
  test('Verify attachTitle returns arg appended with DR. ', () => expect(attachTitle('Hello')).toMatch('DR. Hello'));

  test('Verify fulfilledPromise resolves to MANHATTAN', () => {
    expect.assertions(1);
    return expect(fulfilledPromise).resolves.toBe('MANHATTAN');
  });
  test('Verify Some secret is returned on resolve by the promise in firstFn', () => {
    expect.assertions(1);
    return expect(fulfilledPromise.then(attachTitle)).resolves.toBe('DR. MANHATTAN');
  });
});
