//Random numbers (Pr1-3)
//Get a sequence of random numbers and calculate their
//arithmetic mean value. Stop the process when the next
//number generated randomly equals to 0.

function getRandomNumbers(amount) {
  var randomNumbersContainer = [];  
  for (var i = 0; i < amount; ++i) {
    randomNumbersContainer[i] = Math.floor(Math.random() * 10);
  }
  return randomNumbersContainer;
}
var randomNumbers = getRandomNumbers(10);
console.log(randomNumbers + " - random numbers");

function getMeanValue(someArray) {
  var sum = 0;
  for (var i = 0; i < someArray.length; i++) {
    sum += someArray[i];
  }
  var meanValue = sum / someArray.length;
  return meanValue;
}
var randomNumbersMeanValue = getMeanValue(randomNumbers);
console.log(randomNumbersMeanValue + " - mean value");

function makeStopProcess(someArray, fullStop) {
  var stopProcess = [];
  for (var i = 0; i < someArray.length; i++) {
    stopProcess[i] = someArray[i];
    if (someArray[i] == fullStop) {
      break;
    }
  }
  return stopProcess;
}
var stopArrayProcess = makeStopProcess(randomNumbers, 0);
console.log(stopArrayProcess + " - stops the process when next numer equals \"0\"");

function makeManualView(someArray) {
  var manualString = "";
  for (var i = 0; i < someArray.length; i++) {
    manualString += someArray[i] + " ";
  }
  return manualString;
}
var manualView = makeManualView(randomNumbers);
console.log(manualView + " - random numbers in manual view");

var manualView = makeManualView(stopArrayProcess);
console.log(manualView + " - stop process in manual view");