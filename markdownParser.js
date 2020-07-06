function markdownParser(text) {
  let markdownArray = Array.from(text)
  if (!markdownArray.includes(' ')) {
    return text
  } else {
    let hashes = markdownArray.slice(0, markdownArray.indexOf(' '))
    const hashChecker = (element) => {
      return element === '#'
    }

    if (hashes.every(hashChecker) && hashes.length < 7) {
      //markdown headers only go up to 6 hashes
      let headerString = String(
        markdownArray.slice(markdownArray.indexOf(' '), markdownArray.length)
      )
      let cleanHeaderString = headerString.trim().replace(/,/g, '')
      return `<h${hashes.length}>${cleanHeaderString}</h${hashes.length}>`
    } else {
      return text
    }
  }
}

module.exports = markdownParser
