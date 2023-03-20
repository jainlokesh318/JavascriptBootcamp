//create a function that returns sum of 5 numbers
function sumOf5num(num1, num2, num3, num4, num5) {
    let sum = num1 + num2 + num3 + num4 + num5;
    console.log(sum);
    return sum;
}
let sum1 = sumOf5num(5, 4, 2, 8, 10);
console.log(sum1);





//Arrow functions
function sum(){}

let sum = () => {}

//Exercise 1
function sumOf5num(num1, num2, num3, num4, num5) {
    let sum = num1 + num2 + num3 + num4 + num5;
    console.log(sum);
    return sum;
}

let sumOf5num = (num1, num2, num3, num4, num5) => {
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


