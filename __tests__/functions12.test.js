import { fileURLToPath } from 'url';
import path from 'path';
import { jest } from '@jest/globals';
import getFunction from '../src/functions12.js';

const getFilesCount = getFunction();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

test('getFilesCount logs "Go!" once', () => {
  const log = jest.fn();
  const dirPath = getFixturePath('nested');

  getFilesCount(dirPath, log);

  expect(log).toHaveBeenCalledTimes(1);
  expect(log).toHaveBeenCalledWith('Go!');
});
