function markdownParser(markdown) {
  // let htmlRegex = /(?=[#])(.*)(?=[<])/
  // if (markdown.match(htmlRegex)) {
  //   markdown = markdown.match(htmlRegex)[0]
  // }
  markdown = markdown.trim();
  if (!markdown.includes(' ')) {
    return markdown
  } else {
    let hashes = markdown.slice(0, markdown.indexOf(' '))
    //markdown headers only go up to 6 hashes
    if (!(hashes.length < 7 && hashes === '#'.repeat(hashes.length))) {
      return markdown
    } else {
      let header = markdown.slice(markdown.indexOf(' '), markdown.length).trim()
      return `<h${hashes.length}>${header}</h${hashes.length}>`
    }
  }
}

module.exports = markdownParser
