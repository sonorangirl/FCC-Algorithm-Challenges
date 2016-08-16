////Free Code Camp Intermediate Algorithms////

////  Diff Two Arrays  ////
//returns the values that are unique to each arrays (not found in eachother)
//(returns the symmetric difference)

function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  
  //for each element of the array, find out if it is present in the other array by searching for it's index
  function checkArr2(val) {
    if (arr2.indexOf(val) === -1) {
      console.log(val);
      return val;
    }
  }

  //filter first array
  var notInArr2 = arr1.filter(checkArr2);
  
  //Repeat to check second array for missing values in first array
  function checkArr1(val) {
    if (arr1.indexOf(val) === -1) {
      console.log(val);
      return val;
    }
  }
  
  //filter second array
  var notInArr1 = arr2.filter(checkArr1);
  
  //Combine the two new arrays
  newArr = notInArr2.concat(notInArr1);
  
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);


