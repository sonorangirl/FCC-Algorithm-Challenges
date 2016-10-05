////Free Code Camp Intermediate Algorithms////

////  Sum All Primes  ////
// sums all the prime numbers up to a given value

function sumPrimes(num) {
  
  //create a function to determine if a number is a prime number
  var primes = function(val) {
    for (var i = 2; i < val; i++) {
      if (val % i === 0) {
        return 0;
      }
    }
    return val;
  };
  
  //loop through values up to num, sum any number found to be a prime
  var summedPrimes = 0;
  
  if (num > 1) {
    for (var i = 2; i <= num; i++) {
      summedPrimes += primes(i);
    }
  }
  return summedPrimes;
}

sumPrimes(977);




