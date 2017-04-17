// encodeWordPlus
// Improve the previous function to add a random number between 0 and 1000 every 7 characters

// function encodeWord (x) {
//   var str = x.toLowerCase()
//   var newEcondeWord = str.replace(/t/g, '7').replace(/a/g, '4').replace(/s/g, '5').replace(/o/g, '0')
//   for (var i = 0; i < str.newEcondeWord; i += 7) {
//     newEcondeWord[i] = Math.floor(Math.random() * 1000) + 1
//   }

//   return (newEcondeWord[i])
// }
// encodeWord('tason>7<')
/// /

function encodeWord (x) {
  var str = x.toLowerCase()
  var newEcondeWord = str.replace(/t/g, '7').replace(/a/g, '4').replace(/s/g, '5').replace(/o/g, '0')
  // count the words
  for (var i = 0; i < newEcondeWord.lenght; i += 7) {
    newEcondeWord[i] = Math.floor(Math.random() * 1000) + 1
  }
  return (newEcondeWord)
}
encodeWord('TaSo')
