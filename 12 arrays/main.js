let fruits = ['apple', 'orange', 'raspberry'];
console.log(fruits);
console.log(fruits[2]);


//  add an element to the end
fruits.push('banana');
console.log('After adding an element to the end: ');
console.log(fruits);

// add an element to the start
fruits.unshift('strawberry');
console.log('After adding an element to the start: ');
console.log(fruits);

//  remove last element
fruits.pop();
console.log('After removing the last element :')
console.log(fruits)


//  remove first element
fruits.shift();
console.log('After removing the first element :');
console.log(fruits);


//  looping
console.log('Iterating over the elements of fruit array using for loop... ')
for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// using for/of loop
console.log('Iterating using for/of loop');
for (let fruit of fruits) {
    console.log(fruit);
}

// sorting an array

fruits = fruits.sort();
console.log('After sorting : ')
console.log(fruits);

// reversing the order
fruits = fruits.reverse();
console.log('Reverse order');
console.log(fruits);


//  Matrices

fruits = ['apple', 'orange', 'raspberry'];
let veggies = ['tomato', 'cucumber', 'carrot'];
let meats = ['chicken', 'buff', 'mutton'];

let groceryList = [fruits, veggies, meats];

for (let list of groceryList) {
    for (let food of list) {
        console.log(food);
    }
}

//  Spread operator  : ...
/**
 * allows an iterable such as an array or string to be expanded
 * in places where zero or more arguments are expected.
 * (unpacks the elements)
 */

let numbers = [1,2,3,4,5,6,7,8,9];
console.log(...numbers)


let userName = "Rosetta Stoned"
console.log(...userName)

//  how can this be useful?

let maximum = Math.max(numbers);
console.log(maximum);   //  returns NaN


//  after using spread operator
maximum = Math.max(...numbers);
console.log(maximum);   //  returns maximum value i.e., 9


let class1 = ["Reshma", "Sunny", "Nija"];
let class2 = ["Mandakini", "Nabiel", "Beatrix"];

// class1.push(class2);     // doesn't work properly
class1.push(...class2);
console.log(class1);
console.log(...class1)



//  array.forEach() = executes a provided callback function once for each array element

let students = ['spongebob', 'patrick', 'squidward'];

function capitalize (element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
    console.log(element);
}

console.log(students[0]);

students.forEach(capitalize);   // capitalize is the call back function here
console.log(...students);

students.forEach(print);    //  prints each element in the array



//  array.map() -> executes a provided callback function once for each array element
//              AND creates a new array

let numbers2 = [1,2,3,4,5];
function square(element) {
    return Math.pow(element, 2);
}


let squares = numbers2.map(square);
console.log(...squares);


//  array.filter() = creates a new array with all elements that pass the test provided by
//                  a function 


let ages = [18, 27, 25, 16, 15, 29, 22];

function checkAge(element) {
    return element>=18
}

let adults = ages.filter(checkAge);
console.log(...adults);


//  array.reduce() -> reduces the array to a single value

let prices = [4, 10, 14, 20, 25];
let totalSum = prices.reduce(checkOut);
console.log(totalSum);
function checkOut(total, element) {
    return total + element;
}

// but why was total not initialized to 0?