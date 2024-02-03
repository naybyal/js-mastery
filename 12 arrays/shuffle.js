let cards = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let shuffle = (array) => {
    let currentIdx = array.length;

    while (currentIdx != 0) {
        let randomIdx = Math.floor(Math.random()*array.length)
        --currentIdx;
    }

    let temp = array[currentIdx];
    array[currentIdx] = array[randomIdx];
    array[randomIdx] =  temp;

    return array;
}

function printArray(array) {
    console.log(...array);
}