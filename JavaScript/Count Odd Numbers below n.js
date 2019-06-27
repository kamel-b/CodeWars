// Count Odd Numbers below n


const oddCount = (n) =>{
    let countOddNumber = 0
    for(let i =0; i< n; i++){
      if(i%2 === 1){
        countOddNumber ++
      }
    }
    return countOddNumber
  }