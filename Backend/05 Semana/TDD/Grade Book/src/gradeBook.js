function gradeBook (a = 0, b = 0, c = 0) {
  var average = (a + b + c) / 3
  if (average >= 0 && average < 60) return 'F'
  else if (average < 70) return 'D'
  else if (average < 80) return 'C'
  else if (average < 90) return 'B'
  else if (average <= 100) return 'A'
}
