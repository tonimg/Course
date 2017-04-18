// `sum()` & `multiply()`
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

var sum = function (numSum) {
  return numSum.reduce(function (x, y) { return x + y })
}

var multiply = function (numMulti) {
  return numMulti.reduce(function (x, y) { return x * y })
}
function sumPlusMulti(arguments){
	return sum + multiply
}
sumPlusMulti('10,10')