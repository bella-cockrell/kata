const solution = require('./solution');

test('should handle the sum of multiples of 3 or 5 that is less than number', () => {
  expect(solution(-5)).toBe(0); //handle negative
  expect(solution(0)).toBe(0); //handle 0
  expect(solution(2.9)).toBe(0); //handle float
  expect(solution(10)).toBe(23); //given by challenge
  expect(solution(200)).toBe(9168); //given by challenge
})

test('should handle non-number types', () => {
  expect(() => { solution([]) }).toThrow();//handle empty array
  expect(() => { solution([1, 2, 3]) }).toThrow();//handle full array
  expect(() => { solution({}) }).toThrow();//handle object
  expect(() => { solution({ firstName: 'Bella' }) }).toThrow();//handle full object
  expect(() => { solution("Hello") }).toThrow(); //handle string
})
