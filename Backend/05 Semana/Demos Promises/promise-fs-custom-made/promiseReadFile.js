const fs = require('fs')

function readFilePromise (fileToRead) {
  return new Promise(function (resolve, reject) {
    // Async Operation
    fs.readFile(fileToRead, 'utf8', function (err, data) {
      if (err) reject(err)
      resolve(data)
    })
  })
}

module.exports = readFilePromise
