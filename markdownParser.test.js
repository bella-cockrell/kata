const markdownParser = require('./markdownParser')

test('should return a string formatted as HTML', () => {
  expect(markdownParser('# Header')).toBe('<h1>Header</h1>') //1 hash
  expect(markdownParser('### Small Header')).toBe('<h3>Small Header</h3>') //3 hashes
  expect(markdownParser('# #')).toBe('<h1>#</h1>') //# as header
  expect(markdownParser('#')).toBe('#') //empty Header
  expect(markdownParser('#Header')).toBe('#Header') //returns in full as invalid
  expect(markdownParser('#Header Small')).toBe('#Header Small') //returns in full as invalid
  expect(markdownParser('#9## Header')).toBe('#9## Header') // hashes array does not contain all hashes
  expect(markdownParser('######## Header')).toBe('######## Header') // returns in full as too many hashes
})
