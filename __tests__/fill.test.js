import getImplementation from '../src/fill.js';

const fill = getImplementation();

let array;
const emptyArray = [];
const notArray = 'string';

beforeEach(() => {
 array = [1, 2, 3, 4];
});

test('common case', () => {
  expect(fill(array, '*', 1, 3)).toEqual([1, '*', '*', 4]);
});

test('should use default start and end', () => {
    expect(fill(array, '*')).toEqual(['*', '*', '*', '*']);
});

test('should work with end > length', () => {
    expect(fill(array, '*', 0, 10)).toEqual(['*', '*', '*', '*']);
});

test('should work with start >= end', () => {
  fill(array, '*', 2, 2);
  expect(array).toEqual([1, 2, 3, 4]);
});

test('empty array', () => {
  expect(fill(emptyArray, '*')).toEqual('Is Empty');
});

test('wrong data', () => {
  expect(fill(array, -1, -3)).toEqual('Wrong data');
});

test('wrong array', () => {
  expect(fill(notArray, '*')).toEqual('Wrong array');
});
