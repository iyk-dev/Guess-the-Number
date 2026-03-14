const minNum = 1;
const maxNum = 100;

let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum); 

let attempts = 0;
const maxAttempts = 6;
let running = true;


const input = document.getElementById("input");
const button = document.getElementById("button");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attemptsDisplay");
const resetBtn = document.getElementById("reset-btn");


button.addEventListener("click", function() {
    if (!running) return;

    let guess = Number(input.value);

    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        message.textContent = "⚠️ Please enter a valid number between 1 and 100.";
        message.style.color = "#ffcc00";
        return;
    }

    attempts++;
    let attemptsLeft = maxAttempts - attempts;
    attemptsDisplay.textContent = attemptsLeft;

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

    input.value = "";
    input.focus(); 
});

function endGame() {
    running = false;
    input.disabled = true; 
    button.disabled = true; 
    resetBtn.style.display = "inline-block";
}


resetBtn.addEventListener("click", function() {
    attempts = 0;
    running = true;
    answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    
    attemptsDisplay.textContent = maxAttempts;
    message.textContent = "";
    input.value = "";
    input.disabled = false;
    button.disabled = false;
    resetBtn.style.display = "none";
    input.focus();
});