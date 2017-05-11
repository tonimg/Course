// buz.js
var Buz = function () {}

Buz.prototype.log = function () {
  console.log('buz!')
}

module.exports.Baz = new Buz()
