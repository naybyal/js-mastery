var rootButton = document.getElementById('myButton');
var rootCheckbox = document.getElementById('myCheckbox');
var rootDescription = document.getElementById('myMessage');
var rootPayInfo = document.getElementById('paymentInfo')


rootButton.onclick = () => {
    const visaBtn = document.getElementById('visaBtn');
    const upiBtn = document.getElementById('upiBtn');
    const paypalBtn = document.getElementById('paypalBtn');
    
    if (rootCheckbox.checked && (visaBtn.checked || upiBtn.checked || paypalBtn.checked)) {
        if (visaBtn.checked) {
            rootPayInfo.textContent = 'Payment Method : Visa';
        } else if (upiBtn.checked) {
            rootPayInfo.textContent = 'Payment Method : UPI';
        } else if (paypalBtn.checked) {
            rootPayInfo.textContent = 'Payment Method : PayPal';
        }
        rootDescription.textContent = 'Congratulations! You are subscribed to our channel.';
    }
    else if (rootCheckbox.checked) {
        rootDescription.textContent = 'Kindly choose a payment gateway. ;)';
        rootPayInfo.textContent = '';
    } 
    else {
        rootDescription.textContent = 'Please subscribe to our channel. :(';
        rootPayInfo.textContent = '';
    }

    
}