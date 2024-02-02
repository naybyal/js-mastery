function toCelsius(temperature) {
    return (temperature - 32)*(5/9);
}

function toFahrenheit(temperature) {
    return ((9/5)*temperature + 32)
}

let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let convertButton = document.getElementById('convertBtn');
let result = document.getElementById('result');
convertButton.onclick = () => {
    let magnitude = parseFloat(document.getElementById('textBox').value);
    if (!celsius.checked && !fahrenheit.checked) {
        result.textContent = `Are you retarded?! Enter a value and choose an option.`
    }
    else if (isNaN(magnitude)) {
        result.textContent = 'Average Pleb. Enter some value, damn it!';
    }
    else if (celsius.checked) {
        magnitude = Math.floor(toCelsius(magnitude)).toLocaleString(undefined, { style: 'unit', unit: 'celsius' })
        result.textContent = `It's ${ magnitude }`
    } else {
        magnitude = Math.floor(toFahrenheit(magnitude)).toLocaleString(undefined, { style: 'unit', unit: 'fahrenheit' })
        result.textContent = `It's ${ magnitude }`
    }
}