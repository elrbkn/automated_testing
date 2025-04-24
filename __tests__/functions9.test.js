import { fileURLToPath } from 'url';
import os from 'os';
import path from 'path';
import fs from 'fs/promises';
import getFunction from '../src/functions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prettifyHTMLFile = getFunction();

test('prettifyHTMLFile formats HTML file correctly', async () => {

  const fixturesPath = path.join(__dirname, '..', '__fixtures__');
  const inputPath = path.join(fixturesPath, 'before.html');
  const expectedPath = path.join(fixturesPath, 'after.html');

  const inputContent = await fs.readFile(inputPath, 'utf-8');
  const expectedContent = await fs.readFile(expectedPath, 'utf-8');

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'prettify-'));
  const tmpFilePath = path.join(tmpDir, 'test.html');
  await fs.writeFile(tmpFilePath, inputContent);

  await prettifyHTMLFile(tmpFilePath);

  const resultContent = await fs.readFile(tmpFilePath, 'utf-8');

  expect(resultContent).toBe(expectedContent);
});
