let userArray = process.argv.slice(2)
let data = {};
[, data.username, data.email ] = userArray
// what goes here?

console.log(data) // {username: "jdoe", email: "john@doe.com"}

// [userId, username, email, age, firstName, lastName]

// solution from countto6

// let args = process.argv.slice(2)
// let result = {};

// [, result.username, result.email] = args

// console.log(result)
