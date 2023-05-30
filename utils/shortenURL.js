function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = "1234567890"

module.exports = function shortenURL(amount) {
  let collection = []
  collection = collection.concat(lowerCaseLetters.split(""))
  collection = collection.concat(upperCaseLetters.split(""))
  collection = collection.concat(numbers.split(""))

  // start generating url
  let id = ""
  for (let i = 0; i < amount; i++) {
    id += sample(collection)
  }
  return id
}
