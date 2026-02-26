# Lottery Number Guessing Game

**[🔴 View Live Demo Here](https://guess-the-number-d6r6.onrender.com)**

A logic-based browser mini-game built to demonstrate JavaScript state management and dynamic UI rendering without page reloads. The user has 6 attempts to guess a randomly generated number between 1 and 100 to "win $1M."

## Features
* **Game Logic & State Tracking:** Custom game loop that tracks remaining attempts, evaluates win/loss conditions, and instantly locks the UI when the game concludes.
* **Input Validation:** Strict conditional checks prevent `NaN` (Not a Number) entries and out-of-bounds guesses, ensuring the code doesn't break.
* **Dynamic DOM Updates:** Provides real-time "Higher" or "Lower" feedback, alters text colors based on game state, and dynamically reveals a "Play Again" reset loop.
* **Glassmorphism UI:** Styled using CSS `backdrop-filter: blur()`, semi-transparent backgrounds, and vibrant neon accents to create a modern arcade aesthetic.

## Tech Stack
* **HTML5**
* **CSS3** (Glassmorphism, Gradients)
* **Vanilla JavaScript** (State Management, Event Listeners)

## Key Learnings
This project was a deep dive into **State Management** in Vanilla JS. I learned how to effectively manage global variables (like `attempts` and `running`), control the flow of the game, and dynamically disable HTML inputs via JavaScript to prevent users from interacting with the app once a game-over state is reached.