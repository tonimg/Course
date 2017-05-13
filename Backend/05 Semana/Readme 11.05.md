## Today 11.05

### [ECMAScript 2015](http://www.ecmascript.org/index.php)

![es2015.png](img/es2015.png)

[ES2015 Overview](https://skylabcoders.github.io/bootcamp-abril2017/?full#es2015)
---------------

- Approved in **June 2015**, 1st update since 2009!
- A lot of new syntax features
- Backwards compatible (mostly syntactic sugar that can be desugared to older versions of the language)
- Current support: [Kangax compatibility table](http://kangax.github.io/compat-table/es6/)
- We can use them right now with a source to source compiler (transpiler) : see [Babel](https://babeljs.io/), [Traceur](https://github.com/google/traceur-compiler) and [TypeScript](http://www.typescriptlang.org/)


### [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

More inforation [here](https://hackernoon.com/javascript-arrow-functions-for-beginners-926947fc0cdc)

- Shorter syntax using **``=>``**
- Always anonymous
- Lexically bind this
- Really useful for event handlers and callbacks
- Really neat when using functional programming

Normal function in JavaScript (**ES5**):
```javascript
function sum (a,b){
    return a+b
}
```

Using the arrow into the function JavaScript (**ES6**):
```javascript
var sum = (a,b)=> a+b
```

JavaScript (**ES5**):
```javascript
[2,4,6,56,2,5,2,3].map( function (myNumber){
    return myNumber*2
})
```

JavaScript (**ES6**):
```javascript
var multiplyBy2 =  num => num*2
var filterHigherThan10  = num => num > 10

[2,4,56,2,5,2,3]
  .map( multiplyBy2 )
  .filter( filterHigherThan10 )
})
```

JavaScript (**ES5**):
```javascript
[1,3,4,5,6,7].filter(function(n) { return n % 2 } )
  .map(function(n, i) { return n + i } ); 

```

JavaScript (**ES6**):
```javascript
[1,2,3,4,5,6,7].filter(n => n % 2).map((n, i) => n+i);
```

**[Exercices](https://skylabcoders.github.io/bootcamp-abril2017/?full#154)**

### [Block Scope](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)

- Two new types of "variables": [*``let``*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and [*``const``*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- Both with block scope

The difference between is that ``let`` is possible modifi the value of the variable and the ``const`` not. 

Example ``const``:

```javascript
var name = "paco"

function doSomethingComplex( isTall ) {

  console.log(name) // shows 'paco'

  if (isTall === true) {
    const name = "juanma" // this variable is always fixed. 
    if (name.length > 3 ) {
      name = "juanmanuel"
    }
    console.log(name) 
  }

 console.log(name) 
}

doSomethingComplex(true) // The finally the program throw an error
```

Example ``let``:

```javascript
var name='paco'

function doSomethingComplex(isTall) {

    console.log(name)           // shows 'paco'

    if(isTall === true) {
        let name = 'juanma' // this variable is possible modify. 
        if (name.length > 3) {
            name = 'juanmanuel'
        }
        console.log(name)       // shows 'juanmanuel'
    }
    console.log(name)           // shows 'paco'
}
doSomethingComplex(true)
```

[Exercises with block scope](https://skylabcoders.github.io/bootcamp-abril2017/?full#159)

### [Template Strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)

- [Enclosed by back-ticks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) ``
- Multi-line support
- Can contain **placeholders** ``${ expression }``

JavaScript (**ES6**):
```javascript
`string text`
­
`string text line 1
 string text line 2`
­
`string text ${expression} string text`
```

[Exercices template string](https://skylabcoders.github.io/bootcamp-abril2017/?full#164)

### [IIFE](http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript#8228308) 

--> autoexecutable functions (**I**mmediately-**i**nvoked **f**unction **e**xpression)

[http://benalman.com/news/2010/11/immediately-invoked-function-expression/](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)

Example:
```javascript
(function(){
    // all your code here
    var foo = function() {};
    window.onload = foo;
    // ...
})();
// foo is unreachable here (it’s undefined)
```

### [Enhanced Object Literals](https://github.com/lukehoban/es6features#enhanced-object-literals)

Page slide [165](https://skylabcoders.github.io/bootcamp-abril2017/?full#165) with more details

- Shorthand property names
- Shorthand methods names
- Dynamic property names
- [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/set)
- Examples

[Exercices for practice](https://skylabcoders.github.io/bootcamp-abril2017/?full#168)

###   [Default parameters](https://skylabcoders.github.io/bootcamp-abril2017/?full#169)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)


### [Destructuring](https://skylabcoders.github.io/bootcamp-abril2017/?full#171)

- Array destructuring
- Object destructuring

[Example](destructuring_objects___arrays.js)

Any more examples.

```javascript
// Deep objects
var {
  prop: x,
  prop2: {
    prop2: {
      nested: [ , , b]
    }
  }
} = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}};
console.log(x, b);
// => Hello c
```

```javascript
// Equal to:
var { prop: prop, prop2: prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5
```

```javascript
// All well and good, can we do more? Yes!
// Using as method parameters
var foo = function ({prop: x}) {
  console.log(x);
};

foo({invalid: 1}); // undefine
foo({prop: 1}); // 1
```

### [Rest operator](https://skylabcoders.github.io/bootcamp-abril2017/?full#175)

- Bind trailing parameters to an array using ``...``
- Replaces the need for arguments

```javascript
function multiply(multiplier, ...numbers) {
  return numbers.map(n => multiplier * n);
}
multiply(10,3,4,5,6)

//[30,40,50,60] <-- return an array 
```

[Exercices](https://skylabcoders.github.io/bootcamp-abril2017/?full#176) 

### [Spread operator](https://skylabcoders.github.io/bootcamp-abril2017/?full#177)

- For **function calls**: allows an expression to be expanded in places where multiple arguments are expected
- For **array litterals**: allows an expression to be expanded in places where multiple elements are expected

```javascript
function f(x, y, z) {
  return x + y + z;
}
­
var arr = [1, 2, 3];
f(...arr) === 6; // true
­
[0, ...arr, 4, 5, 6, 7]; 

// [0, 1, 2, 3, 4, 5, 6, 7] <-- return an array
```

[Exercices](https://skylabcoders.github.io/bootcamp-abril2017/?full#178)
