////Free Code Camp Intermediate Algorithms////

////  Boo Who  ////
//Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
  
  var primative = typeof bool;
  if (primative == 'boolean') {
    return true;
  } else {
    return false;
  }
}

booWho(null);





