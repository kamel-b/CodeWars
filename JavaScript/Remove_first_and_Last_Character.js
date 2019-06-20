// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = (str) => {
    return str.slice(1, -1)
 };
 



 //OLD SOLUTION 

 function removeChar(str){
    let result =""
    for(i=1;i<=str.length-2;i++){
      result = result + str[i]
    }
    return result
  }
  