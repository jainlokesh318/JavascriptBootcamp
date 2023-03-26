let school = {
    name: "Marian School",
    class: 10,
}
console.log(school)
school["address"] = "Uttarakhand"
console.log("After", school)
school["class"] = 12
console.log("Super After", school)

//Exercise 1
//Create a object with 2 keys in it and later add two more keys as well as update the two existing keys

//for in loop
for(let key in school){
    console.log(key);
    console.log(school[key]);
}

//Exercise 2
//Print all keys and values of the above created object in the exercise


