const fuelPrice = (litre, priceLitre) => {
  let discount = 0
  let result = 0
  if (litre > 2){
    discount = litre * 0.5
  }
  else if (litre > 4){
    discount = litre * 0.10
  }
  else if (discount > 0.25){
    discount = 0.25
  }
  console.log(discount);
  result = litre * priceLitre - discount
  return Math.round(result *100)/100
}


console.log(fuelPrice());