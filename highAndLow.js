function highAndLow(numbers) {
  // let array = numbers.split(' ').map(Number);
  // let sortedArray = array.sort((a, b) => { return a - b })
  // return `${sortedArray[sortedArray.length - 1]} ${sortedArray[0]}`;

  let array = numbers.split(' ').map(Number);
  return `${String(Math.max(...array))} ${String(Math.min(...array))}`;
}

module.exports = highAndLow;
