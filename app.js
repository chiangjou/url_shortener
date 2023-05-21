// Include express from node_modules
const express = require('express')
const app = express()
// require express-handlebars
const exphbs = require('express-handlebars')
// Define server related variables
const port = 3000
// require mongoose
require('./config/mongoose')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static engine
app.use(express.static('public'))

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req.body', req.body)
  res.render('index')
})

// start and listen on the Express server
app.listen(3000, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})