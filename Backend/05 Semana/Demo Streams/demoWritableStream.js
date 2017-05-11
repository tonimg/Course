var fs = require('fs')

var writableStream = fs.createWriteStream('demoOutput.txt')

// Write the data to stream with encoding to be utf8

new Array(1000).fill('otomucormycosis trinitrophenol neallotype alloquial rhinoplastic amusee uropsile mimine bettering aumail curatively consistence theirn coxcombess irrotational shoeless friendlessness speedily bracero archdean glume remaindership meio chao').forEach(function (pieceText) {
  writableStream.write(pieceText, 'UTF8')
})

// Mark the end of file
writableStream.end()

// Handle stream events --> finish, and error
writableStream.on('finish', function () {
  console.log('Write completed.')
})

