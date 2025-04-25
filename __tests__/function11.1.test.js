import nock from 'nock';
import getFunction from '../src/functions11.js';

const getUserMainLanguage = getFunction();

nock.disableNetConnect();

test('get main repo language', async () => {

  const username = 'hexlet';
  nock('https://api.github.com')
    .get(`/users/${username}/repos`)
    .reply(200, [
      { name: 'repo1', language: 'JavaScript' },
      { name: 'repo2', language: 'JavaScript' },
      { name: 'repo3', language: 'JavaScript' },
      { name: 'repo4', language: 'Python' },
      { name: 'repo5', language: 'TypeScript' },
    ]);

  const language = await getUserMainLanguage(username);
  expect(language).toEqual('JavaScript');
});

test('get main repo language when its null', async () => {
  
  const username = 'hexlet';

  nock('https://api.github.com')
    .get(`/users/${username}/repos`)
    .reply(200, []);

  const language = await getUserMainLanguage(username);
  expect(language).toBeNull();
});

test('get main repo language when counts are equal', async () => {
  
  const username = 'hexlet';

  nock('https://api.github.com')
    .get(`/users/${username}/repos`)
    .reply(200, [
      { name: 'repo1', language: 'JavaScript' }, 
      { name: 'repo2', language: 'JavaScript' }, 
      { name: 'repo3', language: 'Python' }, 
      { name: 'repo4', language: 'Python' }
      ]);

  const language = await getUserMainLanguage(username);
  expect(['JavaScript', 'Python']).toContain(language);
});
