/**
 *  console.time()  ->  starts a timer you can use to track how long an operation
 *              `       takes. Give each timer a unique name.
 */

//  start
console.time("Response time");

setTimeout(() => console.log("hello"), 3000);

//  end
console.timeEnd("Response time");


//  to track how long the operation takes.

