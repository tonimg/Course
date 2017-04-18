// encodeWord
// Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:
// 7 instead of T
// 4 instead of A
// 5 instead of S
// 0 instead of O
function encodeWord (x) {
  var str = x.toLowerCase()
  var newEcondeWord = str.replace(/t/g, '7').replace(/a/g, '4').replace(/s/g, '5').replace(/o/g, '0')
  console.log(newEcondeWord)
}
encodeWord('TaSo')

// other way of Juanma
var codes = {
  'T': 7,
  'A': 4,
  'S': 5,
  'O': 0
}

codificate('juanma') // ju4nm4

// Way 1
function codificate (text) {
  var myText = text
  myText = myText.replace(/t/gi, '7')
  myText = myText.replace(/a/gi, '4')
  myText = myText.replace(/s/gi, '5')
  myText = myText.replace(/o/gi, '0')
  return myText
}

// Way 2
function codificate (text) {
  return text
          .replace(/t/gi, '7')
          .replace(/a/gi, '4')
          .replace(/s/gi, '5')
          .replace(/o/gi, '0')
}

// Way 3
function codificate (text) {
  var codes = {
    't': 7,
    'a': 4,
    's': 5,
    'o': 0
  }
  return text.replace(/[taso]/gi, function (itemFound) {
    return codes[itemFound]
  })
}

// Way 4
function codificate (text) {
  return text.replace(/\w/gi, function (itemFound) {
    var codes = { 't': 7, 'a': 4, 's': 5, 'o': 0, 'j': 1 }
    return codes[itemFound] ? codes[itemFound] : itemFound
  })
}

// Way 5
function codificate (codes, text) {
  return text.replace(/\w/gi, function (itemFound) {
    return codes[itemFound] ? codes[itemFound] : itemFound
  })
}

codificate({ 't': 75, 'a': 43, 's': 55, 'o': 30, 'j': 12 }, 'juanma')

var codes = { 't': 75, 'a': 43, 's': 55, 'o': 30, 'j': 12 }
codificate(codes, 'juanma')
