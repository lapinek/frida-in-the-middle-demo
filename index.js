const express = require('express')
const app = express()
const session = require('express-session')
const rootRoutes = require('./routes/root')
const sessionRoutes = require('./routes/session')
const profileRoutes = require('./routes/profile')

app.set('view engine', 'ejs')

app.use(session({
  secret: 'there-is-no-privacy-get-over-it',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 4
  },
  name: 'forgerock'
}))

// FR custom
app.use(express.urlencoded({
  extended: true
}))

const frida = require('frida-in-the-middle')

app.use(frida({
  loginFreeRoutes: [
      '/session/login',
      '/session/logout',
      '/session/registration'
  ],
  loginRoutes: ['/session/login'],
  registrationRoutes: ['/session/registration'],
  logoutRoutes: ['/session/logout'],
  loginRedirectRoute: '/profile',
  api: {
    host: 'localhost',
    port: '8080',
    protocol: 'http',
    username: 'anonymous',
    password: 'anonymous'
  }
}))
// FR custom: end

app.use('/session', sessionRoutes)

app.use('/profile', profileRoutes)

app.use('/', rootRoutes)

// nothing else volunteered
app.use(function (req, res, next) {
  //res.render('404', {url: req.url})
  res.redirect('/')
})

app.listen(4040, function () {
  console.log('listening: 4040')
})
