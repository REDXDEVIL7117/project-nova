const randomizeButton = document.getElementById("randomizeButton");
const resetButton = document.getElementById("resetButton");

const result = document.getElementById("result");
const resultMessage = document.getElementById("resultMessage");
const rollCountDisplay = document.getElementById("rollCount");

// Possible Nova Randomizer results
const results = [
    {
        value: "YES",
        message: "Nova has spoken. 💙"
    },
    {
        value: "NO",
        message: "Absolutely not. Nova vetoed it. 💀"
    },
    {
        value: "MAYBE",
        message: "Even Nova doesn't know. 😭"
    },
    {
        value: "GO",
        message: "The system says GO. 🚀"
    },
    {
        value: "WAIT",
        message: "Patience, human. ⏳"
    },
    {
        value: "DO IT",
        message: "You already know what Nova thinks. 👀"
    },
    {
        value: "NAH",
        message: "Absolutely not. Nova vetoed it. 💀"
    },
    {
        value: "💅",
        message: "Diva decision detected."
    },
    {
        value: "⭐",
        message: "Today has main-character energy."
    },
    {
        value: "🍬",
        message: "Cotton-candy levels of randomness detected."
    },
    {
        value: "👑",
        message: "Royal decision. Proceed accordingly."
    },
    {
        value: "CHAOS",
        message: "You have activated the forbidden option. 💀"
    }
];

let rollCount =
    Number(localStorage.getItem("novaRandomizerRolls")) || 0;

updateStats();

function getRandomResult() {
    const randomIndex = Math.floor(Math.random() * results.length);

    return results[randomIndex];
}

function randomize() {
    const selected = getRandomResult();

    rollCount++;

    localStorage.setItem("novaRandomizerRolls", rollCount);

    result.textContent = selected.value;
    resultMessage.textContent = selected.message;

    // Trigger the result animation again.
    result.classList.remove("pop");
    void result.offsetWidth;
    result.classList.add("pop");

    updateStats();
}

function updateStats() {
    rollCountDisplay.textContent = rollCount;
}

function resetCounter() {
    rollCount = 0;

    localStorage.setItem("novaRandomizerRolls", 0);

    result.textContent = "?";
    resultMessage.textContent = "Nova is waiting...";

    updateStats();
}

randomizeButton.addEventListener("click", randomize);

resetButton.addEventListener("click", resetCounter);