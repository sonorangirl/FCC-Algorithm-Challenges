////Free Code Camp Basic Algorithms////

//Chunky Monkey
//Chunks up an array into smaller arrays

function chunk(arr, size) {
  // Break it up.
  var chunkedArray = [];
  var smallerArrays = [];
    
  while (arr.length > 0) {
    //Check if array is long enough to be chunked
    if (arr.length <= size) {
      smallerArrays = arr;
    } else {
        //Add values to a smaller array equal in length to size
        for (var i = 0; i < size; i++) {
          smallerArrays.push(arr[i]);
        }
    }
    
    chunkedArray.push(smallerArrays);
    //Remove the small array from the old array
    arr = arr.slice(size, arr.length);
    //Reset the small array to accept new values
    smallerArrays = [];
  }
  
  return chunkedArray;
}

chunk(['a', 'b', 'c', 'd'], 2);


