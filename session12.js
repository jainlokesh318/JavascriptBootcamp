//Exercise 1
// Write a function which fetches from the given URL, on success it prints "Hoorah!" along with the res
// on failure it prints "Alas!"

let data = fetch("https://SillyMagnificentEventsjh.lokesh-jainjain.repl.co");

data
  .then((res) => console.log("Hoorah!", res))
  .catch((error) => console.log("Alas", error));

//--------------------------------------------------------------------------------------
const myHeading = document.getElementById("heading")

const o1 = fetch("https://SillyMagnificentEvents.lokesh-jainjain.repl.co")

o1.then(res => res.json())
.then(json => myHeading.innerText=json.text)
.catch(err => myHeading.innerText="Error Occured")
