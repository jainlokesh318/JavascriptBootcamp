

function allooKiSubji(){
    console.log("wash alloo");
    console.log("put on flame");
    console.log("cook alloo");
}


function bhindiKiSubji(){
    console.log("wash bhindi");
    console.log("put on flame");
    console.log("cook bhindi");
}

function karelaKiSubji(){
    console.log("wash karela");
    console.log("put on flame");
    console.log("cook karela");
}


//arguments
function cook(subji){
    console.log("wash", subji);
    console.log("put on flame");
    console.log("cook on flame", subji);
}

cook("alloo")
cook("bhindi")
cook("karela")

//Exersice 1 
//Make a function to create different kind of garlands
//in which the flower is to be taken by arguments 

function createMala(flower, color) {
    console.log("Take " + flower +" color " + color);
}
  
createMala("mogra", "yellow");
createMala("rose", "red");
createMala("jasmine", "white");

//Exercise 2
//write a function that takes two numbers as argument and do their sum


function createGarland(num){
    console.log("Making", num, "mala")
    console.log("Taking", num, "packets")
    console.log("Making a big packet")
    console.log("Label", num, "garlands")
}

createGarland(3)
createGarland(4)

// function groceryYellow2Shop(){
//     console.log("Find", "yellow", "dal")
//     console.log("check if", "2", "kg availabel")
//     console.log("if availabel then weigh n pack")
//     console.log("else deny")
// }
// function groceryYellow1Shop(){
//     console.log("Find", "yellow", "dal")
//     console.log("check if", "1", "kg availabel")
//     console.log("if availabel then weigh n pack")
//     console.log("else deny")
// }
// function groceryYellow5Shop(){
//     console.log("Find", "yellow", "dal")
//     console.log("check if", "5", "kg availabel")
//     console.log("if availabel then weigh n pack")
//     console.log("else deny")
// }

// function groceryGreenShop(){
//     console.log("Find", "Green", "dal")
//     console.log("check if", "1", "kg availabel")
//     console.log("if availabel then weigh n pack")
//     console.log("else deny")
// }

// function groceryGreen5Shop(){
//     console.log("Find", "Green", "dal")
//     console.log("check if", "5", "kg availabel")
//     console.log("if availabel then weigh n pack")
//     console.log("else deny")
// }

function groceryShop(color, kg){
    console.log("Find", color, "dal")
    console.log("check if", kg, "kg availabel")
    console.log("if availabel then weigh n pack")
    console.log("else deny")
}

groceryShop("yellow", 5)
groceryShop("green", 50)
groceryShop("pink", 2)

//Exercise 3
//Create a function that takes argument of your mobile brand, model, price
//and console log them in the function as
//"I currently have --- brand's --- mobile which costed me --- Rs"

//Exercise 4 
//Create a function that takes your name as argument and prints a greeting message later

//Exercise 5
//Create a function that takes your firstName and lastName as arguments and prints a greeting message later with your full name

//Exercise 6
//Create a function squareArea that takes side of square as arguments and later displays its area

//Function declaration
function sqaureArea(side){
    let area = side*side;
    console.log("Area of square is :- ", area);
}

//function invocation
sqaureArea(4);

//Exercise 7
//Create a function squarePerimeter that takes side of square as arguments and later displays its perimeter

//Exercise 8
//Create a function rectangleArea that takes length, breadth of rectangle as arguments and later displays its area

//Exercise 9
//Create a function rectanglePerimeter that takes length, breadth of rectangle as arguments and later displays its perimeter

//Exercise 10
//Create a function circleArea that takes radius of circle as arguments and later displays its area

//Exercise 11
//Create a function circlePerimeter that takes radius of circle as arguments and later displays its perimeter


