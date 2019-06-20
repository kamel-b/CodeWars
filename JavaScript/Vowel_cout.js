// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.




const getCount = (str) =>{

   let vowelsCount = 0;

     for(let i=0;i<=str.length;i++){
        switch(str[i]){
            case  "a":
            vowelsCount++
            break;
            case "e":
            vowelsCount++
            break;
            case "i":
            vowelsCount++
            break;  
            case "o":
            vowelsCount++
            break;  
            case "u":
            vowelsCount++
            break;
              }
              
     }
     
     return vowelsCount;
   }