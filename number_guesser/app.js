/*
    GAME FUNCTION:
    - Player must guess a number between a min and max
    - Player gets a certain amount of guesses
    - Notify player of guesses remaining
    - Notify player of the correct answer if lose
    - Let player choose to play again
*/

// Game variables
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const   UIgame = document.querySelector('#game'),
        UIminNum = document.querySelector('.min-num'),
        UImaxNum = document.querySelector('.max-num'),
        UIguessBtn = document.querySelector('#guess-btn'),
        UIguessInput = document.querySelector('#guess-input'),
        UImessage = document.querySelector('.message');

// Assign UI min & max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Create Event Listener

// Listen for play again
UIgame.addEventListener('mousedown', (e) => {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

// Listen for guess
UIguessBtn.addEventListener('click', () => {
    let guess = parseInt(UIguessInput.value);
    // console.log(guess);

    // Validate
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum) {
        // Game over - Won
        // Disable input
        // UIguessInput.disabled = true;
        // Change border color
        // UIguessInput.style.borderColor = 'green';
        // Let the user know that they won
        // setMessage(`${winningNum} is correct! YOU WIN!`, 'green');
        gameOver(true, `${winningNum} is correct! YOU WIN!`);
    }
    else {
        // Wrong number
        guessesLeft -= 1;

        // Check if there are any guesses left
        if(guessesLeft === 0) {
            // Game over - Lost
            // Disable input
            // UIguessInput.disabled = true;
            // Change border color
            // UIguessInput.style.borderColor = 'red';
            // Let the user know they lost
            // setMessage(`Game over. You Lost. The correct number was ${winningNum}`, 'red');
            gameOver(false, `Game over. You Lost. The correct number was ${winningNum}`);
        }
        else {
            // Game continues - Wrong answer
            // Change border color
            // UIguessInput.style.borderColor = 'red';
            // Clear the input
            // UIguessInput.value = '';
            // setMessage(`${guess} is not correct. ${guessesLeft} guesses left.`, 'red');
            gameOver(false, `${guess} is not correct. ${guessesLeft} guesses left.`);
            // Clear the input
            UIguessInput.value = '';
        }
    }

});

// Create setMessage function
function setMessage(msg, color) {
    UImessage.style.color = color;
    UImessage.textContent = msg;
}

// Create gameOver function
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable input
    UIguessInput.disabled = (won === false && guessesLeft !== 0) ? false : true;
    // Change border color
    UIguessInput.style.borderColor = color;
    // Set message
    setMessage(msg, color);

    // Play again?
    UIguessBtn.value = 'Play Again';
    UIguessBtn.className += 'play-again';
}

// Create getRandomNum function
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}