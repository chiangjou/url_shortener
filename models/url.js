const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  originalURL: {
    type: String,
    required: true
  },
  randomCharacter: {
    type: String,
    required: true
  },
  transformedURL: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('URL', urlSchema)