var counter = document.getElementById('counter');
var currentValue = Number(0);


document.getElementById('increment').onclick = () => {
    counter.innerHTML = ++currentValue;
}

document.getElementById('decrement').onclick = () => {
    counter.innerHTML = --currentValue;
}

document.getElementById('reset').onclick = () => {
    currentValue = 0;
    counter.innerHTML = currentValue;
}