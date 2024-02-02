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

