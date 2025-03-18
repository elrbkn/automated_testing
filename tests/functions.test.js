import getFunction from '../src/functions.js';

const get = getFunction();

if (get({ key: 'value' }, 'key') !== 'value') {
  throw new Error('Функция работает неверно!');
}

if (get({ key: 'value' }, 'key', 'defualtValue') !== 'value') {
  throw new Error('Функция работает неверно!');
}

if (get({}, 'key', 'value') !== 'value') {
  throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!');
