//Object Creation
let person1 = {
    firstName: "Arun",
    lastName: "Verma",
    age: 21,
    state: "UP",
    college: "VGU",
    department: ["CSE", "Mech"],
    marks: {
        sem1: 75, 
        sem2: 67
    }
}

let person1Marks = person1.marks
//Same thing
console.log(person1Marks.sem1)
console.log(person1.marks.sem1)


// console.log(person1.deparment[1])

//Property Access
// console.log(person1.state)
// console.log(person1.age)
// console.log(person1.firstName)


let printProperty = (obj, property) => {
    console.log(obj["age"])
    console.log(obj[property])
}

printProperty(person1, "department")
printProperty(person1, "age")
printProperty(person1, "firstName")

//Create an object for a college which have collegeName, departments ["CSE", "Mech"], state, facultyCOunt

//Create an object which have 6 key value pairs for a book, one key-value must have object with 2 keys in it
//Write a function to access the objects properties  