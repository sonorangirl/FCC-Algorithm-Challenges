////Free Code Camp Intermediate Algorithms////

// Sum All Numbers //
//sums all numbers within a range

function sumAll(arr) {
  //create a new array with additional values of all numbers between two original array values
  var low = Math.min(...arr);
  var high = Math.max(...arr);
  var range = [];
  
  for (var i = low; i <= high; i++) {
    range.push(i);
  }
  
  console.log(range);
  
  //add all the values together
  var sum = range.reduce(function(a,b) {
    return a + b;
  });
  
  //return the summed value
  return sum;
}

sumAll([1, 4]);

