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
  describe('should return a letter indicating the average of the 3 scores ', function () {
    it('should return ONE character', function () {
      var result = gradeBook()
      expect(result.length).toBe(1)
    })
    it('should return "A" or "B" or "C" or "D" or "E"', function () {
      var result = gradeBook()
      expect(result).toMatch(/[A-D]|F/)
    })
    it('should return "F" when gradeBook() → 0 is default value for grades', function () {
      var result = gradeBook()
      expect(result).toBe('F')
    })
    it('should return "A" when gradeBook(95,92,93)', function () {
      var result = gradeBook(95, 92, 93)
      expect(result).toBe('A')
    })
    it('should return "B" when gradeBook(85,81,89)', function () {
      var result = gradeBook(85, 81, 89)
      expect(result).toBe('B')
    })
    it('should return "C" when gradeBook(75,71,78)', function () {
      var result = gradeBook(75, 71, 78)
      expect(result).toBe('C')
    })
    it('should return "F" when gradeBook(20,10,25)', function () {
      var result = gradeBook(20, 10, 25)
      expect(result).toBe('F')
    })
    it('should return "F" when gradeBook(30,20,25)', function () {
      var result = gradeBook(30, 20, 25)
      expect(result).toBe('F')
    })
    it('should return "D" when gradeBook(65, 65, 65)', function () {
      var result = gradeBook(65, 65, 65)
      expect(result).toBe('D')
    })
  })
})
