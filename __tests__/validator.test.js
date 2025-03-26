import _ from 'lodash';
import getImplementation from '../src/validator.js';

const makeValidator = getImplementation();

test("makeValidator without validator", () => {
  const validator = makeValidator();
  expect(validator.isValid()).toBe(true);
  expect(validator.isValid('some value')).toBe(true);
});

test('makeValidator with validator', () => {
  const validator = makeValidator();

  validator.addCheck(_.isNumber);
  expect(validator.isValid('string')).toBe(false);

  validator.addCheck((v) => v > 10);
  expect(validator.isValid(-100)).toBe(false);
  expect(validator.isValid(100)).toBe(true);

  validator.addCheck((v) => v % 2 === 0);
  expect(validator.isValid(11)).toBe(false);
  expect(validator.isValid(12)).toBe(true);
  expect(validator.isValid(8)).toBe(false);
});
