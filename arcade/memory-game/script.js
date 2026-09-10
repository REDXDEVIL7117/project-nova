// =================================
// NOVA ARCADE - MEMORY GAME
// =================================

const levelDisplay =
    document.getElementById("level");

const scoreDisplay =
    document.getElementById("score");

const bestScoreDisplay =
    document.getElementById("best-score");

const gameTitle =
    document.getElementById("game-title");

const gameMessage =
    document.getElementById("game-message");

const sequenceDisplay =
    document.getElementById("sequence");

const symbolButtons =
    document.querySelectorAll(".symbol-button");

const startButton =
    document.getElementById("start-button");

const resetButton =
    document.getElementById("reset-button");

const resultOverlay =
    document.getElementById("result-overlay");

const resultTitle =
    document.getElementById("result-title");

const resultMessage =
    document.getElementById("result-message");

const finalScore =
    document.getElementById("final-score");

const finalLevel =
    document.getElementById("final-level");

const playAgainButton =
    document.getElementById("play-again-button");


// =================================
// GAME SETTINGS
// =================================

const symbols = [
    "💅",
    "⭐",
    "❤️",
    "🍬",
    "👑",
    "✨",
    "🌙",
    "🔥"
];

const sequenceShowTime = 700;


// =================================
// GAME STATE
// =================================

let level = 1;

let score = 0;

let bestScore =
    Number(
        localStorage.getItem(
            "novaMemoryBest"
        )
    ) || 0;

let sequence = [];

let playerSequence = [];

let acceptingInput = false;

let gameRunning = false;


// =================================
// INITIAL DISPLAY
// =================================

bestScoreDisplay.textContent =
    bestScore;


// =================================
// RANDOM SYMBOL
// =================================

function getRandomSymbol() {

    const randomIndex =
        Math.floor(
            Math.random() *
            symbols.length
        );

    return symbols[randomIndex];

}


// =================================
// CREATE SEQUENCE
// =================================

function createSequence() {

    sequence = [];

    const sequenceLength =
        level + 2;


    for (
        let i = 0;
        i < sequenceLength;
        i++
    ) {

        sequence.push(
            getRandomSymbol()
        );

    }

}


// =================================
// SHOW SEQUENCE
// =================================

async function showSequence() {

    acceptingInput = false;

    sequenceDisplay.innerHTML = "";


    gameTitle.textContent =
        "Watch carefully... 👀";

    gameMessage.textContent =
        `Remember ${sequence.length} symbols.`;


    for (
        let i = 0;
        i < sequence.length;
        i++
    ) {

        sequenceDisplay.innerHTML = "";


        const symbolElement =
            document.createElement("span");

        symbolElement.className =
            "sequence-symbol";

        symbolElement.textContent =
            sequence[i];


        sequenceDisplay.appendChild(
            symbolElement
        );


        await wait(
            sequenceShowTime
        );

    }


    sequenceDisplay.innerHTML = "";


    gameTitle.textContent =
        "Your turn.";

    gameMessage.textContent =
        "Click the symbols in the same order.";


    playerSequence = [];

    acceptingInput = true;

}


// =================================
// WAIT FUNCTION
// =================================

function wait(milliseconds) {

    return new Promise(
        function (resolve) {

            setTimeout(
                resolve,
                milliseconds
            );

        }
    );

}


// =================================
// START GAME
// =================================

async function startGame() {

    if (gameRunning) {
        return;
    }


    gameRunning = true;

    level = 1;

    score = 0;

    updateStats();

    startButton.disabled = true;


    await startRound();

}


// =================================
// START ROUND
// =================================

async function startRound() {

    createSequence();

    await wait(500);

    await showSequence();

}


// =================================
// HANDLE SYMBOL CLICK
// =================================

function handleSymbolClick(button) {

    if (!acceptingInput) {
        return;
    }


    const clickedSymbol =
        button.dataset.symbol;

    const expectedSymbol =
        sequence[
            playerSequence.length
        ];


    if (
        clickedSymbol ===
        expectedSymbol
    ) {

        button.classList.add(
            "correct"
        );


        setTimeout(
            function () {

                button.classList.remove(
                    "correct"
                );

            },
            180
        );


        playerSequence.push(
            clickedSymbol
        );


        score += 10;


        updateStats();


        if (
            playerSequence.length ===
            sequence.length
        ) {

            acceptingInput = false;

            level++;

            score += level * 5;

            updateStats();


            gameTitle.textContent =
                "Correct! 🔥";

            gameMessage.textContent =
                `Level ${level} incoming...`;


            setTimeout(
                function () {

                    startRound();

                },
                900
            );

        }

    } else {

        button.classList.add(
            "wrong"
        );


        setTimeout(
            function () {

                button.classList.remove(
                    "wrong"
                );

            },
            400
        );


        endGame();

    }

}


// =================================
// END GAME
// =================================

function endGame() {

    acceptingInput = false;

    gameRunning = false;


    if (score > bestScore) {

        bestScore = score;

        localStorage.setItem(
            "novaMemoryBest",
            bestScore
        );

    }


    bestScoreDisplay.textContent =
        bestScore;


    finalScore.textContent =
        score;

    finalLevel.textContent =
        level;


    if (score === 0) {

        resultTitle.textContent =
            "Memory.exe never even started 💀";

        resultMessage.textContent =
            "That was... impressively fast.";

    } else if (
        score > bestScore
    ) {

        resultTitle.textContent =
            "NEW BEST! 🏆";

        resultMessage.textContent =
            "Nova officially has evidence of your brain power.";

    } else {

        resultTitle.textContent =
            "Memory.exe stopped working 💀";

        resultMessage.textContent =
            "Your brain has officially requested a reboot.";

    }


    resultOverlay.classList.add(
        "active"
    );

}


// =================================
// RESET GAME
// =================================

function resetGame() {

    level = 1;

    score = 0;

    sequence = [];

    playerSequence = [];

    acceptingInput = false;

    gameRunning = false;


    sequenceDisplay.innerHTML = "";


    gameTitle.textContent =
        "Ready?";

    gameMessage.textContent =
        "Press START when you're ready.";


    startButton.disabled = false;


    resultOverlay.classList.remove(
        "active"
    );


    updateStats();

}


// =================================
// UPDATE STATS
// =================================

function updateStats() {

    levelDisplay.textContent =
        level;

    scoreDisplay.textContent =
        score;

    bestScoreDisplay.textContent =
        bestScore;

}


// =================================
// BUTTON EVENTS
// =================================

symbolButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                handleSymbolClick(
                    button
                );

            }
        );

    }
);


startButton.addEventListener(
    "click",
    function () {

        startGame();

    }
);


playAgainButton.addEventListener(
    "click",
    function () {

        resetGame();

        startGame();

    }
);


resetButton.addEventListener(
    "click",
    function () {

        resetGame();

    }
);


// =================================
// INITIALIZE
// =================================

updateStats();