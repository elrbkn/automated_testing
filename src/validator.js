
const right1 = () => {
  const checks = [];
  return {
    addCheck: (fn) => checks.push(fn),
    isValid: (data) => checks.every((fn) => fn(data)),
  };
};

const wrong1 = () => {
  const checks = [];
  return {
    addCheck: (fn) => checks.push(fn),
    isValid: (data) => checks.every((fn) => fn(data)),
  };
};

const wrong2 = () => {
  const checks = [];
  return {
    addCheck: (fn) => checks.push(fn),
    isValid: (data) => checks.every((fn) => fn(data)),
  };
};

const wrong3 = () => {
  const checks = [];
  return {
    addCheck: (fn) => checks.push(fn),
    isValid: (data) => checks.every((fn) => fn(data)),
  };
};

const implementations = {
  right1, wrong1, wrong2, wrong3,
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return implementations[name];
};
