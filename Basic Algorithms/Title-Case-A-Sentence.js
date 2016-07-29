////Free Code Camp Basic Algorithms////

//Title Case a Sentence
//Capitalizes The First Letter Of Every Word, makes all other characters lower case

function titleCase(str) {
  var arr = str.split(' ');
  
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    var upper = arr[i].charAt(0);
    arr[i] = arr[i].replace(upper, upper.toUpperCase());
  }
  
  jaydenSpeak = arr.join(' ');
  
  return jaydenSpeak;
}

titleCase("I'm a little tea pot");