//Coin-Flipping (Pr1-1)
// Write a program that simulates coin-flipping.

function flippingCoin(times) {
  var heads = "-";
  var tails = "o";

  for (var i = 0; i < times; i++) {
    (i % 2 != 0) ? console.log(heads) : console.log(tails);
  }
}
flippingCoin(5);



//Butterfly (Pr1-2)
// Create a two dimensional array and fill it to produce a butterfly.

var butterfly = new Array(5);

for (var i = 0; i < butterfly.length; i++) {
  butterfly[i] = new Array(5);
}

for (var row = 0; row < butterfly.length; row++) {
  var manual = "";
  for (var col = 0; col < butterfly[row].length; col++) {
    butterfly[row][col] = 1;
    butterfly[1][0] = 0;
    butterfly[2][0] = 0;
    butterfly[2][1] = 0;
    butterfly[3][0] = 0;
    butterfly[1][4] = 0;
    butterfly[2][3] = 0;
    butterfly[2][4] = 0;
    butterfly[3][4] = 0;
    manual = manual + butterfly[row][col] + " ";
  }
  console.log(manual);
}


//Random numbers (Pr1-3)
// Get a sequence of random numbers and calculate their
// arithmetic mean value. Stop the process when the next
// number generated randomly equals to 0.

var randomNumbers = [];
var sumRandomNumbers = 0;
var stopProcess = [];
var resultRandomNumbers = "";
var resultStopProcess = "";

for (var i = 0; i < 10; ++i) {
  randomNumbers[i] = Math.floor(Math.random() * 10);//random numbers in Array
  resultRandomNumbers = resultRandomNumbers + randomNumbers[i] + " ";//manual view for random numbers
}

for (var b = 0; b < randomNumbers.length; b++) {
  sumRandomNumbers = sumRandomNumbers + randomNumbers[b];//sum of values 
}

var meanValue = sumRandomNumbers / randomNumbers.length;//arithmetic mean value

for (var c = 0; c < randomNumbers.length; c++) {
  stopProcess[c] = randomNumbers[c];
  if (randomNumbers[c] == 0) {//stops when next number equals to 0
    break;
  }
  resultStopProcess = resultStopProcess + stopProcess[c] + " ";//manual view for random numbers with stop process
}

console.log(resultRandomNumbers + "- sequence of random numbers");
console.log(meanValue + " " + "- mean value of random numbers");
console.log(resultStopProcess + "- sequence of random numbers which stops when next number equals to 0");

//Prime numbers (Pr1-4)
// Write a program to detect and print prime numbers
// (integers evenly divisible only by themselves
// and 1), using two nested for loops and the
// modulus operator (%)

//Prime numbers from 0 to 10
for (var counter = 2; counter <= 10; counter++) {
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


// //1-10
// function getPrime(n) {
//   var notPrime = false;
//   for (var i = 2; i <= 10; i++) {
//     if (n % i === 0 && i !== n) {
//       notPrime = true;
//       console.log(n + " - is not a prime");
//       break;
//     } 
//   }
//   if (notPrime === false) {
//     console.log(n + " - is a prime number");
//   }
// }

// getPrime(5);






// Sort random numbers (Pr1-5)
// Sort an array of random generated numbers.

var sortRandomNumbers = [4, 5, 2, 1, 3];

for (var i = 0; i < 10; i++) {
  sortRandomNumbers[i] = Math.floor(Math.random() * 10);
}

console.log(sortRandomNumbers.sort());

var randomList = new Array(10);
for (i = 0; i < randomList.length; i++) {
  randomList[i] = Math.floor(Math.random() * 10);
}

for (i = 0; i <= randomList.length - 2; i++) {
  var minValue = randomList[i];
  for (j = i + 1; j <= randomList.length - 1; j++) {
    if (randomList[j] < minValue) {
      minValue = randomList[j];
      var swap = randomList[i];
      randomList[i] = minValue;
      randomList[j] = swap;
    }  
  }
}

console.log(randomList);
  
