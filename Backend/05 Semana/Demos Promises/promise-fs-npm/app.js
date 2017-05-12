const readFile = require('fs-readfile-promise')
const writeFile = require('fs-writefile-promise')

const translateToString = buffer => buffer.toString()
const writeMyFile = data => writeFile('output.txt', data.toUpperCase())

const logMessage = filename => `File ${filename} was properly written`

readFile('demo.txt')
  .then(translateToString)
  .then(writeMyFile)
  .then(logMessage)
  .then(console.log)
  .catch(error => console.log(error))

