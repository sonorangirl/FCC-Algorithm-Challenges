////Free Code Camp Intermediate Algorithms////

//// Convert HTML Entities  ////

function convertHTML(str) {

  //create an object with the html entities matched to their characters
  var characters = {'&':'&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&apos;' };
  
  //use regex to find the instances where these characters are used, and replace them with their html entites
  var regex = /[&<>"']/g;
  str = str.replace(regex, function(match) {
    return characters [match];
  });
  
  return str;
}

convertHTML("Shindler's List");






