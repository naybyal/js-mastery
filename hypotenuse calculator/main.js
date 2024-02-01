let a,b;
var hypotenuse;
a = window.prompt('Enter side A (in m)');
a = Number(a);

b = window.prompt('Enter side B (in m)');
b = Number(b);

hypotenuse = Number(hypotenuse);
hypotenuse = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)).toPrecision(5);

document.getElementById('hypotenuse').innerHTML = 'The hypotenuse is ' + hypotenuse + ' m';