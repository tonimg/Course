#Javascript Challenge 2

**Do the exercises suggested at [https://github.com/juanmaguitar/exercises-javascript/tree/master/02-more-steps](https://github.com/juanmaguitar/exercises-javascript/tree/master/02-more-steps)**

## Javascript Exercises 

### `translate()`

Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
*[Solution](translate().js)*

### `sum()` & `multiply()`

Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
*[Solution](sum()&multiply().js)*

### `reverse()`

Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
*[Solution](reverse().js)*

### `translate()`

Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.
*[Solution](translate().js*)

### `findLongestWord()`

Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
*[Solution](findLongestWord().js)*

### `filterLongWords()`

Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
*[Solution](filterLongWords().js)*

### `charFreq()`

Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
*[Solution](charFreq().js)*


Ejemplo de como poder machear si cumple que cumpla este patron.

Patrón de ejmplo y averiguar si cumple como patron de fecha: ('02-03-2017')

```javascript
/[0-9]{2}-[0-9]{2}-[0-9]{4}.test('02-03-2017')
// output true
``` 
