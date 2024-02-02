let myNum = 123456.789;
let temp;
temp = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" });  //  US English
console.log(temp);

temp = myNum.toLocaleString('hi-IN', { style: "currency", currency: "INR" })   // India Hindi
console.log(temp);

temp = myNum.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })    // Standard German
console.log(temp);

myNum = 1;
temp = myNum.toLocaleString(undefined, { style: "percent" });
console.log(temp);

let cel = 38;
temp = cel.toLocaleString(undefined, { style: 'unit', unit: 'celsius' });
console.log(temp);