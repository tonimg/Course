// Integer Numbers Range
// Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1

function getRange (x1, x2) {
  var result = ' '
  if (x2 < x1) {
    return -1
  }
  for (var i = x1 + 1; i < x2; i++) {
    result += i + ' '
  }
  return result
}
getRange(5, 9)
