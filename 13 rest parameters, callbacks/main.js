/**
 * rest parameters(...) -> represents an indefinite number of parameters
 *              (packs arguments into an array)
 */

let a=1, b=2, c=3, d=4, e=5;

let sum = (...numbers) => {
    let total = 0;
    // for (let number in numbers) total += number;     //  returns 00123... as if it's concatenating to an empty string
    //  for/in is used in Kotlin.. in JS, we should use for/of
    for (let number of numbers) total += number;    //  returns the number
    return total;
}
console.log(sum(a,b,c,d,e))

// let sum = (a,b) => { return a+b; }
// sum = (a,b,c) => { return a+b+c; }               //      This is not practical
// sum = (a,b,c,d) => { return a+b+c+d; }





//  CALLBACKS

    //  A function passed as an argument to another function

    /**
     *  Ensures that a function is not going to run before a task is completed.
     *  Helps us develop asynchronous code. (When one function has to wait for another function)
     *  that helps us avoid errors and potential problems
     *  Eg. Wait for a file to load  
     */

let labelRoot = document.getElementById('myLabel');
sumNumbers(2,7, displayDOM);
displayConsole(output);
displayDOM(output);
function sumNumbers(a,b, callBack){ 
    let result = a+b; 
    callBack(result)
}
function displayConsole(output) { console.log(output); }
function displayDOM(output) { 
    labelRoot.innerHTML = output; 
}


