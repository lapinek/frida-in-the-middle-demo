const router = require('express').Router()

router.get('/', function (req, res) {
  var message

  message = req.session.frida.message

  req.session.frida.message = ''

  res.render('home', {
    data: {
      profile: req.session.frida.profile,
      message: message
    }
  })
})

module.exports = router
