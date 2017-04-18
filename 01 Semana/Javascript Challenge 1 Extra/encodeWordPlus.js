// encodeWordPlus
// Improve the previous function to add a random number between 0 and 1000 every 7 characters

function encodeWord (userString) {
  userString = userString.toLowerCase().split('')
  for (var i = 7; i < userString.length - 1; i += 7) {
    userString.splice(i, 0, Math.floor(Math.random() * 1000) + 1)
  }
  return userString.join('')
}
encodeWord('Vamos a merendar que es hora')
