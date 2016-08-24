////Free Code Camp Intermediate Algorithms////

////  Pig Latin  ////
//translates a string into Pig Latin

function translatePigLatin(str) {
  
  //find the first vowel in the string
  var firstVowel = "";
  for (var i = 0; i < str.length; i++) {
    if (/[aeiou]/.test(str[i])) {
      firstVowel =  str.indexOf(str[i]);
      console.log(firstVowel);
      break;
    }
  }
  
  //if the vowel is the first letter, add "way" to the end of the string
  if (firstVowel === 0) {
    str = str.concat("way");
  }
  
  //if not, remove all the consonants from before the vowel, add them to the end of the string, and add "ay" to the end of the string
  if (firstVowel >= 1) {
    var consonants = str.substr(0, firstVowel);
    str = str.slice(firstVowel).concat(consonants, "ay");
  }
  
  return str;
}

translatePigLatin("consonant");




