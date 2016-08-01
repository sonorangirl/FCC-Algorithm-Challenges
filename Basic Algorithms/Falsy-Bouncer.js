////Free Code Camp Basic Algorithms////

// Falsey Bouncer //
//removes falsey values from an array (false, null, 0, "", undefined, and NaN.)

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  function falseValues(value) {
    if (Boolean(value)) {
      return true;
    } else {
      return false;
    }
  }
  
  var trueValues = arr.filter(falseValues);

  return trueValues;
}

bouncer([7, 'ate', '', false, 9]);



