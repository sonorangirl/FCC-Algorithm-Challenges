////Free Code Camp Intermediate Algorithms////

//// Smallest Common Multiple  ////
//returns the smallest common multiple of an array of numbers

function smallestCommons(arr) {
  
  //create an array with all the values in between the range given
  var range = [];
  arr = arr.sort(function(a,b) {
    return a - b;
  });
  
  for (var i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  
  //create a function to find if a number is a multiple of a value in the array
  var number = 0;
  var isMultiple = false;
  
  var checkMultiple = function(value) {
    if (number % value === 0) {
      isMultiple = true;
    } else {
      isMultiple = false;
    }
  };
  
  //apply function to each value in the array, if it passes the function, check the next value, if not, break and move on to the next number
  while (isMultiple === false) {
    number++;
   
    for (var j = 0; j < range.length; j++) {
      checkMultiple(range[j]);
      if (isMultiple === false) {
        break;
      }
    }
  }
 
  //once the function has found a number that is a multiple of all the values in the range, the while loop ends and the current number will be returned.
  return number;
}

smallestCommons([1, 5]);





