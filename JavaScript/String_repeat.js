// Write a function called repeatStr which repeats the given string string exactly n times.


const repeatStr = (n, s) =>{
    let result = ''
    for(let i = 0; i< n; i++){ 
      result = result + s    
    }
    return result
  }
