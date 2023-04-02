// console.log("A")
// setTimeout(() => console.log("B"), 6000)
// console.log("C")
// Wrong:- ABC
// Right:- ACB

// console.log("A")
// setTimeout(() => console.log("B"), 1)
// console.log("C")

// console.log("X")
// setTimeout(() => console.log("Z"), 0)
// console.log("Y")
// Right:- XYZ

//TODO:- Read about CORS
//
// const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log(res)

console.log("A")

// fetch("https://SillyMagnificentEvents.lokesh-jainjain.repl.co")
// .then(data => data.text())
// .then(text => console.log(text))

console.log("B")

const myHeading = document.getElementById("heading")

fetch("https://SillyMagnificentEvents.lokesh-jainjain.repl.co")
.then(data => data.json())
.then(json => {
    myHeading.innerText = json.text
})