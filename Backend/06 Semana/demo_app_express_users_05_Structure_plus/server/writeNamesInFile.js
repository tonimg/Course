const write = require('write-file-promise')
const OUTPUT_FILENAME = `${__dirname}/data/data.json`

function writeNamesInFile( names ) {
  const jsonListNames = JSON.stringify(names)
  return write(OUTPUT_FILENAME, jsonListNames) // return a promise
}

module.exports = writeNamesInFile