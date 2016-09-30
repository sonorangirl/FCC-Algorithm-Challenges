////Free Code Camp Intermediate Algorithms////

//// Spinal Tap Case ////
//converts a string to spinal case
//Spinal case is all-lowercase-words-joined-by-dashes

function spinalCase(str) {
  
  //If string has spaces or _ change them to dashes
  var regex = /[_\s]/g;
  str = str.replace(regex, function(match) {
    return "-";
  });
  
  //Then add dashes in front of Capitals, unless it's the first character
  var regex2 = /[A-Z]/g;
  
  str = str.charAt(0) + str.substr(1).replace(regex2, function(match) {
      return '-' + match;
  });
  
  //Then find cases where two dashes were added, remove one
  var regex3 = /--/g;
  str = str.replace(regex3, function(match) {
    return "-";
  });
  
  //Then make everything LowerCase
  str = str.toLowerCase();
  
  return str;
}

spinalCase('thisIsSpinalTap');







