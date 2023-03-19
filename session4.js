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
sqaureArea(4);
sqaureArea(5);

//Exercise 1
//Create a function squarePerimeter that takes side of square as arguments and return its perimeter
//display later

//Exercise 2
//Write a function take calculates sum of three numbers and return their sum
