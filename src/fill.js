const implementation = (coll, value, start = 0, end = coll.length) => {
  if (!Array.isArray(coll)) {
    return 'Wrong array';
  }

  if (coll.length === 0) {
    return 'Is Empty';
  }

  if (start < 0 || end < 0) {
    return 'Wrong data';
  }

  const result  = [...coll];
  end = Math.min(end, coll.length);

  for (let i = start; i < end; i++) {
    result[i] = value;
  }

  return result;
};

export default implementation;
