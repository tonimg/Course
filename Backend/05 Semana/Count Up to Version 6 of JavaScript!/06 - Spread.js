let numbers = process.argv.slice(2)
var minNumbers = Math.min(...numbers)

console.log('The minimum of ' + numbers + 'is' + minNumbers)
