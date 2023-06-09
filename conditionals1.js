//11 March 2023

// Read more about == and ===
// 12 == 12 -> true
// 12 == "12" -> true

// 12 === 12 -> true
// 12 === "12" -> false

//Exercise Game Building
let dice1 = 5;
let dice2 = 10;


//1. calculate sum in a new variable, sumOfDice
//2. if sum less than 12 -> "Would you like to roll one more dice?"
//3. if sum equals 12 -> "Hurrah! you have won the game"
//4. if sum exceeds 12 -> "Bye, Bye! Better Luck Next Time."

let sumOfDice = dice1 + dice2;

let wonTheGame = false;
let aliveInTheGame = true;
let message = ""

//show the message
//1. Initialize a variable, message with empty string
//2. Store respective value of the message as per the cases
//3. print the message
console.log(message)

//1. button with "Start the Game" text
//2. store the button element in JS variable
//3. create a function startGame -> console.log("Starting");
//3. on click of button call the function startGame()
function startGame() {
    let sumEl = document.getElementById("sum")
    sumEl.innerText = "Sum :- "+ sumOfDice
    //deciding section
    if (sumOfDice < 12) {
        message = "Would you like to roll one more dice?"
    } else if (sumOfDice === 12) {
        message = "Hurrah! you have won the game"
        wonTheGame = true;
    } else {
        aliveInTheGame = false;
        message = "Bye, Bye! Better Luck Next Time"
    }

    //prize distribution
    if (wonTheGame) {
        console.log("Here is your prize")
    } else {
        console.log("No Prize for you at this moment")
    }

    if (aliveInTheGame) {
        console.log("Still alive in the game");
    } else {
        console.log("No more lives left");
    }
}

let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame)

let d1 = document.getElementById("dice1")
d1.innerText = dice1
let d2 = document.getElementById("dice2")
d2.innerText = dice2