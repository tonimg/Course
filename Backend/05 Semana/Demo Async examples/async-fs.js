var fs = require('fs')

var fileToRead = 'demo.txt'
var fileStats = 'stats.txt'

fs.readFile(fileToRead, 'utf8', function (err, dataReadFromFile) {
  if (err) throw err
  var arrayWordsText = dataReadFromFile.split(' ')
  var arrayFilteredWords = arrayWordsText.filter(function (word) {
    return word.includes('fuck')
  })
  var numberOccurrences = arrayFilteredWords.length

  var textToWrite = 'Number of words = ' + arrayWordsText.length
  textToWrite += '\nNumber of words with "fuck"= ' + numberOccurrences
  fs.writeFile(fileStats, textToWrite, function (err) {
    if (err) throw err
    console.log("stats written in 'stats.txt'")
  })
})

// myOwnReadFileFake(nameFile, callbackFn) {
//   var error, resultReadingFile;
//   // do some reading stuff
//   if (sometingWentWrong) {
//     error = { desc: "Error mu gordo"}
//   }
//   else {
//     resultReadingFile = "content of File magically obtained..."
//   }

//   callbackFn(error, resultReadingFile)
// }
