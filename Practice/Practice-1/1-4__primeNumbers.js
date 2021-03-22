//Prime numbers (Pr1-4)
//Write a program to detect and print prime numbers
//(integers evenly divisible only by themselves
//and 1), using two nested for loops and the
//modulus operator (%)

//Detect and print prime numbers
function filterPrime(range) {
  for (var counter = 2; counter <= range; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
        break;
      }
    }
    if (notPrime === false) {
      console.log(counter + " - is a prime number");
    }
  }
}
filterPrime(15);

//Define is it prime or not
function getPrime(n) {
  var notPrime = false;
  for (var i = 2; i <= 10; i++) {
    if (n % i === 0 && i !== n) {
      notPrime = true;
      console.log(n + " - is not a prime");
      break;
    }
  }
  if (notPrime === false) {
    console.log(n + " - is a prime number");
  }
}

getPrime(59);
getPrime(57);

