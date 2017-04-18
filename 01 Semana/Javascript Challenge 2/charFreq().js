// charFreq()
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

var charFreq = function (x) {
  return x.split('').reduce(function (acc, x) {
    acc[x] = ++acc[x] || 1
    return acc
  }, {})
}
charFreq('abbabcbdbabdbdbabababcbcbab')
// output: Object {b: 14, a: 7, c: 3, d: 3}

// other version

function charFreq1 (string) {
  var freq = {}
  for (var i = string.length - 1; i >= 0; i--) {
    freq[string[i]] = 1 + (freq[string[i]] || 0)
  }
  return freq
}
charFreq1('abbabcbdbabdbdbabababcbcbab')
// output: Object {b: 14, a: 7, c: 3, d: 3}

// from Juamna
// Way 1
function charFreq (text) {
  var frequencies = {}
  var currentChar
  for (var i = 0; i < text.length; i++) {
    currentChar = text[i]
    if (!frequencies[currentChar]) {
      frequencies[currentChar] = 1
    } else {
      frequencies[currentChar]++
    }
  }
  return frequencies
}

// Way 2
function charFreq (text) {
  var frequencies = {}
  var aText = text.split('')
  aText.forEach(function (currentChar) {
    if (!frequencies[currentChar]) {
      frequencies[currentChar] = 1
    } else {
      frequencies[currentChar]++
    }
  })
  return frequencies
}

// Way 3
function charFreq (text) {
  var frequencies = {}
  var cleanedText = text.replace(/ /g, '')
  var currentChar
  for (var i = 0; i < cleanedText.length; i++) {
    currentChar = cleanedText[i]
    if (!frequencies[currentChar]) {
      frequencies[currentChar] = 1
    } else {
      frequencies[currentChar]++
    }
  }
  return frequencies
}

// Way 4
function charFreq (text) {
  var frequencies = {}
  var cleanedText = text.replace(/[ ,.]/g, '')
  var currentChar
  for (var i = 0; i < cleanedText.length; i++) {
    currentChar = cleanedText[i]
    if (!frequencies[currentChar]) {
      frequencies[currentChar] = 1
    } else {
      frequencies[currentChar]++
    }
  }
  return frequencies
}

// Way 5
function charFreq (text) {
  var frequencies = {}
  var cleanedText = text.replace(/\W/g, '')
  var currentChar
  for (var i = 0; i < cleanedText.length; i++) {
    currentChar = cleanedText[i]
    if (!frequencies[currentChar]) {
      frequencies[currentChar] = 1
    } else {
      frequencies[currentChar]++
    }
  }
  return frequencies
}

// Way 5
function charFreq (text) {
  var frequencies = {}
  var aText = text.match(/\w/gi) // text.match(/[a-z]/gi)
  aText.forEach(function (currentChar) {
    if (!frequencies[currentChar]) {
      frequencies[currentChar] = 1
    } else {
      frequencies[currentChar]++
    }
  })
  return frequencies
}

// Way 6
function charFreq (text) {
  return text
          .match(/\w/gi)
          .reduce(function (oFreq, currentChar) {
            if (!oFreq[currentChar]) oFreq[currentChar] = 1
            else oFreq[currentChar]++
            return oFreq
          }, {})
}

// Way 7
function charFreq (text) {
  return text
          .match(/\w/gi)
          .reduce(function (oFreq, char) {
            oFreq[char] = oFreq[char] ? ++oFreq[char] : 1
            return oFreq
          }, {})
}
