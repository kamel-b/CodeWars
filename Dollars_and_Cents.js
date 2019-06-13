// // The rest of your team will make sure that the argument is sanitized before being passed to your function although 
// you will need to account for adding trailing zeros if they are missing (though you won't 
// have to worry about a dangling period).

const formatMoney =(amount) => {
    return '$' + amount.toFixed(2)
  }
  

