// `reverse()`
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

var reverse = function (string) {
  return string.split('').reverse().join('')
}
reverse('jag testar')

// other version

function reverse2 (string) {
  var rev = new Array(string.length)
  for (var i = string.length - 1; i >= 0; i--) {
    rev[i] = string[string.length - i - 1]
  }
  return rev.join('')
}
reverse2('jag testar')
