import getImplementation from '../src/implementations/index.js';

const getDaysInMonth = getImplementation();

test('testing function getDaysInMonth()', () => {
  expect(getDaysInMonth(4, 2023)).toBe(30);

  expect(getDaysInMonth(2, 2024)).toBe(29);
  expect(getDaysInMonth(2, 2023)).toBe(28);

  expect(getDaysInMonth(15, 2024)).toBe(null);
  expect(getDaysInMonth(0, 2024)).toBe(null);

  expect(getDaysInMonth(12, 2024)).toBe(31);

});
