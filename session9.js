// let myHeading = document.getElementById("heading");
// console.log(myHeading.innerText);

// const other = document.getElementById("xyz");
// console.log(other)
// //other.innerText would give error if id not in html

// myHeading.innerText = myHeading.innerText + "Lokesh"
// // Hello + Lokesh

// let kid = document.getElementById("bache");
// console.log(kid)
// let buttonClick = () => {
//     console.log("Hello")
// }
// kid.addEventListener("click", buttonClick)
//Note:- not function call, but function is passed

//Exercise 1
//Print your name on click of a button


//Exercise 2
//Increment counter on button click

// let myHeading = document.getElementById("heading");

// let kid = document.getElementById("bache");
// let count = 1;

// myHeading.innerText = count;

// let buttonClick = () => {
//     count = count - 1;
//     myHeading.innerText = count
// }
// kid.addEventListener("click", buttonClick)

let division = document.getElementById("test")
console.log(division.innerText)
console.log(division.innerHTML)

//division.innerText = 4
division.innerHTML = "<button>Injected From JS</button>" + division.innerHTML
//division.innerText = "<button>Injected From JS</button>"

