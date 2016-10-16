////Free Code Camp Intermediate Algorithms////

////  Arguments Optional ////

function addTogether() {
  //create function to check whether arguments are valid numbers
  var isNumber = function(val) {
    if (typeof val !== 'number') {
      return undefined;
    } else {
      return val;
    }
  };
  
  //create function to add two arguments together
  var sumEverything = function(a,b) {
    return a + b;
  };

  //if there is only 1 argument, check if its a number, then return a function for a new argument, check if it's a number, if it is, add them together
  if (arguments.length < 2) {
    var single = isNumber(arguments[0]);
    if (single) {
      return function(newArgument) {
        var single2 = isNumber(newArgument);
        if (single2) {
          return sumEverything(single, single2);
        }
      };
    }
  } else {
    //if it has 2 arguments, check if they are numbers and add together
    var num1 = isNumber(arguments[0]);
    var num2 = isNumber(arguments[1]);
    if (num1 && num2) {
      return sumEverything(num1, num2);
    }
  }
}

addTogether(2,3);






