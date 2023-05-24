const express = require('express')
const exphbs = require('express-handlebars')
require('./config/mongoose')
// const routes = require('./routes')

const URL = require('./models/URL')
// const shortenURL = require('./utils/shortenURL')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// app.use(routes)

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  if (!req.body.url)
    return res.redirect('/')
  const shortURL = shortenURL(5)

  URL.findOne({ originalURL: req.body.url })
    .then(data =>
      data ? data : URL.create({ shortURL, originalURL: req.body.url })
    )
    .then(data =>
      res.render('index', {
        origin: req.headers.origin,
        shortURL: data.shortURL,
      })
    )
    .catch(error => console.log(error))
})

app.get('/:shortURL', (req, res) => {
  const { shortURL } = req.params

  URL.findOne({ shortURL })
    .then(data => {
      if (!data) {
        return res.render('error', {
          errorMsg: "Can't found the URL",
          errorURL: req.headers.host + "/" + shortURL
        })
      }
      res.redirect(data.originalURL)
    })
    .catch(error => console.log(error))
})

app.listen(3000, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})