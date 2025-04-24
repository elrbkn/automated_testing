import getFunction from '..src/functions7.js';

const read = getFunction();

test('read', () => {
  expect(() => read('/undefined')).toThrow();
  expect(() => read('/etc')).toThrow();
});
