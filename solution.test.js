const solution = require('./solution')

test('returns the sum of multiples of 3 or 5 that is less than number', () => {
  expect(solution(10)).toBe(23);
  expect(solution(31)).toBe(225); //to remove duplicates like 15 and 30
  expect(solution(200)).toBe(9168);
  expect(solution(1000000)).not.toBe(0); //to check speed of calculating large numbers
})
