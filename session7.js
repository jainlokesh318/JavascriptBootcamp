// DESTRUCTURING & Spread Operator

//Exercise 1
//Write a function that returns a copy of the given array

//Version 1
// let makeCopy = (arr) => {
//     let newArr = []
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(arr[i])
//     }
//     return newArr;
// }

//Version 2
// let makeCopy = (arr) => {
//     // ...arr
//     //let newArr = ["Apple", "Banana", "Mango", "Pineapple"]
//     let newArr = [...arr]
//     return newArr
// }

// let test = ["Apple", "Banana", "Mango", "Pineapple"]
// let res1 = makeCopy(test)
// console.log(res1)



//Exercise 2
//Write a function that add 2 more fruits to the given array and return it
// let addFruits = (arr) => {
//     let newArr = []
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(arr[i])
//     }

//     newArr.push("orange")
//     newArr.push("kiwi")

//     return newArr;
// }

// let addFruits = (arr) => {
//     //let newArr = ["Apple", "Banana", "Mango", "Orange", "Kiwi"]
//     let newArr = [...arr, "Orange", "Kiwi"]
//     return newArr;
// }

// let res = addFruits(["Apple", "Banana", "Mango"])
// console.log(res)

let makeCopy = (arr) => {
    let newArr = [...arr];
   
  return newArr;
  };
  
  let arr1 = makeCopy(["maha ","raja"]);
  console.log(arr1);