////Free Code Camp Intermediate Algorithms////

////  Roman Numerals  ////
//converts a number to Roman Numerals

function convertToRoman(num) {
  var newRomanNumeral = "";
  
  //create an array with the Roman Numeral values
  var romanNumeral = [ 'MMMMMMMMM', 'MMMMMMMM', 'MMMMMMM', 'MMMMMM', 'MMMMM', 'MMMM', 'MMM', 'MM', 'M', 'CM', 'DCCC', 'DCC', 'DC', 'D', 'CD', 'CCC', 'CC', 'C', 'XC', 'LXXX', 'LXX', 'LX', 'L', 'XL', 'XXX', 'XX', 'X', 'IX', 'VIII', 'VII', 'VI', 'V', 'IV', 'III', 'II', 'I'];
  
  //create another array with their equivalent number values
  var numberValue = [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];

  //loop through the numberValue array, if num is greater than the current number, add its equivalent roman numeral, using the index of the current number
  for (var i = 0; i <= numberValue.length; i++) {
    if (num >= numberValue[i]) {
      console.log(numberValue[i]);
      newRomanNumeral += romanNumeral[i];
      //then subtract that current number from num to find the next value to add
      num -= numberValue[i];
    }
    
  }

  return newRomanNumeral;
}

convertToRoman(36);


