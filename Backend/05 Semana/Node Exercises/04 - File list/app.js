var fs = require('fs')
var files = fs.readdirSync('./')

for (var i in files) {
  var definition = require('../application/models/' + files[i]).Model
  console.log('Model Loaded: ' + files[i])
}
