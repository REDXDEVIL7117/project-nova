const reactionArea = document.getElementById("reactionArea");
const reactionText = document.getElementById("reactionText");

const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

const message = document.getElementById("message");

const attemptsDisplay = document.getElementById("attempts");
const bestTimeDisplay = document.getElementById("bestTime");

let attempts = Number(localStorage.getItem("novaReactionAttempts")) || 0;
let bestTime = Number(localStorage.getItem("novaReactionBest")) || 0;

let gameState = "idle";
let signalTimer = null;
let startTime = 0;

updateStats();

function updateStats() {
    attemptsDisplay.textContent = attempts;

    if (bestTime > 0) {
        bestTimeDisplay.textContent = `${bestTime} ms`;
    } else {
        bestTimeDisplay.textContent = "-- ms";
    }
}

function startChallenge() {
    clearTimeout(signalTimer);

    gameState = "waiting";

    reactionArea.className = "reaction-area";
    reactionText.textContent = "WAIT...";
    message.textContent = "Don't click yet... 👀";

    startButton.disabled = true;

    // Random delay keeps the timing unpredictable.
    const delay = Math.floor(Math.random() * 3000) + 2000;

    signalTimer = setTimeout(showSignal, delay);
}

function showSignal() {
    gameState = "ready";

    reactionArea.className = "reaction-area ready";
    reactionText.textContent = "CLICK!";
    message.textContent = "GO GO GO! ⚡";

    startTime = performance.now();
}

function handleReaction() {
    if (gameState === "idle") {
        message.textContent = "Press START first. 😭";
        return;
    }

    if (gameState === "waiting") {
        clearTimeout(signalTimer);

        gameState = "idle";

        reactionArea.className = "reaction-area too-early";
        reactionText.textContent = "TOO EARLY!";
        message.textContent = "You clicked before the signal. 💀";

        startButton.disabled = false;

        return;
    }

    if (gameState === "ready") {
        const reactionTime = Math.round(performance.now() - startTime);

        attempts++;

        if (bestTime === 0 || reactionTime < bestTime) {
            bestTime = reactionTime;
            localStorage.setItem("novaReactionBest", bestTime);
            message.textContent = `${reactionTime} ms! NEW BEST! 🏆`;
        } else {
            message.textContent = `${reactionTime} ms! ⚡`;
        }

        localStorage.setItem("novaReactionAttempts", attempts);

        reactionArea.className = "reaction-area result";
        reactionText.textContent = `${reactionTime} ms`;

        gameState = "idle";
        startButton.disabled = false;

        updateStats();
    }
}

function resetGame() {
    clearTimeout(signalTimer);

    attempts = 0;
    bestTime = 0;
    gameState = "idle";

    localStorage.removeItem("novaReactionAttempts");
    localStorage.removeItem("novaReactionBest");

    reactionArea.className = "reaction-area";
    reactionText.textContent = "PRESS START";

    message.textContent = "Test your reflexes.";

    startButton.disabled = false;

    updateStats();
}

startButton.addEventListener("click", startChallenge);
reactionArea.addEventListener("click", handleReaction);
resetButton.addEventListener("click", resetGame);