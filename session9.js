let myHeading = document.getElementById("heading");
console.log(myHeading.innerText);
// const other = document.getElementById("xyz");
// console.log(other)
// //other.innerText would give error if id not in html

// myHeading.innerText = myHeading.innerText + "Lokesh"
// // Hello + Lokesh

let kid = document.getElementById("bache");
console.log(kid)

let buttonClick = () => {
    console.log("Hello")
}

//Adding ears to the kid
kid.addEventListener("click", buttonClick)
//Note:- not function call, but function is passed
