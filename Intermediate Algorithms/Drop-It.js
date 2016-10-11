////Free Code Camp Intermediate Algorithms////

////  Drop it  ////
// Drops elements of an array, starting from the front, until the second argument returns true
//returns the remaining array

function dropElements(arr, func) {
  // Drop them elements.
  var arrFull = true;
  
  while(arrFull) {
    if (arr.length === 0) {
      arrFull = false;
    } else if (func(arr[0])) {
      return arr;
    }
    
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5; });





