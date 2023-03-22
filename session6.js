let getAllOddElements = (arr) => {
    let oddNums = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 !== 0){
            oddNums.push(arr[i]);
        }
    }
    return oddNums;
}

let arr = [1, 2, 3, 5, 6];
let res = getAllOddElements(arr);
console.log(res);
//let oddElements = 
//console.log(oddElements)


//Filtration

//Exercise 1 
//Write a function that returns all even numbers from the given array

//Exercise 2
//Write a function that returns all numbers divisible by 5 from the given array

//Exercise 3
//Write a function that returns all numbers at odd indexes from the given array

//Exercise 3
//Write a function that returns all numbers between the range 10 to 40 from the given array