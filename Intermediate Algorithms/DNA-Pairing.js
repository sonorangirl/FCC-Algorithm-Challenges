////Free Code Camp Intermediate Algorithms////

////  DNA Pairings  ////
//attaches the correct base pair value to each letter of a string of nucleotides

function pairElement(str) {
  var pairedArray = [];
  
  //split string into an array
  var singleArray = str.split('');
 
  for (var i = 0; i < singleArray.length; i++) {
    //Determine what element to add to each array item
    if (singleArray[i] === "A") {
      pairedArray.push(["A", "T"]);
    } else if (singleArray[i] === "T") {
      pairedArray.push(["T", "A"]);
    } else if (singleArray[i] === "C") {
      pairedArray.push(["C", "G"]);
    } else if (singleArray[i] === "G") {
      pairedArray.push(["G", "C"]);
    }
  }
  
  return pairedArray;
}

pairElement("GCG");




