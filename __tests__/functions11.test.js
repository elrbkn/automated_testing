import OctokitFake from '../__mocks__/OctokitFake.js';
import getFunction from '../src/functions.js';

const getUserMainLanguage = getFunction();

test('get main repo language', async () => {
  const mockRepos = [
  { name: 'repo1', language: 'JavaScript' },
  { name: 'repo2', language: 'TypeScript' },
  { name: 'repo3', language: 'JavaScript' },
  { name: 'repo4', language: 'Python' },
  { name: 'repo5', language: 'JavaScript' },
];
  const client = new OctokitFake(mockRepos);

  const username = 'hexlet';
  const language = await getUserMainLanguage(username, client);
  expect(language).toEqual('JavaScript');
});

test('get main repo language when its null', async () => {
  const mockRepos = [];
  const client = new OctokitFake(mockRepos);

  const username = 'hexlet';
  const language = await getUserMainLanguage(username, client);
  expect(language).toBeNull();
});

test('get main repo language when counts are equal', async () => {
  const mockRepos = [
    { name: 'repo1', language: 'JavaScript' },
    { name: 'repo2', language: 'Python' },
    { name: 'repo3', language: 'JavaScript' },
    { name: 'repo4', language: 'Python' },
  ];
  const client = new OctokitFake(mockRepos);

  const username = 'hexlet';
  const language = await getUserMainLanguage(username, client);
  expect(['JavaScript', 'Python']).toContain(language);
});
