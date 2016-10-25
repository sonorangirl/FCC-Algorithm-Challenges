////Free Code Camp Advanced Algorithms////

///  Symmetric Difference  ///
//returns the symmetric difference of two or more arrays

function symDiff(args) {
  var argsArray = [...arguments];
  
  function findUniques(currentArr, nextArr) {
    var uniques = [];
    
    //loop through each array
    for (var i = 0; i < currentArr.length; i++) {
      
      //if the current value is not found in the next array or the uniques array
      if (nextArr.indexOf(currentArr[i]) < 0 && uniques.indexOf(currentArr[i]) < 0) {
          //add it to the uniques array
          uniques.push(currentArr[i]);
      }
    
    }
    
    //reverse the comparison
    for (var j = 0; j < nextArr.length; j++) {
      
      //if the current value is not found in the prev array or the uniques array
      if (currentArr.indexOf(nextArr[j]) < 0 && uniques.indexOf(nextArr[j]) < 0) {
          //add it to the uniques array
          uniques.push(nextArr[j]);
      }

    }
    
    //then sort final results
    uniques.sort(function(a, b) {
      return a - b;
    });
    
    return uniques;
    
  }
 
  return argsArray.reduce(findUniques);
}

symDiff([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);


