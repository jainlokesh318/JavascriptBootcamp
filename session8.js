let school = {
    name: "Marian School",
    class: 10,
}
// console.log(school)
// school["address"] = "Uttarakhand"
// console.log("After", school)
// school["class"] = 12
// console.log("Super After", school)

//Exercise 1
//Create a object with 2 keys in it and later add two more keys as well as update the two existing keys

//for in loop
// for(let key in school){
//     console.log(key);
//     console.log(school[key]);
// }

//Exercise 2
//Print all keys and values of the above created object in the exercise

//Exercise 3
//Write a function to check if a given property exists in the given object
//return the result

//Version 1
let ifKeyExists = (obj, keyToCheck) => {    
    let res = false;
    for(let key in obj){
        if(keyToCheck === key){
            res = true;       
        }  
    }
    return res;
}

//Version 2
let ifKeyExists2 = (obj, keyToCheck) => {
    for(let key in obj){
        if(keyToCheck === key){
            return true;       
        }  
    }
    return false;
}

let test = ifKeyExists(school, "xyz")
console.log(test);

//Exercise 4
//Write a function that creates a copy of the given object
let copyObject = (obj) => {
    let newObj = {}
    for(key in obj){
        newObj[key] = obj[key]
    }
    return newObj;
}

// let school = {
//     name: "Marian School",
//     class: 10,
// }

let res = copyObject(school);

let res1 = school

school["testing"] = "ekrhhbfh"

console.log(school); //3 properties
console.log(res); //2 properties
console.log(res1) //3 properties