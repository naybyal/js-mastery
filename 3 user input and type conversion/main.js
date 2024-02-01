// let userName = window.prompt("What's your name?!");
let userName, age;
document.getElementById('myButton').onclick = function() {
    userName = document.getElementById("myText").value; 
    console.log(userName);
    document.getElementById('myLabel').innerHTML='Hello, ' + userName + '!';
}

document.getElementById('myButtonAge').onclick = function() {
    age = parseInt(document.getElementById("myAge").value); 
    // age = age + 1;
    console.log(userName);
    document.getElementById('myLabelAge').innerHTML='You are ' + age + ' years old!';
}
let radius, circumference, area;
const pi = 3.14;    // now no one can make any changes to this.
document.getElementById('computeArea').onclick = function() {
    radius = parseInt(document.getElementById("readRadius").value); 
    area = Math.round((pi*Math.pow(radius,2)));
    circumference = Math.round((2*pi*radius));
    document.getElementById('area').innerHTML='Area : '+ area +" sq m";
    document.getElementById('circumference').innerHTML='Circumference: '+ circumference +' m';
}
