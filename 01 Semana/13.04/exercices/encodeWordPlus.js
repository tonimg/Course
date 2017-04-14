// encodeWordPlus
// Improve the previous function to add a random number between 0 and 1000 every 7 characters

function encodeWord (x) {
  var newEcondeWord = x.replace(/t/g, '7').replace(/a/g, '4').replace(/s/g, '5').replace(/o/g, '0')
  console.log(newEcondeWord)
  Math.floor((Math.random() * 100) + 1)
}
encodeWord('tasonnn')
