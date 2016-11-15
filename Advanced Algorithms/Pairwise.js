////Free Code Camp Advanced Algorithms////

//// Pairwise ////

function pairwise(arr, arg) {
  var filtered = [];
  
  //make an array with indices of values that sum to arg, unless it's adding itself, or a value already in filtered
  var isSum = function() {
    if (i != j && filtered.indexOf(i) < 0 && filtered.indexOf(j) < 0) {
      if (arr[i] + arr[j] === arg) {
        filtered.push(i, j);
      }
    }
  };
  
  //check for pairs
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      arr.filter(isSum);
    }
  }
  console.log(filtered);
  
  //add indexes of filtered values
  var sum = filtered.reduce(function(a,b) {
    return a + b;
  }, 0);
   
  return sum;
}

pairwise([1, 4, 2, 3, 0, 5], 7);








