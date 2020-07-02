const markdownParser = require('./markdownParser');

test('should return a string formatted as HTML', () => {
  expect(markdownParser('# Header')).toBe('<h1>Header</h1>'); //1 hash
  expect(markdownParser('### Small Header')).toBe('<h3>Small Header</h3>'); //3 hashes
  expect(markdownParser('# #')).toBe('<h1>#</h1>'); //# as header
  expect(markdownParser('#Header')).toBe('#Header'); //returns in full as not formatted correctly
  expect(markdownParser('####### Header')).toBe('####### Header');// too many hashes
})
