////Free Code Camp Basic Algorithms////

//Reverse a String

function reverseString(str) {
  myArray = str.split('');
  newString = myArray.reverse().join('');
  return newString;
}

reverseString('hello');