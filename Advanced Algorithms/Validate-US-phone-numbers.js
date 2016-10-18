////Free Code Camp Advanced Algorithms////

///  Validate US Phone Numbers  ///

function telephoneCheck(str) {
  
  var phoneNumber = str.split('');

  //check for leading dashes
  if (phoneNumber[0] === "-") {
    return false;
  }
  
  //Remove all values that aren't a number, or a () with .filter
  var regEx = /[\d()]/;
  
  phoneNumber = phoneNumber.filter(function(val) {
    return regEx.test(val);
  });
  
  var regEx2 = /\d/;
  //filters out allowed parentheses
  function removeAllowedParentheses(a,b) {
    if (phoneNumber[a] === "(" && phoneNumber[b] === ")") {
    
       phoneNumber = phoneNumber.filter(function(val) {
          return regEx2.test(val);
       });
      
    } else {
       return false;
    }
  }
  
  //if array contains parentheses
  if (phoneNumber.indexOf("(") != -1 && phoneNumber.indexOf(")") != -1)  {
      
      //find out how many, if more than 1 of each, return false
      var numberOfParentheses = phoneNumber.filter(function(a) {
        return (a === "(" || a ===")");
      });
      if (numberOfParentheses.length > 2) {
        return false;
      }
    
      //if the array starts with a 1, 
      if (phoneNumber[0] === "1") {
        //if 1st and 5th values are (), proceed and filter them out, otherwise return false
          removeAllowedParentheses(1,5);
        
      } else {
      //if 0 and 4th values are (), proceed and filter them out, otherwise return false
          removeAllowedParentheses(0,4);
      }
  }
    
  //if array.length < 10, return false
  if (phoneNumber.length < 10) {
    return false;
    
  //if array.length > 11, return false
  } else if (phoneNumber.length > 11) {
    return false;
  
  //if array.length = 11, check if first value is 1, otherwise return false
  } else if (phoneNumber.length === 11 && phoneNumber[0] !== "1") {
      return false;
    
  //if it passes everything else, return true
  } else {
    return true;
  }
}

telephoneCheck("1 (555) 555-5555");

//Better Way//
function telephoneCheck(str) {
   var regEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regEx.test(str);
}
telephoneCheck("555-555-5555");


