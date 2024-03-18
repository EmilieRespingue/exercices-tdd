module.exports = function (array) {
  let numberArray = []
  for (i = 0; i < array.length; i++) {
    if (typeof (array[i]) == 'number') {
      numberArray.push(array[i])
    }
  }
  return numberArray.reduce((a, b) => a + b, 0) / numberArray.length
}





