import makeStack from '../src/stack.js';
import { expect, test } from '@jest/globals';

test("stack's main flow", () => {
  const stack = makeStack();
  stack.push('one');
  stack.push('two');
  expect(stack.pop()).toEqual('two');
  expect(stack.pop()).toEqual('one');
});

test('isEmpty', () => {
  const stack = makeStack();
  expect(stack.isEmpty()).toBe(true);
  stack.push('two');
  expect(stack.isEmpty()).toBe(false);
  stack.pop();
  expect(stack.isEmpty()).toBe(true);
});

test('pop in empty stack', () => {
  const stack = makeStack();
  expect(() => stack.pop()).toThrow();
});
