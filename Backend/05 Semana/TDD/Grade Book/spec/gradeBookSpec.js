describe('function gradeBook ', function () {
  it('should exist', function () {
    expect(gradeBook).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof gradeBook).toBe('function')
  })
  it('should return a string', function () {
    var result = gradeBook()
    expect(typeof result).toBe('string')
  })

  it('should receive ONE argument', function () {
    var result = gradeBook()
    expect(result.length).toBe(1)
  })

  it('should return "F" when gradeBook(<60)', function () {
    var result = gradeBook(60)
    expect(result).toBe('F')
  })

  // it('should return "drink coke" when peopleWithAgeDrink(17)', function () {
  //   var result = drinkBeer(17)
  //   expect(result).toBe('drink coke')
  // })

  // it('should return "drink beer" when peopleWithAgeDrink(18)', function () {
  //   var result = drinkBeer(18)
  //   expect(result).toBe('drink beer')
  // })

  // it('should return "drink whisky" when peopleWithAgeDrink(30)', function () {
  //   var result = drinkBeer(30)
  //   expect(result).toBe('drink whisky')
  // })
})
