////Free Code Camp Basic Algorithms////

// Where Do I Belong //
//Returns the lowest index at which a value should be inserted into an array once it has been sorted. 
function where(arr, num) {
  // Find my place in this sorted array.
  
  //Add the new number to the array
  arr.push(num);
  
  //Sort the array
  function compareNumbers(a, b) {
    return a - b;
  }
  arr.sort(compareNumbers);
  
  //Return the index of num
  return arr.indexOf(num);
}

where([40, 60], 50);



