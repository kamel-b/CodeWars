// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.



const countPositivesSumNegatives  = (arr)=>{
    let count = 0
    let sum = 0
    let result = []
    if(arr== 0 || arr == null){
      return result
    }
    for(let i = 0; i <arr.length; i++){
      if(arr[i] > 0){
        count ++
      }
       else if(arr[i] < 0){
        sum = sum + arr[i]
      }
      
    }
    result.push(count, sum)
    return  result
  }