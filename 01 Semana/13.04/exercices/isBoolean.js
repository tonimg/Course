// isBoolean
// Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean
//    isBoolean(3) // false
//    isBoolean("true") // false
//    isBoolean(true) // true
function isBoolean (x) {
  if (typeof x !== 'boolean') {
    false
  } else { return true }
  console.log(isNaN(x))
}
