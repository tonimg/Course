const readFile = require('./promiseReadFile.js')
const writeFile = require('./promiseWriteFile.js')

const writeMyFile = data => writeFile('output.txt', data.toUpperCase())
const logMessage = filename => `File ${filename} was properly written`

readFile('demo.txt')
  .then(writeMyFile)
  .then(logMessage)
  .then(console.log)
  .catch(error => writeFile('logs.txt', error))

