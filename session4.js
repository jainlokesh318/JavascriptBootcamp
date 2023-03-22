//arguments
function cook(subji){
    console.log("wash", subji);
    console.log("put on flame");
    console.log("cook on flame", subji);

    let readySubji = "cooked "+subji;
    console.log(readySubji)
}

let ourSbji = cook("aaloo")



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



//LOOPS
function cook(subji){
    let readySubji = "cooked "+subji;
    return readySubji;
}

for(let count = 1; count < 9; count = count + 1){
    console.log("customer ", count);
    let aalooSbji = cook("aaloo")
    console.log(aalooSbji)
}

//exercise 
//Write code that logs 1....100

// *
// **
// ***
// ****

//NESTED FOR LOOPS
for(let line = 0; line < 4; line = line+1){
    let star = ""
    for(let str = 0; str <= line; str = str+1){
        star = star + '*'
    }
    console.log(star)    
}

// Exercise 1
// $
// $$
// $$$
// $$$$
// $$$$$
for(let line = 0; line < 5; line = line+1){
    let dollar = "";
    for(let count = 0; count <= line; count = count+1){
        dollar = dollar + "$";
    } 
    console.log(dollar);
}


//Exercise 2
//0 -> *
//1 -> ##
//2 -> ***
//3 -> ####
//4 -> *****
for(let line = 0; line < 5; line = line+1){
    let str = "";
    for(let count = 0; count <= line; count = count+1){
        if(line%2 === 0){
            str = str + "*";
        }else{
            str = str + "#";
        }

    } 
    console.log(str);
}


//Exercise 3
//      *
//     **
//    ***
//   ****
//  *****
// ******
let n = 6;
for(let line = 0; line < n; line = line +1){
    let str = "";
    for(let space = 0; space < n-line; space = space+1){
        str = str + " ";
    }
    for(let star = 0; star <= line; star = star + 1){
        str = str + '*';
    }
    console.log(str);
}