// # Calculator Node

// https://github.com/juanmaguitar/js-server-exercises/blob/master/node-start/01-calculator-module.md

var moment = require('moment')
var division = require('./Operations/division.js').division
var multiplication = require('./Operations/multiplication.js').multiplication
var substraction = require('./Operations/substraction.js').substraction
var sum = require('./Operations/sum.js').sum

console.log('Today is ' + moment().format())
console.log(process.env)
// set MY_NAME=Toni&&node app.js

// Para recoger argumentos directamente cuando ejecutamos node app.js 3 5
// var openrand1 = +process.argv[2]
// var openrand2 = +process.argv[3]

division(21, 7)
multiplication(7, 3)
substraction(7, 3)
sum(3, 7)

// Y para mostrar el resultado via argumentos
// division(openrand1, openrand2)
// multiplication(openrand1, openrand2)
// substraction(openrand1, openrand2)
// sum(openrand1, openrand2)
