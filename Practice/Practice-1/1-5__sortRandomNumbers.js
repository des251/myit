//Sort random numbers (Pr1-5)
//Sort an array of random generated numbers.

function getRandomNumbers(amount) {
  var randomNumbersContainer = [];  
  for (var i = 0; i < amount; ++i) {
    randomNumbersContainer[i] = Math.floor(Math.random() * 10);
  }
  return randomNumbersContainer;
}
var randomNumbers = getRandomNumbers(10);
console.log(randomNumbers + " - random numbers");

function getSort(someArray) {
  for (i = 0; i <= someArray.length - 2; i++) {
    var minValue = someArray[i];
    for (j = i + 1; j <= someArray.length - 1; j++) {
      if (someArray[j] < minValue) {
        minValue = someArray[j];
        var swap = someArray[i];
        someArray[i] = minValue;
        someArray[j] = swap;
      }  
    }
  }
  return someArray;
}
var sortRandomNumbers = getSort(randomNumbers);
console.log(sortRandomNumbers + " - sort random numbers");

function makeManualView(someArray) {
  var manualString = "";
  for (var i = 0; i < someArray.length; i++) {
    manualString += someArray[i] + " ";
  }
  return manualString;
}
var manualView = makeManualView(randomNumbers);
console.log(manualView + " - sort random numbers in manual view");