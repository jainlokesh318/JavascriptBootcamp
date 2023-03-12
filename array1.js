
//Syntax introduction
let list = ["candles", "tomatoes"];
console.log(list);


//accessing items of an array
console.log(list[0]);
console.log(list[1]);

//length of an array
console.log(list.length)

// Exercise 1
//1. Build a list of flowers with atleast 5 flowers in the list
//2. Print the whole list
//3. Print the list items seperately
//4. Print the length of the list
let flowerlist = [
    "Lily",
    "Rose",
    "Daffodil",
    "Iris",
    "Daisy",
    "Tulip",
    "Marigold",
    "Lotus",
    "Hibiscus"
  ];
console.log(flowerlist);
console.log(flowerlist.length);

for(let i = 0; i < flowerlist.length; i = i+1){
    console.log(flowerlist[i]);
}

//add a new item to the array
flowerlist.push("Snapdragon")
console.log(flowerlist);

//remove last item from array
flowerlist.pop();
console.log(flowerlist);
flowerlist.pop();
console.log(flowerlist);

flowerlist.pop();
flowerlist.pop();
console.log(flowerlist);


