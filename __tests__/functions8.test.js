import getFunction from '..src/functions8.js';

const buildUser = getFunction();

test('buildUser returns object with email, firstName, lastName', () => {
  const user = buildUser();
  expect(user).toHaveProperty('email');
  expect(user).toHaveProperty('firstName');
  expect(user).toHaveProperty('lastName');
});

test('buildUser generates different users on each call', () => {
  const user1 = buildUser();
  const user2 = buildUser();
  expect(user1).not.toEqual(user2);
});

test('buildUser allows overriding properties via parameters', () => {
  const overrides = {
    firstName: 'Petya',
    lastName: 'Ivanov',
    email: 'petya.ivanov@example.com'
  };
  const user = buildUser(overrides);
  expect(user.firstName).toBe('Petya');
  expect(user.lastName).toBe('Ivanov');
  expect(user.email).toBe('petya.ivanov@example.com');
});
