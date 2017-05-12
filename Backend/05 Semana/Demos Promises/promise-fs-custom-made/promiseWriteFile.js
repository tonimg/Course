const fs = require('fs')

function writeFilePromise (fileToWrite, content) {
  return new Promise(function (resolve, reject) {
    // Async Operation
    fs.writeFile(fileToWrite, content, function (err) {
      if (err) reject(err)
      resolve(`File ${fileToWrite} was properly written`)
    })
  })
}

module.exports = writeFilePromise
