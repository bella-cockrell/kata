function markdownParser(markdown) {
  let array = Array.from(markdown);
  if (array.indexOf(' ') === -1) {
    console.log(markdown);
    return markdown;
  } else {
    let hashArray = String(array.splice(0, array.indexOf(' '))).replace(/,/g, '');

    let headerArray = String(array.splice(array.indexOf(' '), array.length)).trim().replace(/,/g, '');
    if (hashArray.search(/#{7,}/gm) === 0) {
      console.log(markdown);
      return markdown;
    } else {
      const hashNumber = hashArray.length;
      console.log(`<h${hashNumber}>${headerArray}</h${hashNumber}>`);
      return (`<h${hashNumber}>${headerArray}</h${hashNumber}>`);
    }
  }
}


module.exports = markdownParser;
