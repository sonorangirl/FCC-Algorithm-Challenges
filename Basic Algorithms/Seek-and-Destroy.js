////Free Code Camp Basic Algorithms////

// Seek and Destroy //
//removes all the values in first array that match the remaining arguments

function destroyer(arr) {
  
  //Make arguments into an array
  var values = [];
  for (var i = 0; i < arguments.length; i++) {
    values[i] = arguments[i];
  }
  
  //Place first array argument into a seperate variable
  var seek = values.shift();
  
  //Compares values in arrays, returns true if value not found
  function destroy(value) {
    return values.indexOf(value) === -1;
  }
  
  //Removes all values found in values array (returned false with destroy)
  var rubble = seek.filter(destroy);
  
  return rubble;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



