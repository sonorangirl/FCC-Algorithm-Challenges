////Free Code Camp Basic Algorithms////

// Repeat after me //
//repeats a string n times
function repeat(str, num) {
  
  var repeatedString = "";
  
  if (num < 0) {
    return repeatedString;
  } else {
    repeatedString = str.repeat(num);
  }
  
  return repeatedString;
}

repeat('abc', 3);