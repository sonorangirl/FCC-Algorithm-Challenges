////Free Code Camp Intermediate Algorithms////

////  Sum all Fibs  ////
//sums all odd fibonacci numbers up to a given number

function sumFibs(num) {
  
  //find the fibonacci numbers up to the given value - create an array by adding the previous two numbers in the array together, until given value
  var fibonacci = [1, 1];
  var lastAndPrev = fibonacci.slice(-1)[0] + fibonacci.slice(-2)[0];
  function createFib (val) {
    while (lastAndPrev <= val) {
      fibonacci.push(lastAndPrev);
      lastAndPrev = fibonacci.slice(-1)[0] + fibonacci.slice(-2)[0];
    }
    console.log(fibonacci);
    return fibonacci;
  }
  var fibSequence = createFib(num);
  
  //reduce the numbers to return only those that are odd and then sum them
  var oddFibs = fibSequence.reduce(function(a,b) {
      if ((b % 2) == 1) {
        a = a + b;
      }
      return a;
  });
  
  return oddFibs;
}

sumFibs(1000);






