module.exports = function formatCities(capitals, transform) {

    let oneCity = [];
    for (const capital of capitals){
        let result = transform(capital)
        oneCity.push(result)
    }
    
    return oneCity
  }