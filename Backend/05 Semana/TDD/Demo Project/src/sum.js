function sum (a, b) {
  var result = parseInt(a) + parseInt(b)
  return isNaN(result) ? -1 : result // operacion ternaria
}
