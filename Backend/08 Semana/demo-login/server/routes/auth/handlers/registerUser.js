const User = require(__base + 'models/User')

function registerUser (req, res) {
  const { username, password } = req.body

  const account = new User({ username })

  User.register(account, password, err => {
    if (err) {
      return res.json({success: false, msg: 'Username already exists.'})
    }
    res.json({success: true, msg: 'Successful created new user.'})
  })
}

module.exports = registerUser
