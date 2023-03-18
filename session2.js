// console.log("UTHOOOO");
// console.log("Remote k paas jao");
// console.log("PRess green button");

// console.log("UTHOOOO");
// console.log("Remote k paas jao");
// console.log("PRess green button");

// console.log("UTHOOOO");
// console.log("Remote k paas jao");
// console.log("PRess green button");

// console.log("UTHOOOO");
// console.log("Remote k paas jao");
// console.log("PRess green button");
//--------------------------------------------

//ALternatively we can use functions 
//function declaration
function turnOnTV() {
    console.log("UTHOOOO");
    console.log("Remote k paas jao");
    console.log("PRess green button");
}

//Reference to the function
turnOnTV

//function calling / invokation
turnOnTV()
turnOnTV()

//Exercise Functions
//consider you have 30 marks till now
//after that for 5 next questions whoose status we will know by a variable, 
//update the totalMarks using a function
//at the end print the totalMarks

let totalMarks = 30;

function updateMarks(){
    if(isCorrect){
        totalMarks = totalMarks + 5;
    }else{
        totalMarks = totalMarks - 1;
    }
    console.log("Updated Marks", totalMarks)
}

let isCorrect = true;
updateMarks();

isCorrect = false;
updateMarks();

isCorrect = true;
updateMarks()

isCorrect = false;
updateMarks();

