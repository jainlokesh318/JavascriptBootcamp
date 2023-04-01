let callbackExample = () => {
    console.log("Helllo")
}

let callbackExample1 = () => {
    console.log("Helllo 1")
}

let callbackExample2 = () => {
    console.log("Helllo 2")
}
//------------------------------------
let consumer = (cb) => {
    cb();
}

consumer(callbackExample);
consumer(callbackExample1);
consumer(callbackExample2);