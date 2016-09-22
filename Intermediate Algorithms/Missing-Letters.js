////Free Code Camp Intermediate Algorithms////

////  Missing Letters  ////
//Finds the missing letter in the provided letter range and returns it.

function fearNotLetter(str) {

  var missingLetter;
  //set test to be the char code of the first letter - 1
  var test = str.charCodeAt(0) - 1;
  
  //test each letter, if the letter following the previous is not 1 char code more than the previous letter, return the code of that letter - 1, otherwise set the new test to that letter
  for (var i = 0; i < str.length; i++) {
    
    if ((str.charCodeAt(i) - test) !== 1) {
      
      missingLetter = (str.charCodeAt(i) - 1);
      //Get the missing letter from its char code
      missingLetter = String.fromCharCode(missingLetter);
      return missingLetter;
      
    } else {
      test = str.charCodeAt(i);
    }
  }
  
  return undefined;
}

fearNotLetter("abce");





