const router = require('express').Router()

router.get('/login', function (req, res) {
  var message

  message = req.session.frida.message

  req.session.frida.message = ''

  res.render('session/login', {
    data: {
      message: message
    }
  })
})

router.get('/registration', function (req, res) {
  var message

  req.session.frida = req.session.frida || {
  }

  message = req.session.frida.message

  req.session.frida.message = ''

  res.render('session/registration', {
    data: {
      requirements: req.session.frida.requirements,
      message: message
    }
  })
})

router.post('/registration', function (req, res) {
})

router.post('/login', function (req, res) {
})

module.exports = router
