import _ from 'lodash';

import getFunction from '../functions.js';

const set = getFunction();


let initialObject;
let object;

beforeEach(() => {
  initialObject = { a: [{ b: { c: 3 } }] };
  object = _.cloneDeep(initialObject);
});

test('set replace', () => {
  const returnedObj = set(object, 'a[0].b.c', 4);;
  expect(returnedObj).toBe(object);
  expect(object.a[0].b.c).toBe(4);
});

test('set new', () => {
  const returnedObj = set(object, ['x', '0', 'y', 'z'], 5);
  expect(returnedObj).toBe(object);
  expect(object.x[0].y.z).toBe(5);
});

test('wrong structure', () => {
  set(object, ['x', '0', 'y', 'z'], 5);
  const expected = _.cloneDeep(initialObject);
  _.set(expected, ['x', '0', 'y', 'z'], 5);
  expect(object).toEqual(expected);
});
