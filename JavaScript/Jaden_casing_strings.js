// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.


const toJadenCase = (s) => {
  
    return s.split(' ').map(word => {
      word = word.split('');
      word[0] = word[0].toUpperCase();
      return word.join('');
    }).join(' ');
  }
  