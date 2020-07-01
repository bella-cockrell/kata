//I'm playing around with the code to show off. This is not production-ready code.

class SolutionTypeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'SolutionTypeError'
  }
}

const solution = (number) => {
  if (typeof number === 'object' && !Array.isArray(number)) throw new SolutionTypeError('input is object');
  if (Array.isArray(number)) throw new SolutionTypeError('input is array');
  if (typeof number === 'string') throw new SolutionTypeError('input is string');

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
