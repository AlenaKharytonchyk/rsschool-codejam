function sumOfOther(arr) {
  const arrNew = [];
  let elementNew;
  for (let i = 0; i < arr.length; i += 1) {
    elementNew = arr.reduce((a, b, index) => {
      if (index === i) {
        return a;
      }
      return a + b;
    }, 0);

    arrNew.push(elementNew);
  }
  return arrNew;
}

module.exports = sumOfOther;
