function waitAndDoWithRandomNumber (timeToWait, functionToExecute) {
  setTimeout(function () {
    var randomNumber = Math.floor(Math.random() * 10000)
    functionToExecute(randomNumber)
  }, timeToWait)
}

waitAndDoWithRandomNumber(2000, function (randomNumber) {
  console.log('Waiting ' + randomNumber + 'ms')
  waitAndDoWithRandomNumber(randomNumber, function (randomNumber) {
    console.log('Waiting ' + randomNumber + 'ms')
    waitAndDoWithRandomNumber(randomNumber, function (randomNumber) {
      console.log('Waiting ' + randomNumber + 'ms')
      waitAndDoWithRandomNumber(randomNumber, function (randomNumber) {
        console.log('Waiting ' + randomNumber + 'ms')
        waitAndDoWithRandomNumber(randomNumber, function (randomNumber) {
          console.log('Waiting ' + randomNumber + 'ms')
          waitAndDoWithRandomNumber(randomNumber, function (randomNumber) {
            console.log('Waiting ' + randomNumber + 'ms')
            console.log('THE END')
          })
        })
      })
    })
  })
})
