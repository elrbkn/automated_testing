import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import getFunction from '../src/functions6.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const toHtmlList = getFunction();

const formats = ['csv', 'json', 'yml'];
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

let expected;

beforeAll(() => {
  expected = fs.readFileSync(getFixturePath('result.html'), 'utf-8');
});

test.each(formats)('toHtmlList should correctly convert %s file to HTML', (format) => {
  const filePath = getFixturePath(`list.${format}`);
  const actual = toHtmlList(filePath);
  console.log(actual);
  expect(actual).toEqual(expected.trim());
});
