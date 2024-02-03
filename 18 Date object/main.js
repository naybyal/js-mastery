
let label = document.getElementById('myLabel');
function updateDateAndTime() {
    let date = new Date();
    date = date.toLocaleString();
    label.textContent = date;
    setTimeout(updateDateAndTime, 1000);
}

updateDateAndTime();


