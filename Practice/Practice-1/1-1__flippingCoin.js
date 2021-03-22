//Coin Flipping (Pr1-1)
//Write a program that simulates coin-flipping.

function flipCoin(times) {
  var heads = "-";
  var tails = "o";

  for (var i = 0; i < times; i++) {
    (i % 2 != 0) ? console.log(heads) : console.log(tails);
  }
}
flipCoin(10);