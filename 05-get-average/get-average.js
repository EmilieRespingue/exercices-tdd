// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
module.exports = function(numbers){
    numbers = numbers.filter((number)=>{
        return typeof(number) === 'number'
        })
    
    let result = 0
    for (i = 0; i < numbers.length; i++){
        result+=numbers[i]        
    }
    result /= numbers.length
    return result
};
   


