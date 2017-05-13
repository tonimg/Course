describe('function sum ', function () {
  it('should exist', function () {
    expect(sum).toBeDefined()
  })
  it('should return a number', function () {
    var result = sum()
    expect(typeof result).toBe('number')
  })
  it('should receive 2 arguments', function () {
    expect(sum.length).toBe(2)
  })
  it('should return 5 when sum(2,3)', function () {
    var result = sum(7, 3)
    expect(result).toBe(10)
  })
  it('should return 10 when sum(7,3)', function () {
    var result = sum(7, 3)
    expect(result).toBe(10)
  })
  it('should return 10 when sum("7",3)', function () {
    var result = sum('7', 3)
    expect(result).toBe(10)
  })
  it('should return -1 when sum("skylab",3)', function () {
    var result = sum('skylab', 3)
    expect(result).toBe(-1)
  })
})
