import { strict as assert } from 'assert';
import getFunction from '../src/functions.js';

const take = getFunction();

assert.deepStrictEqual(
  take([1, 2, 3], 2), [1, 2],
  'Ошибка: Функция должна возвращать n число элементов'
);

assert.deepStrictEqual(
  take([1, 2, 3]), [1],
  'Ошибка: Функция должна возвращать только первый элемент, если не указано число n'
);

assert.deepStrictEqual(
  take([], 2), [],
  'Ошибка: Функция должна возвращать пустой массив при вводе пустого массива'
);

assert.deepStrictEqual(
  take([4, 3], -1), [],
  'Ошибка: Функция должна возвращать пустой массив при вводе отричательного n '
);

assert.deepStrictEqual(
  take([4, 3], 9), [4, 3],
  'Ошибка: Функция должна возвращать весь массив, если n боше кол-ва элементов '
);

console.log('Все тесты пройдены!');
