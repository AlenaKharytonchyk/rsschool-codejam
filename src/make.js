const make = (function closure() {
  let arr = [];
  const innerMake = (...args) => {
    if (args.length === 1 && typeof (args[0]) === 'function') {
      const result = arr.reduce(args[0]);
      arr.length = 0;
      return result;
    }

    arr = arr.concat(args);
    return innerMake;
  };

  return innerMake;
}());

module.exports = make;
