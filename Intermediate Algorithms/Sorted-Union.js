////Free Code Camp Intermediate Algorithms////

//// Sorted Union  ////
//takes two or more arrays and returns a new array of unique values in the order of the original provided arrays
//(no duplicates)

function uniteUnique(arr1, arr2, arr3) {
  
  //create an array of arrays from the variable number of arguments
  var args = Array.prototype.slice.call(arguments);
  
  // reduce arrays into one array
  var single = args.reduce(function(a, b) {
    return a.concat(b);
  });
                                         
  //reduce single array by checking whether value is present or not
  var filtered = single.reduce(function(a,b) {
    if (a.indexOf(b) === -1) {
      a.push(b);
    }
    return a;
  }, []);
  
  return filtered;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);






