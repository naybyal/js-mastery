/**
 *          ERROR HANDLING 
 * 
 *      Can't open a file
 *      Lose connection
 *      User types incorrect input
 *      TypeError
 * 
 *      throw = execute user defined error.
 */

try {
    let x = window.prompt('Enter a #');
    x = Number(x);

    if (isNaN(x)) throw "That wasn't a number!";
    if (x == "") throw "That was empty";
    console.log(`${ x } is a number`)
} catch(error) {
    console.log(error);
} finally {
    //  for clean ups
    console.log('This always executes');
}