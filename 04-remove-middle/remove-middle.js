module.exports = function (words) {
  let newArr = []
  let middle = (words.length - 1) / 2
  newArr.push(words[middle])
  words.splice(middle, 1)
  return newArr
}
