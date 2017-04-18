// findLongestWord()
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

var findLongestWord = function (xs) {
  return Math.max.apply(0, xs.map(function (x) { return x.length }))
}
