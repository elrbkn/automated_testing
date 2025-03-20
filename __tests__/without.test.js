import getFunction from '../src/functions.js';

const without = getFunction();

test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([2, 1, 2, 3], 1, 2, 3)).toEqual([]);
  expect(without([], 1)).toEqual([]);
  expect(without([2, 1, 2, 3])).toEqual([2, 1, 2, 3]);
});
