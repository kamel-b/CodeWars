// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:

//     You need to round the answer to 2 decimal places and return it as String.

//     If the given value is 0 then it should return 0.00

//     You will only be given Natural Numbers as arguments.




const SeriesSum = (serie) => {
    if(serie === 0){
    return '0.00'
    }
    else{
      let sum = 1
      let divisor = 4
      let result = 0
      for (let i = 1; i < serie; i++){
        result = result + (sum/divisor) 
        divisor = divisor + 3
      }    
      result = result +1
      return result.toFixed(2)
    }
    
  }
  
  