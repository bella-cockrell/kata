const solution = require('./solution')

test('returns the sum of multiples of 3 or 5 that is less than number', () => {
  expect(solution([])).toBe(0);//handle array
  expect(solution({})).toBe(0);//handle object
  expect(solution("Hello")).toBe(0); //handle string
  expect(solution(-5)).toBe(0); //handle negative
  expect(solution(0)).toBe(0); //handle 0
  expect(solution(2.9)).toBe(0); //handle float
  expect(solution(10)).toBe(23); //given by challenge
  expect(solution(200)).toBe(9168); //given by challenge
})
