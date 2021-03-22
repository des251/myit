//Butterfly (Pr1-2)
//Create a two dimensional array and fill it to produce a butterfly.

function makeButterfly(size) {
  var butterfly = new Array(size);
  for (var i = 0; i < butterfly.length; i++) {
    butterfly[i] = new Array(size);
  }
  for (var row = 0; row < butterfly.length; row++) {
    for (var col = 0; col < butterfly[row].length; col++) {
    butterfly[row][col] = 1;
    }
  }
  for (var row = 1; row < butterfly.length - row; row++) {
    for (col = 0; col < row; col++) {
      butterfly[row][col] = 0;
      butterfly[row][butterfly[row].length - (col + 1)] = 0;
    }
  }
  for (var reverseRow = butterfly.length - 2, n = 1; reverseRow >= row; reverseRow--, n++)  {
    for (var reverseCol = 0; reverseCol < n; reverseCol++) {
      butterfly[reverseRow][reverseCol] = 0;
      butterfly[reverseRow][butterfly[reverseRow].length - (reverseCol + 1)] = 0;
    }
  }
  return butterfly;
}
var matrixButterfly = makeButterfly(11);
console.log(matrixButterfly);

function manualView(someTwoDimensionalArray) {
  for (var row = 0; row < someTwoDimensionalArray.length; row++) {
    var manual = "";
    for (var col = 0; col < someTwoDimensionalArray[row].length; col++) {
    manual += someTwoDimensionalArray[row][col] + " ";
    }
    console.log(manual);
  }
}
manualView(matrixButterfly);