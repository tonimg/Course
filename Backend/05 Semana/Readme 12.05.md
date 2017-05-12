## Today 12.05 

### [Promises](https://skylabcoders.github.io/bootcamp-abril2017/?full#200)

- [Native implementation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Promises/A+](https://promisesaplus.com/) spec compliant

For create a promise, is like an object:

```javascript
new Promise( /* executor */ function(resolve, reject) { ... } );
```

### [Terminology](https://github.com/promises-aplus/promises-spec/blob/master/README.md#terminology)

1. "promise" is an object or function with a `then` method whose behavior conforms to this specification.
1. "thenable" is an object or function that defines a `then` method.
1. "value" is any legal JavaScript value (including `undefined`, a thenable, or a promise).
1. "exception" is a value that is thrown using the `throw` statement.
1. "reason" is a value that indicates why a promise was rejected.

### [Promise States](https://github.com/promises-aplus/promises-spec/blob/master/README.md#promise-states):

- pending: initial state, not fulfilled or rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed

Scheme promises work's:

![promise.png](img/promise.png)

Hint: Is like constructor opction that take a function that received two function, the first function is for work with the exit result and the second is for work with the possible error.

[Promises/A+](https://promisesaplus.com/) version of [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)

```javascript
const readFile = require('fs-readfile-promise');
 
readFile('path/to/file')
.then(buffer => console.log(buffer.toString()))
.catch(err => console.error(err.message));
}
```

A lot of the promises in ES6, on npm, for example to above [here](https://www.npmjs.com/package/fs-readfile-promise)

Similar work as **Node.js**, and is possible modularity our project

La promesa es una manera mas elegante de trabajar con las operacions asincronas. Evita las [Callback Hell](http://callbackhell.com/)

***Demo Callback Hell*** 👹: 
```javascript
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})

```

Reject a promise:
```javascript
var promise = new Promise( (fulfill, reject) => {
    setTimeout( () => {
        reject( new Error("REJECTED!") )
    },300 );
});

function onReject (error) {
    console.log(error.message)
}
     
promise
    .then(null, onReject )
```


Demos Promises [here](Demos%20Promises)

### [Clases](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- Basic support
- ``class`` and [extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) keywords
- [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) definition
- [static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) method definitions
