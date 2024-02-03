let cards = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function shuffle(array, callBack) {
    let currentIdx = array.length;
    let randomIdx;
    while (currentIdx != 0) {
        randomIdx = Math.floor(Math.random()*array.length)
        currentIdx-=1;
    }

    let temp = array[currentIdx];
    array[currentIdx] = array[randomIdx];
    array[randomIdx] =  temp;

    callBack(array);
}

function printCards(cards) {
    console.log(...cards);
}

shuffle(cards, printCards)