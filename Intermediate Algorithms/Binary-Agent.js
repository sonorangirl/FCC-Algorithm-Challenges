////Free Code Camp Intermediate Algorithms////

////  Binary Agents  ////
//translates binary numbers into readable strings

function binaryAgent(str) {
  
  //seperate the string into an array of each binary number
  str = str.split(' ');
  
  //create a function that converts a binary number to a character
  var text = "";
  var translate = function(binary) {
    text += String.fromCharCode(parseInt(binary, 2));
  };
  
  //apply the function to each value in the array
  str.forEach(translate);
  
  return text;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");





