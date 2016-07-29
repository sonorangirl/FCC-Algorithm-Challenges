////Free Code Camp Basic Algorithms////

// Largest Numbers in Arrays //
//Find the largest numbers within groups of numbers
function largestOfFour(arr) {
  
  var largestNumbers = [];
  
  //Loop through array to access subarrays
  for (var j = 0; j < arr.length; j++) {
    
    var largest = 0;
    for (var i = 0; i < arr[j].length; i++) {
      //Compare each value in sub array
      if (arr[j][i] > largest) {
        largest  = arr[j][i];
      }
    }
    
    //Append largest value in each sub array to new array
    largestNumbers.push(largest);
  }
  
  //Return the new array
  return largestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
