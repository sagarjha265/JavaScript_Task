function guessNumberGame() {
    // Generate a random number between 1 and 10
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    // Prompt the user to input a guess
    let userGuess = prompt('Guess a number between 1 and 10:');

    // Convert userGuess to a number (since prompt returns a string)
    userGuess = parseInt(userGuess);

    // Check if the user's guess matches the random number
    if (userGuess === randomNumber) {
        alert('Good Work!');
    } else {
        alert(`Not matched. The correct number was ${randomNumber}.`);
    }
}

// Call the function to start the game
guessNumberGame();
