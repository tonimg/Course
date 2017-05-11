// -- \\  Get Request url
var request = require('request')
var url = process.env.URL

if (!url) throw 'No URL'

request(url, function (error, response, body) {
  // request('http://www.google.com', function (error, response, body) {
  // console.log('error:', error) // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
  // console.log('body:', body) // Print the HTML for the Google homepage.

  var titleWebPage = body.match(/<title>(.*)<\/title>/i)[1]
  console.log('URL= ' + url)
  console.log('Title= ' + titleWebPage)
})
