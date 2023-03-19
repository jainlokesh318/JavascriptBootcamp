//arguments
function cook(subji){
    console.log("wash", subji);
    console.log("put on flame");
    console.log("cook on flame", subji);

    let readySubji = "cooked "+subji;
    return readySubji;
}

let aalooSbji = cook("aaloo")



//Function declaration
function sqaureArea(side){
    let area = side*side;
    console.log("Area of square is :- ", area);
    return area;
}

//function invocation
let square4Area = sqaureArea(4);
let square5Area = sqaureArea(5);

console.log(square4Area);
console.log(square5Area);

//Exercise 1
//Create a function squarePerimeter that takes side of square as arguments and return its perimeter
//display later
function squarePerimeter(side) {
    let perimeterOfSquare = 4 * side;
    console.log("Perimeter of Square is -:", perimeterOfSquare);
    return perimeterOfSquare;
}
let perimeter1 = squarePerimeter(8);
  
console.log(perimeter1);

//Exercise 2
//Write a function take calculates sum of three numbers and return their sum


//Exercise 3
//Write a function that checks if given number is odd or not
//if odd then return "odd number"
//else return "even number"
function checkEvenOdd(num){
    let remainder = num % 2;
    if(remainder === 0){
        return "even number"
    }else{
        return "odd number"
    }
}

let whatIs4 = checkEvenOdd(4)
console.log(whatIs4)
let whatIs5 =checkEvenOdd(5)
console.log(whatIs5)


//if after dividing by 2 gives 0 remainder its even
//else its odd 

