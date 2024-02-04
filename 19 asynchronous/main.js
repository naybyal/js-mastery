/**
 *  synchronous code
 *          in an ordered sequence
 *          step-by-step linear instructions
 *          (start now, finish now)
 * 
 * 
 *  asynchronous code
 *          out of sequence
 *          eg. access a database
 *              fetch a file
 *              tasks that take time    (start now, finish sometime later)
 * 
 */

console.log("Start");
setTimeout(() => console.log('This step is synchronous.'), 5000);
console.log('Stop')