const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')
const shortenURL = require('../../utils/shortenURL')

router.post('/', (req, res) => {
  // 輸入為空，回首頁
  if (!req.body.url) return res.redirect('/')
  
  const originalURL = req.body.url
  let shortURL = ''

  URL.findOne({ originalURL: originalURL })
    .then((data) => {
      // 網址是否已存在資料庫
      if (data !== null) {
        // 若存在，撈資料庫裡網址的回傳
        res.render('index', {
          shortURL: data.shortURL,
          origin: req.headers.origin,
        })
      } else {
        // 若不存在，產生新網址
        shortURL = generatedURL()
        return URL.create({ shortURL, originalURL: req.body.url })
          .then(() => {
            res.render('index', { 
              shortURL: shortURL, 
              originalURL: req.body.url 
            })
          })
          .catch(error => console.log(error))
      }
    })
})

router.get('/:shortURL', (req, res) => {
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

module.exports = router