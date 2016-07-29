//// Free Code Camp Basic Algorithms ////

// Find the Longest Word //
//Finds the longest word in a sentence

function findLongestWord(str) {
  var arr = str.split(' ');
  var count = 0;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > count) {
      count = arr[i].length;
    }
  }
  return count;  
}

findLongestWord('The quick brown fox jumped over the lazy dog');