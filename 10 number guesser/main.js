const answer = Math.floor(Math.random()*10 + 1);
console.log(`${ answer } is the answer. ;)`);
let numGuessRoot = document.getElementById('numGuess');
let declareResult = document.getElementById('result');
let numGuesses = 0;
let submitRoot = document.getElementById('submitBtn').onclick = () => {
    
    ++numGuesses;
    
    guessVal = parseInt(document.getElementById('numVal').value);
    // console.log(guessVal);
    if (guessVal == answer) {
        declareResult.innerHTML = "You've guessed it right!";
    } else {    
        declareResult.innerHTML = 'Try Again!';
    }
    numGuessRoot.textContent = 'Number of Guesses : ' + numGuesses;
}