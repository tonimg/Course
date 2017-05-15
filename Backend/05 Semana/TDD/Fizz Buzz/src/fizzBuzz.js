function fizzBuzz () {
  return new Array(100).fill(0).map((_, i) => {
    let pos = i + 1
    if (pos % 5 === 0 && pos % 3 === 0) {
      return ('FizzBuzz')
    } else if (pos % 3 === 0) {
      return ('Fizz')
    } else if (pos % 5 === 0) {
      return ('Buzz')
    }
    return pos
  })
}
