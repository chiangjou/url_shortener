const db = require('../../config/mongoose')
const URL = require('../url')

// 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCastLetters = upperCaseLetters.toLowerCase()
const number = '0123456789'
const charaterArray = upperCaseLetters.split('').concat(lowerCastLetters.split(''), concat(number.split('')))

const generatedCharacter = (array) => {
  let result = ''
  for (i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * array.length)
    result += array[index]
  }
  return result
}

db.once('open', () => {
  URL.create({
    originalURL: 'https://www.google.com',
    randomCharacter: generatedCharacter(charaterArray),
    generatedURL: `http://localhost:3000/${generatedCharacter(charaterArray)}`
  })
  console.log('URL generated')
})

module.exports = {
  charaterArray: charaterArray,
  generatedCharacter: generatedCharacter
}