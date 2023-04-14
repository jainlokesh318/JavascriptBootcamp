// function abc(){
//     var z = 1000;
//     console.log(z)

//     let y = 20
//     console.log(y)
// }
// console.log(y)
// console.log(z)
//console.log(a);
//console.log(b);

// {
//     let a = 10
// }

// if(true) {
//     let a = 10
//     console.log(a)
// }

// {
//     var a = 10;
// }
// console.log(a);

// abc()
// let a = 10;
// if(true){
//     let a = 4;
//     console.log("1",a)
// }
// console.log("2",a);



// let a = 10;
// if(true){
//     console.log("before", a)
//     a = 4;
//     console.log("1",a)
//     a = 8
// }
// console.log("2",a);

// let a = 10;
// function xyz(){
//     console.log("before", a)
//     var a = 4;
//     console.log("1",a)
//     {
//         a = 8
//         console.log("2",a)
//     }
//     console.log("3",a)
// }
// console.log("4",a);
// xyz()


// let r;
// console.log(r);

// r = 10;
// console.log(r);

// let r = 10;
// console.log(r);
// r = 7;
// console.log(r);

// const r = 10;
// console.log(r);
// r = 9;
// console.log(r);

// const person = {
//     firstName: "Ram",
//     lastName: "Gupta",
//     address: {
//         country: "India",
//         state: "MP",
//         district: "Sagar"
//     }
// }

// person.age = 25

// delete person.age
// delete person.address.state

// person.firstName = "Shyam"

// person.address.pincode = 123456

// console.log(person)

const arr = [1, 2, 3, 4, 5, "dfeg", [11, 2, 3], {age: 10}]
arr.pop();
// arr.push(34)
console.log(arr)

// https://www.w3schools.com/js/js_array_methods.asp

//TODO :- 
//const with objects
//const with arrays
//arrow functions
//default parameters
//rest and spread
//spread with object
//spread with array

//14th April 
// function getNumber(){
//   return 2
// }

// let getNumber = () => {
//   return 2;
// }

let getNumber = () => 2;

let num = getNumber();
console.log(num)

// let getMultiple = (num) => {
//   return num*10
// } 

// let getMultiple = (num) => num*10

let getMultiple = num => num*10

let getSum = (a, b) => a+b;

//-------------------------------------------

let sum = getSum(3, 5)
console.log(sum)

//COnvert into single line function
console.log("Before", isOdd)
function isOdd(num){
  if(num%2 === 0){
    return false
  }else{
    return true
  }
}
console.log("After", isOdd)

// console.log("-----> Before", isOddARROW)
// let isOddARROW = (num) => {
//   if(num%2 === 0){
//     return false
//   }else{
//     return true
//   }
// }
// console.log("After", isOddARROW)

// console.log("Before a", a)
// var a = 2
// console.log("After a", a)

//Proof of let/const hoisting
// let a = 2
// {
//     console.log(a)
//     let a = 2
// }

let getMultipleDefault = num => num*10

getMultipleDefault();


//Default Parameters
let convertRupeesToDollar = (num=0) => num/80

let res = convertRupeesToDollar();
console.log(res)

let res1 = convertRupeesToDollar(100);
console.log(res1)

//REST OPERATOR
let addSumOptimized = (...nums) => {
    console.log(nums);
};
const resFinal = addSumOptimized(2, 4, 5, 6);

let addSumOptimized2 = (a, b, ...nums) => {
    console.log("a", a)
    console.log("b", b)
    console.log(nums)
};
const resFinal1 = addSumOptimized2(2, 4, 5, 6);

class Flat {
    //Global
      address = "New Delhi"
    
    //Constructor
      constructor(b, t, k) {
        this.bedrooms = b;
        this.toilets = t;
        this.kitchen = k;
      }
    //Methods
      clean = () => {
        console.log("Cleaning", this.bedrooms);
      };
}
    
    const f1 = new Flat(4, 2, 1);
    console.log(f1.address);
    f1.clean()
    const f2 = new Flat(3, 1, 1);
    console.log(f2.address);
    f2.clean()
