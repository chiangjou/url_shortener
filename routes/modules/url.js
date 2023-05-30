const express = require("express")
const router = express.Router()
const URL = require("../../models/URL")
const shortenURL = require("../../utils/shortenURL")

router.post("/", (req, res) => {
  if (!req.body.url) return res.redirect("/")
  const shortURL = shortenURL(5)

  URL.findOne({ originalURL: req.body.url })
    .then(data =>
      data ? data : URL.create({ shortURL, originalURL: req.body.url })
    )
    .then(data =>
      res.render("index", {
        origin: req.headers.origin,
        shortURL: data.shortURL,
      })
    )
    .catch(error => console.error(error))
})

router.get("/:shortURL", (req, res) => {
  const { shortURL } = req.params

  URL.findOne({ shortURL })
    .then(data => {
      if (!data) {
        return res.render("error", {
          errorMsg: "Cannot found the URL",
          errorURL: req.headers.host + "/" + shortURL
        })
      }
      res.redirect(data.originalURL)
    })
    .catch(error => console.log(error))
})

module.exports = router