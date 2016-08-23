////Free Code Camp Intermediate Algorithms////

// Where Art Thou //
//finds a matching key/value pair from an array of objects

function where(collection, source) {
  // What's in a name?
  var arr = [];
  
  //Find the key and value in the source object
  var key = Object.keys(source);
  var value = source[key];
  
  //Determine if any objects in the array have a matching key and value with the source object
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].hasOwnProperty(key) && collection[i][key] == value) {
      //Push the matching objects to a new array
      arr.push(collection[i]);
    }
  }
  
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });




