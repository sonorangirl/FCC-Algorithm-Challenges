////Free Code Camp Basic Algorithms////

// Mutations //
//find if all the letters of a second word appear somewhere in the first word

function mutation(arr) {
  //Make all letters lowercase and split strings into arrays
  var isMutation = true;
  var original = arr[0].toLowerCase().split('');
  var newWord = arr[1].toLowerCase().split('');
  
  //Loop through newWord
  for (var i = 0; i < newWord.length; i++) {
    //Find if newWord[i] has a match in original
    if (original.indexOf(newWord[i]) == -1) {
      isMutation = false;
    }
  }
  
  return isMutation;
}

mutation(['hello', 'hey']);




