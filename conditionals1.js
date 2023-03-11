//11 March 2023

// Read more about == and ===
// 12 == 12 -> true
// 12 == "12" -> true

// 12 === 12 -> true
// 12 === "12" -> false

//Exercise Game Building
let dice1 = 2;
let dice2 = 10;

//1. calculate sum in a new variable, sumOfDice
//2. if sum less than 12 -> "Would you like to roll one more dice?"
//3. if sum equals 12 -> "Hurrah! you have won the game"
//4. if sum exceeds 12 -> "Bye, Bye! Better Luck Next Time."

let sumOfDice = dice1 + dice2;
//1. calculate sum in a new variable, sumOfDice
if (sumOfDice < 12) {
  console.log("Would you like to roll one more dice?");
} else if (sumOfDice === 12) {
  console.log("Hurrah! you have won the game");
} else {
  console.log("Bye, Bye! Better Luck Next Time");
}