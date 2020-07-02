const highAndLow = require('./highAndLow');

test('should return highest and lowest number from a string, as a string', () => {
  expect(highAndLow('5')).toBe('5 5');
  expect(highAndLow('1 2 3 4 5')).toBe('5 1');
  expect(highAndLow('1 2 -3 4 5')).toBe('5 -3');
  expect(highAndLow('1 9 3 4 -5')).toBe('9 -5');
})
