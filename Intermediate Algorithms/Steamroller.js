////Free Code Camp Intermediate Algorithms////

////  Steamroller  ////
//flattens multiple arrays into one array

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  
  //create a function to check whether value is an array
  var flatten = function(val) {
    if (Array.isArray(val)) {
      //if it is, call function again for each value in array - goes on till it reaches all nested levels 
      for (var i in val) {
         flatten(val[i]);
       }
    } else {
      //once a value is found that is not an array, push it to the new array
      newArr.push(val);
    }
  };
  
  //call the function for each value in the original array
  arr.forEach(flatten);
  
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);





