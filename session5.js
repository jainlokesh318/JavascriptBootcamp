//create a function that returns sum of 5 numbers
function sumOf5num(num1, num2, num3, num4, num5) {
    let sum = num1 + num2 + num3 + num4 + num5;
    console.log(sum);
    return sum;
}
let sum1 = sumOf5num(5, 4, 2, 8, 10);
console.log(sum1);





//Arrow functions
// function sum(){}

// let sum = () => {}

//Exercise 1
function sumOf5num(num1, num2, num3, num4, num5) {
    let sum = num1 + num2 + num3 + num4 + num5;
    console.log(sum);
    return sum;
}

let sumOf5nums = (num1, num2, num3, num4, num5) => {
    let sum = num1 + num2 + num3 + num4 + num5;
    console.log(sum);
    return sum;
}

//Exercise 1
//Create a arrow function rectanglePerimeter that takes length, breadth of rectangle as arguments and return its perimeter
let perimeter = (l, b) => {
    let peri = 2 * l * b;
    console.log(peri);
    return peri;
  };
  perimeter(10, 12);
  
  let num = 4
  let str = "erget"
  
  console.log(typeof perimeter)
  console.log(typeof num)
  console.log(typeof str)

//array
let toBuy = ["maggi", "sauce", "olive", "capsicum", "egetr", "brt", "ergert"];

let length = toBuy.length
console.log(length)
for(let i = 0; i < 6; i = i+1){
    console.log(toBuy[i]);
}

//exercise 2
//write a function that prints all items of given array

let printArrayItems = (arr) => {
    let length = arr.length
    for(let i = 0; i < length; i = i+1){
        console.log(arr[i]);
    }
}

let a1 = ["a", "b", "c", "d"]
printArrayItems(a1)

let a2 = [1, 2, 3, 4, 5];
printArrayItems(a2)

//exercise 2
//write a function that prints items at odd index of given array
let printOddIndexArrayItems = (arr) => {
    let length = arr.length
    for(let i = 0; i < length; i = i+1){
        if(i%2 !== 0){
            console.log(arr[i]);
        }
    }
}

//Practice Exercise
//Find sum of all numbers of given array

//exercise 3
//write a function that return sum of all numbers of given array

//exercise 4
//write a function that return sum of all odd numbers of the given array

//exercise 5
//write a function that return sum of all even numbers of the given array


