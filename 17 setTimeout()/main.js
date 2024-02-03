/**
 *      setTimeout() -> invokes a function after a number of milliseconds
 *                    - asynchronous function (doesn't pause the execution of pgm)
 */
setTimeout(firstMsg, 2000)
setTimeout(secondMsg, 4000)
setTimeout(thirdMsg, 6000)
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