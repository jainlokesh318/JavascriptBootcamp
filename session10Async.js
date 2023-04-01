//setTimeout
//setInterval

// const toRunFunc = () => {
//     console.log("Hello from Run")
// }

// setTimeout(toRunFunc, 5000)

//Exercise 1 :-
//Write a setTimeout function which prints your name after 3 secs

//Exercise 2
//Write a function which takes a callback and delay. Execute the callback after the delay seconds 
// const toRunFunc1 = () => {
//     console.log("Hello from Run 1")
// }

// const toRunFunc2 = () => {
//     console.log("Hello from Run 2")
// }

// setTimeout(toRunFunc2, 1000);

// const testAsyncCB = (cb, delay) => {
//     setTimeout(cb, delay)
// }

// testAsyncCB(toRunFunc1, 5000)
// testAsyncCB(toRunFunc2, 4000)



//Predict Output
//1.
// setTimeout(() => console.log("A"), 4000)
// setTimeout(() => console.log("C"), 400)
// setTimeout(() => console.log("D"), 1900)
// setTimeout(() => console.log("B"), 6000)
// CDAB

//2
// setTimeout(() => console.log("A"), 0)
// setTimeout(() => console.log("C"), 0)
// setTimeout(() => console.log("D"), 0)
// setTimeout(() => console.log("B"), 0)

//const toRunFunc2 = () => {
//    console.log("Hello from Run 2")
//}

//setInterval(toRunFunc2, 2000);
//TODO:- Read about clearInterval
//Watch:- https://www.youtube.com/watch?v=8aGhZQkoFbQ