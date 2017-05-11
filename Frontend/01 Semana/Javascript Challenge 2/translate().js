// translate()
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate (test) {
  var arr = []
  var arrVocal = ['a', 'e', 'i', 'o', 'u']
  for (var i = 0; i < test.length; i++) {
    if (test[i] === arrVocal) {
    } else {
      arr.push(test[i] + 'o' + test[i])
    }
  }
  return arr.join('')
}
translate('this is fun')

// my return the string is "tothohioisos o ioisos o fofuounon"
// Example of juanma

function translate2 (text) { return text.replace(/([b-df-hj-np-tv-xz])/g, '$1o$1') }
translate2('this is fun')
// Return of Juanma is: "tothohisos isos fofunon"

// My modified
function translate3 (text) { return text.replace(/([a-z])/g, '$1o$1') }
translate3('this is fun')
// Return my propossal is: "tothohioisos ioisos fofuounon"

// Other version
function translate4 (str) {
  return str.replace(/[^aeiou]/gi, '$1o$1')
}
translate4('this is fun')
// output: '$1o$1$1o$1i$1o$1$1o$1i$1o$1$1o$1$1o$1u$1o$1'
