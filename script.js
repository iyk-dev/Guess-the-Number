const minNum = 1;
const maxNum = 100;

let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum); 

let attempts = 0;
const maxAttempts = 6;
let running = true;

// Get elements from the HTML
const input = document.getElementById("input");
const button = document.getElementById("button");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attemptsDisplay");
const resetBtn = document.getElementById("reset-btn");

// Listen for the "Check" button click
button.addEventListener("click", function() {
    if (!running) return;

    let guess = Number(input.value);

    // Input Validation
    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        message.textContent = "⚠️ Please enter a valid number between 1 and 100.";
        message.style.color = "#ffcc00";
        return;
    }

    // Increase attempts
    attempts++;
    let attemptsLeft = maxAttempts - attempts;
    attemptsDisplay.textContent = attemptsLeft; // Update HTML

    // Check the guess
    if (guess === answer) {
        message.innerHTML = `🎉 WINNER! The number was ${answer}! You get $1M!`;
        message.style.color = "#00ffcc";
        endGame();
    } 
    else if (attemptsLeft === 0) {
        message.innerHTML = `💀 GAME OVER! The correct number was ${answer}.`;
        message.style.color = "#ff0055";
        endGame();
    } 
    else if (guess < answer) {
        message.textContent = "📈 Go higher!";
        message.style.color = "#ffffff";
    } 
    else if (guess > answer) {
        message.textContent = "📉 Go lower!";
        message.style.color = "#ffffff";
    }

    // Clear the input box for the next guess
    input.value = "";
    input.focus(); 
});

// Function to handle the end of the game
function endGame() {
    running = false;
    input.disabled = true; // Lock the input
    button.disabled = true; // Lock the button
    resetBtn.style.display = "inline-block"; // Show the Play Again button
}

// Reset button logic
resetBtn.addEventListener("click", function() {
    // Reset all variables
    attempts = 0;
    running = true;
    answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    
    // Reset the HTML
    attemptsDisplay.textContent = maxAttempts;
    message.textContent = "";
    input.value = "";
    input.disabled = false;
    button.disabled = false;
    resetBtn.style.display = "none"; // Hide reset button again
    input.focus();
});