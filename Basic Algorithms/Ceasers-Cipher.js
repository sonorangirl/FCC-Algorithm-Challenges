////Free Code Camp Basic Algorithms////

// Ceasers Cipher //
//Uses the ROT13 to shift letters by 13 places and decode the string

function rot13(str) { // LBH QVQ VG!
  
  //create an array with the char codes from each charater
  var arr = [];
  
  //loop through string to find each characters char code value
  for (var i = 0; i < str.length; i++) {
    
    //if the value falls between 78-90 or N-Z, subtract 13 to get corresponding A-M letter
    if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
      arr.push(str.charCodeAt(i) - 13);
      
    //if the value falls between 65-77 or A-M, add 13 to get corresponding N-Z letter
    } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
      arr.push(str.charCodeAt(i) + 13);
    
    //if the value is in neither of these ranges, add the original char code to array
    } else {
      arr.push(str.charCodeAt(i));
    }
    
  }
  // console.log(arr);
  
  //form a new string from changed Char Codes
  str = String.fromCharCode.apply(String, arr);
  // console.log(str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");




