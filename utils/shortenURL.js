function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generatedURL() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = []
  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(upperCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))

  // start generating url
  let url = ''
  for (let i = 0; i < 5; i++) {
    url += sample(collection)
  }

  // return the generated url
  return url
}

module.exports = generatedURL
