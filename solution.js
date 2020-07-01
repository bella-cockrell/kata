const solution = (number) => {
  const flooredLimit = Math.floor(number);
  if (flooredLimit <= 0) {
    return 0;
  } else {
    const generateSeries = (base, limit) => {
      let array = [];
      for (let i = 0; i < limit; i += base) {
        array.push(i);
      }
      return array;
    }

    let fullArray = generateSeries(5, flooredLimit).concat(generateSeries(3, flooredLimit));
    //Set in Javascript doesn't have .reduce so must convert back to array.
    let uniqueValues = new Set(fullArray);
    return Array.from(uniqueValues).reduce((total, current) => total + current);
  }
}

module.exports = solution;
