function isVowel (letter) {
  return /[aeiou]/i.test(letter)
}

function isConsonant (letter) {
  return /[a-z]/i.test(letter) && !/[aeiou]/i.test(letter)
}

function countVowels (text) {
  var aFilteredVowels = text.split('').filter(isVowel)
  return aFilteredVowels.length
}

function countConsonants (text) {
  var aFilteredConsonants = text.split('').filter(isConsonant)
  return aFilteredConsonants.length
}

module.exports.isVowel = isVowel
module.exports.isConsonant = isConsonant
module.exports.countVowels = countVowels
module.exports.countConsonants = countConsonants
