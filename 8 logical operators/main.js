let temp = 15;
let sunny = true;
if (temp > 0 && temp < 30) {
    console.log('Weather is good!');
} else console.log('Weather is bad.');

if (temp <= 0 || temp >= 30 && sunny)    console.log('Weather is bad.');
else console.log('Weather is good.');

console.log(`Is it sunny? : ${ sunny }`);
console.log(`Whats is the temperature? : ${ temp }degC`);