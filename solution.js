const solution = (number) => {
  const flooredNumber = Math.floor(number);
  if (flooredNumber < 3) {
    return 0;
  } else {
    let array = [];
    for (let i = 1; i < flooredNumber; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        array.push(i);
      }
      array.reduce((total, current) => {
        let result = total + current;
        return result;
      })
    };
  }
}


module.exports = solution;
