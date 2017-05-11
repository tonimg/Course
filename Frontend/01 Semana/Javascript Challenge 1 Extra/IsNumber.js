// isNumber
// Define a function called ​isNumber​ that receives a value and return true if the value received is a number
//    isNumber(3) // true
//    isNumber("3") // false
//    isNumber("asass") // false

function isNumber (x) {
  if (typeof x !== 'number') {
    false
  } else { return true }
  return (isNaN(x))
}

isNumber(3)
isNumber('3')

isNumber('asass')
