////Free Code Camp Basic Algorithms////

// Confirm the Ending //
//Confirms the Ending of a String 
function end(str, target) {
  
  var start = 0 - target.length;
  var length = target.length;
  
  if (target === str.substr(start, length)) {
    return true;
  } else {
    return false;
  }
}

end('Bastian', 'n');