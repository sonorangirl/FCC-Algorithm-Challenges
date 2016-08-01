////Free Code Camp Basic Algorithms////

// Truncate a string //
//Ends a string after specified num of characters
//Then adds elipses (useful for blog snippets)

function truncate(str, num) {
  // Clear out that junk in your trunk
  if (num >= str.length) {
    return str;
    
  } else {
    //Determine where to end slice (remove 3 characters for ellipses)
    var sliceEnd = num - str.length - 3;

    var newString = str.slice(0, sliceEnd);

    newString += "...";

    return newString;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);