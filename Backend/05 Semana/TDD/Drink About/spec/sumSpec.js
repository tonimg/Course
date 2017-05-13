describe('function drinkBeer ', function () {
  it('should exist', function () {
    expect(drinkBeer).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof drinkBeer).toBe('function')
  })
  it('should return a string', function () {
    var result = drinkBeer()
    expect(typeof result).toBe('string')
  })

  it('should receive ONE argument', function () {
    expect(drinkBeer.length).toBe(1)
  })

  it('should return "drink toddy" when peopleWithAgeDrink(13)', function () {
    var result = drinkBeer(13)
    expect(result).toBe('drink toddy')
  })

  it('should return "drink coke" when peopleWithAgeDrink(17)', function () {
    var result = drinkBeer(17)
    expect(result).toBe('drink coke')
  })

  it('should return "drink beer" when peopleWithAgeDrink(18)', function () {
    var result = drinkBeer(18)
    expect(result).toBe('drink beer')
  })

  it('should return "drink whisky" when peopleWithAgeDrink(30)', function () {
    var result = drinkBeer(30)
    expect(result).toBe('drink whisky')
  })
})
