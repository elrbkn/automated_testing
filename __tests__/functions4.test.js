import getFunction from '../src/functions4.js';

const gt = getFunction();

test('gt', () => {
expect(gt(3, 1)).toBe(true);
expect(gt(3, 3)).toBe(false);
expect(gt(1, 3)).toBe(false);
expect(gt(-3, 0)).toBe(false)
});
