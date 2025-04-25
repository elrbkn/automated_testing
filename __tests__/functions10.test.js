import { fileURLToPath } from 'url';
import path from 'path';
import _ from 'lodash';
import getFunction from '../src/functions10.js';

const getFilesCount = getFunction();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

test('getFilesCount counts all files recursively without side effects', () => {
  const directoryPath = getFixturePath('nested');
  const noop = () => _.noop;
  const count = getFilesCount(directoryPath, noop);
  expect(count).toBe(4);
});
