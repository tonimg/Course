// filterLongWords()
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

var filterLongWords = function (xs, i) {
  return xs.filter(function (x) { return x.length > i })
}

// other version
function findLongestWordLength (array) {
  return Math.max.apply(null, array.map(function (word) {
    return word.length
  }))
}
