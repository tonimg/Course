describe('function fizzBuzz ', function () {
  it('should exist', function () {
    expect(fizzBuzz).toBeDefined()
  })

  it('should be a function', function () {
    expect(typeof fizzBuzz).toBe('function')
  })

  it('should return an array', function () {
    var result = fizzBuzz()
    expect(Array.isArray(result)).toBeTruthy()
  })

  describe('should return an array of 100 numbers or strings depending on the position', function () {
    it('should return an array of 100 elements', function () {
      var result = fizzBuzz()
      expect(result.length).toBe(100)
    })

    describe('should return "Fizz" in positions multiple of 3', function () {
      it('should return "Fizz" in 3rd position', function () {
        var result = fizzBuzz()
        expect(result[2]).toBe('Fizz')
      })
      it('should return "Fizz" in 6th position', function () {
        var result = fizzBuzz()
        expect(result[5]).toBe('Fizz')
      })
    })
    describe('should return "Buzz" in positions multiple of 5', function () {
      it('should return "Buzz" in 5th position', function () {
        var result = fizzBuzz()
        expect(result[4]).toBe('Buzz')
      })
      it('should return "Buzz" in 10th position', function () {
        var result = fizzBuzz()
        expect(result[9]).toBe('Buzz')
      })
    })
    describe('should return "FizzBuzz" in positions multiple of 5 & 3', function () {
      it('should return "FizzBuzz" in 15th position', function () {
        var result = fizzBuzz()
        expect(result[14]).toBe('FizzBuzz')
      })
      it('should return "FizzBuzz" in 30th position', function () {
        var result = fizzBuzz()
        expect(result[29]).toBe('FizzBuzz')
      })
    })
    describe('should return numbers in positions NOT multiple of 5 or 3', function () {
      it('should return a number in 1st position', function () {
        var result = fizzBuzz()
        expect(typeof result[0]).toBe('number')
      })
      it('should return a number in 2nd position', function () {
        var result = fizzBuzz()
        expect(typeof result[1]).toBe('number')
      })
    })
  })
})
