var fs = require('fs')

var readableStream = fs.createReadStream('demo.txt')
var writableStream = fs.createWriteStream('demoOutput.txt')

readableStream.setEncoding('utf-8')

// readableStream.pipe(process.stdout)
process.stdin.pipe(writableStream)

// readableStream.on('data', function (chunkEncoded) {
//   writableStream.write(chunkEncoded, 'UTF8')
// })

// readableStream.on('end', function (chunkEncoded) {
//   writableStream.end()
// })
