// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.



const invert = (arr)=>{
    for(let i = 0; i< arr.length; i++){
      if(arr[i] > 0){
        arr[i] = -arr[i]
      }
      else{
        arr[i]=  arr[i] - arr[i] - arr[i]
      }
    }
    return arr
  }