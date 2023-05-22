const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const routes = require('./routes')
const port = 3000
require('./config/mongoose')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(3000, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})