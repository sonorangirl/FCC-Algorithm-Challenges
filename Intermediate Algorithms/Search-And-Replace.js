////Free Code Camp Intermediate Algorithms////

////  Search and Replace  ////
//returns a new sentence with specified values replaced with provided arguments

function myReplace(str, before, after) {
  
  //if word being replaced is capitalized, make replacement word capitalized
  function capitalize(before) {
    if (/^[A-Z]/.test(before)) {
      after = after.replace(after[0], after[0].toUpperCase());
      return after;
    } else {
      return after;
    }
  }
  
  //replace old word with new word
  str = str.replace(before, capitalize);
  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");




