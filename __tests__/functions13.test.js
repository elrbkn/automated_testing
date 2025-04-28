import fc from 'fast-check';
import getFunction from '../src/functions.js';

const sort = getFunction();

describe('sort function', () => {

  test('should sort a simple array', () => {
    expect(sort([3, 1, 0, 7, 5])).toEqual([0, 1, 3, 5, 7]);
    expect(sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(sort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(sort([])).toEqual([]);
    expect(sort([42])).toEqual([42]);
  });

  test('should return a sorted array for any integer array', () => {
    fc.assert(
      fc.property(
        fc.array(fc.integer()),
        (arr) => {
          const sorted = sort(arr);

          expect(sorted).toHaveLength(arr.length);

          expect(sorted).toBeSorted({ ascending: true });

          expect(sorted.slice().sort((a, b) => a - b)).toEqual(arr.slice().sort((a, b) => a - b));
        }
      )
    );
  });
});
