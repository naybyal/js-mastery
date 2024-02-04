
let label = document.getElementById('myLabel');
function updateDateAndTime() {
    let date = new Date();
    date = date.toLocaleString();
    label.textContent = date;
    setTimeout(updateDateAndTime, 1000);

    // let year = date.getFullYear();
    // let dayOfMonth = date.getDate();
    // let dayOfWeek  = date.getDay();
    // let month = date.getMonth();
    // let hour = date.getHours();
    // let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    // let ms = date.getMilliseconds();

    // date.setFullYear(2025);
    // date.setMonth(11);
    // date.setDate(31);
    // date.setMinutes(1);
    // date.setSeconds(30);
    // date.setMilliseconds(0);

}

updateDateAndTime();


