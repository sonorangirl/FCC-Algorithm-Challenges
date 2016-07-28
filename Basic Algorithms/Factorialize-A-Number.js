////Free Code Camp Basic Algorithms////

//Factorialize a number
function factorialize(num) {
  var total = 1;
  for (i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

factorialize(5);