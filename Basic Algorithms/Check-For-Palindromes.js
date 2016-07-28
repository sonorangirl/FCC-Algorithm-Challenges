////Free Code Camp Basic Algorithms////

//// Check for Palindromes ////
//Checks if a word is a palindrome

function palindrome(str) {
  
  //Strip punctuation and spaces in original string
  str = str.replace(/[\.\\,-\/#!$%\^&\*;:{}=\-_`~()\s]/g, '');
  str = str.toLowerCase();
  
  //Reverse to new string
  var myArray = str.split('');
  var reversedString = myArray.reverse().join('');
  
  if (reversedString === str) {
    return true;
  }
  else {
    return false;
  }
  
}

palindrome("eye");
