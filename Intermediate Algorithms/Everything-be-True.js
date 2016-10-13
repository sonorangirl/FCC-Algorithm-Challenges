////Free Code Camp Intermediate Algorithms////

////  Everything Be True  ////
//Checks if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
  
  //make a loop to check whether each object in the array has a property that's the same as the second argument
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].hasOwnProperty(pre)) {
      console.log('passed 1st check');
      //if found, check the property to make sure the value is truthy, return false if value is falsy (false, 0, "" (empty string), null, undefined, NaN)
      var test = collection[i][pre];
      if (test) {
        console.log('passed 2nd check');
        continue;
      } else {
        console.log('didn\'t pass 2nd check');
        return false;
      }
    } else {
      console.log('didn\'t pass 1st check');
      return false;
    }
  }
  
  return true;
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");






