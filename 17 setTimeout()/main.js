/**
 *      setTimeout() -> invokes a function after a number of milliseconds
 *                    - asynchronous function (doesn't pause the execution of pgm)
 */
// setTimeout(firstMsg, 2000)
// setTimeout(secondMsg, 4000)
// setTimeout(thirdMsg, 6000)

// clearTimeout(timer1);
// clearTimeout(timer2);
// clearTimeout(timer3);

function firstMsg() {
    console.log('first msg')
    alert('Buy this app for 1cr');
}
function secondMsg() {
    alert('This is not a scam!');
}
function thirdMsg() {
    alert("Friggin' do it already!");
}


//  so this is what those scammers use.


//  setInterval();

let count = 0;
let max = window.prompt(`Count upto what #?`);

max = Number(max);

const myInterval = setInterval(upCounter, 1000);
let counter = document.getElementById('counter')
function upCounter() {
    count++;
    counter.textContent = count;
    if (count >= max+1) {
        clearInterval(myInterval);
        counter.textContent = "Time's up!"
    }
}