let callbackExample = () => {
    console.log("Helllo")
}

let callbackExample1 = () => {
    console.log("Helllo 1")
}

// let callbackExample2 = () => {
//     console.log("Helllo 2")
// }
// //------------------------------------
// let consumer = (cb) => {
//     cb();
// }

// consumer(callbackExample);
// consumer(callbackExample1);
// consumer(callbackExample2);

//Exercise 1
//Write a function that prints your name using a callback.

//Exercise 2
//Write a function that prints given name using a callback.
const printStr = (str) => {
    console.log(str)
}
const printName = (name, cb) => {
    cb(name)
}
printName("Lokesh", printStr)

// -----------------------------------------------
//Exercise 3
//Write a function which takes 3 arguments :- 2callback, and one number
//If number is odd then call the first callback
//Else call the second callback

