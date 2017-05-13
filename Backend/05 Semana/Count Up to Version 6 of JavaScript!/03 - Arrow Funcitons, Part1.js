var inputs = process.argv.slice(2)
var result = inputs
	.map((item) => { return item[0] })
	.reduce((acc, item) => { return acc + item })

console.log(`[${inputs}] becomes "${result}"`)

// solution from countto6

// var inputs = process.argv.slice(2);
// var result = inputs.map(s => s[0])
//                    .reduce((soFar, s) => soFar + s);

// console.log(`[${inputs}] becomes "${result}"`);
