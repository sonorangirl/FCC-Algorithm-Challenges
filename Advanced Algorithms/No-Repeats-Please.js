////Free Code Camp Advanced Algorithms////

//// No Repeats Please ////

function permAlone(str) {
  
  //create an array of arrays with all possible permutations of the given string
  var findItsPerms = str.split('');
  var possiblePerms = [];
  var regEx = /([a-z])\1+/g;
  
  //function to swap array elements
  function swap(arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
  
  function getHeapsPerms(num, arr) { // where num = amount of items in arr
    //when num = 1, all elements have been through cycle, add it to the possiblePerms arr
    if (num === 1) {
      possiblePerms.push(arr.join('')); //join arr to make strings as new elements in possiblePerms
    }
    
    for (var i = 0; i < num; i++) {
      getHeapsPerms(num-1, arr);
      
      // If num is even
      if (num % 2 === 0) {
          swap(arr, i, num - 1);
      } else {
          swap(arr, 0, num - 1);
      }
    }
  }
  
  getHeapsPerms(findItsPerms.length, findItsPerms);
  
  //filter possiblePerms array by matching any subarrays with consecutive letters, return those that dont have consecutive letters
  var uniquePerms = possiblePerms.filter(function(perm) {
    return !(perm.match(regEx));
  });
  
  //Return the uniques count
  return uniquePerms.length;
}

permAlone('aab');









