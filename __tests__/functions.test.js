import assert from 'node:assert';
import getFunction from '../src/functions.js';

const get = getFunction();

assert.strictEqual(
  get({ key: 'value' }, 'key'),
  'value',
  'Ошибка: Функция должна возвращать значение по существующему ключу'
);

assert.strictEqual(
  get({ key: 'value' }, 'key', 'defaultValue'),
  'value',
  'Ошибка: Функция должна возвращать значение по существующему ключу, игнорируя значение по умолчанию'
);

assert.strictEqual(
  get({}, 'key', 'defaultValue'),
  'defaultValue',
  'Ошибка: Функция должна возвращать значение по умолчанию для несуществующего ключа'
);

console.log('Все тесты пройдены!');
