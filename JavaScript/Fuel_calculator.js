const fuelPrice = (litre, priceLitre) => {
  let result = 0
  for(let i = 2 ; i<= 10 ; i+=2){
    if(litre >= i){
      priceLitre = priceLitre - 0.05
    }
  }
  result = litre * priceLitre
  return Number(result.toFixed(2))
}