// Include express from node_modules
const express = require("express")
// require express-handlebars here
const exphbs = require("express-handlebars")
// Define server related variables
const port = 3000
// require mongoose
require("./config/mongoose")
// Include router
const routes = require("./routes")

const app = express()

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
// setting static engine
app.use(express.static("public"))
// Ask every request use body-parser
app.use(express.urlencoded({ extended: true }))
// Direct request to router
app.use(routes)

// Start and Listen the server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})