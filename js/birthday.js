// ================================
// PROJECT NOVA - BIRTHDAY PAGE
// ================================


// =================================
// GET ELEMENTS
// =================================

// Main buttons

const birthdayStartBtn =
    document.getElementById("birthday-start-btn");

const birthdayContinueBtn =
    document.getElementById("birthday-continue-btn");

const problemBtn =
    document.getElementById("problem-btn");

const challengeStartBtn =
    document.getElementById("challenge-start-btn");

const catchBtn =
    document.getElementById("catch-btn");

const challengeCounter =
    document.getElementById("challenge-counter");

const challengeCompleteBtn =
    document.getElementById("challenge-complete-btn");

const birthdayRevealBtn =
    document.getElementById("birthday-reveal-btn");

const showPreparedBtn =
    document.getElementById("show-prepared-btn");


// =================================
// QUIZ ELEMENTS
// =================================

const startQuizBtn =
    document.getElementById("quiz-start-btn");

const startRealTestBtn =
    document.getElementById("start-real-test-btn");

const quizBackBtn =
    document.getElementById("quiz-back-btn");

const quizQuestion =
    document.getElementById("quiz-question");

const quizOptions =
    document.getElementById("quiz-options");

const quizProgress =
    document.getElementById("quiz-progress");

const quizResultTitle =
    document.getElementById("quiz-result-title");

const quizScore =
    document.getElementById("quiz-score");

const quizResultMessage =
    document.getElementById("quiz-result-message");


// =================================
// SOMETHING SPECIAL ELEMENTS
// =================================

const specialStartBtn =
    document.getElementById("special-start-btn");

const specialScanNextBtn =
    document.getElementById("special-scan-next-btn");

const specialMemoryBtn =
    document.getElementById("special-memory-btn");

const specialFinalBtn =
    document.getElementById("special-final-btn");

const specialBackBtn =
    document.getElementById("special-back-btn");

const specialScanResults =
    document.getElementById("special-scan-results");

const memoryDisplay =
    document.getElementById("memory-display");

const memoryCards =
    document.querySelectorAll(".memory-card");


// =================================
// SECRET FILE ELEMENTS
// =================================

const secretFileArea =
    document.getElementById("secret-file-area");

const secretFileStartBtn =
    document.getElementById("secret-file-start-btn");

const secretFileBackBtn =
    document.getElementById("secret-file-back-btn");

const secretUnlockedArea =
    document.getElementById("secret-unlocked-area");

const secretUnlockedBackBtn =
    document.getElementById("secret-unlocked-back-btn");

const divaModeArea =
    document.getElementById("diva-mode-area");

const divaModeBtn =
    document.getElementById("diva-mode-btn");

const divaModeBackBtn =
    document.getElementById("diva-mode-back-btn");

const divaModeGenerateBtn =
    document.getElementById("diva-mode-generate-btn");

const divaModeMessage =
    document.getElementById("diva-mode-message");


// =================================
// DIVA CHALLENGE ELEMENTS
// =================================

const divaCheckArea =
    document.getElementById("diva-check-area");

const divaCheckOptions =
    document.getElementById("diva-check-options");

const divaCheckFeedback =
    document.getElementById("diva-check-feedback");


const divaChaseArea =
    document.getElementById("diva-chase-area");

const divaChaseGame =
    document.getElementById("diva-chase-game");

const divaChaseTarget =
    document.getElementById("diva-chase-target");

const divaChaseCounter =
    document.getElementById("diva-chase-counter");

const divaChaseFeedback =
    document.getElementById("diva-chase-feedback");


const divaMemoryArea =
    document.getElementById("diva-memory-area");

const divaMemoryInstruction =
    document.getElementById("diva-memory-instruction");

const divaMemoryDisplay =
    document.getElementById("diva-memory-display");

const divaMemoryOptions =
    document.getElementById("diva-memory-options");

const divaMemoryFeedback =
    document.getElementById("diva-memory-feedback");


const divaPuzzleArea =
    document.getElementById("diva-puzzle-area");

const divaPuzzleQuestion =
    document.getElementById("diva-puzzle-question");

const divaPuzzleOptions =
    document.getElementById("diva-puzzle-options");

const divaPuzzleFeedback =
    document.getElementById("diva-puzzle-feedback");


const divaFinalArea =
    document.getElementById("diva-final-area");

const divaFinalInstruction =
    document.getElementById("diva-final-instruction");

const divaFinalContent =
    document.getElementById("diva-final-content");

const divaFinalFeedback =
    document.getElementById("diva-final-feedback");


// =================================
// ACTUAL SECRET ELEMENTS
// =================================

const actualSecretTrigger =
    document.getElementById("actual-secret-trigger");

const actualSecretLockArea =
    document.getElementById("actual-secret-lock-area");

const actualSecretArea =
    document.getElementById("actual-secret-area");

const secretPasscodeDisplay =
    document.getElementById("secret-passcode-display");

const secretKeypad =
    document.getElementById("secret-keypad");

const secretPasscodeFeedback =
    document.getElementById("secret-passcode-feedback");

const actualSecretBackBtn =
    document.getElementById("actual-secret-back-btn");

const actualSecretBackVaultBtn =
    document.getElementById(
        "actual-secret-back-vault-btn"
    );


// =================================
// ACTUAL SECRET SETTINGS
// =================================

const actualSecretPassword =
    "7117";

let enteredSecretPassword =
    "";


// =================================
// DIVA LOCK STATUS
// =================================

const divaLockStatuses = [

    document.getElementById("lock-1-status"),

    document.getElementById("lock-2-status"),

    document.getElementById("lock-3-status"),

    document.getElementById("lock-4-status"),

    document.getElementById("lock-5-status")

];


// =================================
// SCREEN AREAS
// =================================

const birthdayIntro =
    document.querySelector(".birthday-intro");

const birthdayMessageArea =
    document.getElementById("birthday-message-area");

const birthdayProblemArea =
    document.getElementById("birthday-problem-area");

const challengeIntroArea =
    document.getElementById("challenge-intro-area");

const challengeArea =
    document.getElementById("challenge-area");

const challengeCompleteArea =
    document.getElementById("challenge-complete-area");

const birthdayRevealArea =
    document.getElementById("birthday-reveal-area");

const experienceIntroArea =
    document.getElementById("experience-intro-area");

const birthdayVaultArea =
    document.getElementById("birthday-vault-area");

const quizIntroArea =
    document.getElementById("quiz-intro-area");

const quizArea =
    document.getElementById("quiz-area");

const quizResultArea =
    document.getElementById("quiz-result-area");

const specialIntroArea =
    document.getElementById("special-intro-area");

const specialScanArea =
    document.getElementById("special-scan-area");

const specialLittleThingsArea =
    document.getElementById("special-little-things-area");

const specialMemoryArea =
    document.getElementById("special-memory-area");

const specialFinalArea =
    document.getElementById("special-final-area");

const gameArea =
    document.getElementById("game-area");


// =================================
// VAULT CARDS
// =================================

const vaultCard1 =
    document.getElementById("vault-card-1");

const vaultCard2 =
    document.getElementById("vault-card-2");

const vaultCard3 =
    document.getElementById("vault-card-3");


// =================================
// CHALLENGE SETTINGS
// =================================

let catches = 0;

const requiredCatches = 5;

let challengeActive = false;


// =================================
// SPECIAL SCAN SETTINGS
// =================================

let scanTimers = [];


// =================================
// QUIZ SETTINGS
// =================================

let currentQuestion = 0;

let selectedAnswer = null;

let currentQuiz = "review";

let quizScoreCount = 0;

let questionChanging = false;


// =================================
// DIVA QUEST SETTINGS
// =================================

let divaLock = 0;

let divaChaseCatches = 0;

const requiredDivaChaseCatches = 3;

let divaChaseActive = false;

let divaMemoryRound = 0;

let divaMemorySequence = [];

let divaMemoryUserSequence = [];

let divaMemoryWaiting = false;

let divaPuzzleIndex = 0;

let divaFinalSequence = [];

let divaFinalSelected = [];


// Symbols used by the memory challenge

const divaSymbols = [

    "💅",
    "⭐",
    "❤️",
    "🍬",
    "👑",
    "✨"

];


// =================================
// REVIEW QUESTIONS
// =================================

const reviewQuestions = [

    {
        question:
            "How prepared were you for this extremely important examination?",

        options: [
            "Extremely prepared",
            "Somewhat prepared",
            "Not prepared at all",
            "I clicked buttons and somehow ended up here 💀"
        ]
    },

    {
        question:
            "You have been given control of the AUX cable. What happens next?",

        options: [
            "I play one normal song",
            "I carefully consider everyone's music taste",
            "I panic and give it back",
            "Everyone is listening to MY music now. No exceptions."
        ]
    },

    {
        question:
            "You are offered ₹1 crore, but you have to listen to the same annoying song for 24 hours straight. Do you accept?",

        options: [
            "Absolutely",
            "Depends on the song",
            "Probably",
            "Where do I sign? 💀"
        ]
    },

    {
        question:
            "What is the scientifically correct reaction when someone says, 'I have something important to tell you'?",

        options: [
            "Stay calm",
            "Listen carefully",
            "Panic internally",
            "Immediately assume it's something insane"
        ]
    },

    {
        question:
            "Final question. Be honest. What were you expecting when you entered Project Nova?",

        options: [
            "A normal website",
            "A birthday message",
            "Something slightly weird",
            "Whatever this chaos is 💀"
        ]
    }

];


// =================================
// REAL TEST QUESTIONS
// =================================

const realTestQuestions = [

    {
        question:
            "Which of these do I enjoy doing?",

        options: [
            "Coding 💻",
            "Gaming 🎮",
            "Talking to my Cotton Candy 🍬",
            "All of the above"
        ],

        correct: [3]
    },


    {
        question:
            "What is my favorite anime?",

        options: [
            "Naruto",
            "Demon Slayer",
            "Pokémon",
            "One Piece"
        ],

        correct: [2]
    },


    {
        question:
            "If you could instantly master one skill, which would you choose?",

        options: [
            "Playing every instrument 🎸",
            "Speaking every language 🌍",
            "Coding anything perfectly 💻",
            "Reading minds 🧠"
        ],

        // Every option is accepted
        correct: [0, 1, 2, 3]
    },


    {
        question:
            "Which of these would you be most likely to survive?",

        options: [
            "A zombie apocalypse 🧟",
            "Being trapped in a horror movie 👻",
            "One week without your phone 📵",
            "A group project with completely useless teammates 💀"
        ],

        // Only A and B are correct
        correct: [0, 1]
    },


    {
        question:
            "According to you, how desperate am I ______? 💀",

        options: [
            "Not desperate at all 😇",
            "A little desperate 🤏",
            "Pretty desperate 💀",
            "Someone please stop him 😭"
        ],

        // Option D is correct
        correct: [3]
    }

];


// =================================
// BIRTHDAY INTRO
// =================================

birthdayStartBtn.addEventListener("click", function () {

    console.log("What's this button clicked!");

    birthdayIntro.style.display = "none";

    birthdayMessageArea.classList.add("active");

});


// =================================
// FIRST CONTINUE
// =================================

birthdayContinueBtn.addEventListener("click", function () {

    birthdayMessageArea.classList.remove("active");

    birthdayProblemArea.classList.add("active");

});


// =================================
// WHAT PROBLEM?
// =================================

problemBtn.addEventListener("click", function () {

    birthdayProblemArea.classList.remove("active");

    challengeIntroArea.classList.add("active");

});


// =================================
// START CHALLENGE
// =================================

challengeStartBtn.addEventListener("click", function () {

    if (challengeActive) {
        return;
    }

    catches = 0;

    challengeActive = true;

    challengeCounter.textContent =
        "Catches: 0 / " +
        requiredCatches;

    challengeIntroArea.classList.remove("active");

    challengeArea.classList.add("active");


    setTimeout(function () {

        moveCake();

    }, 100);

});


// =================================
// MOVE THE CAKE
// =================================

function moveCake() {

    const maxX =
        Math.max(
            0,
            gameArea.clientWidth -
            catchBtn.offsetWidth
        );

    const maxY =
        Math.max(
            0,
            gameArea.clientHeight -
            catchBtn.offsetHeight
        );


    const randomX =
        Math.floor(
            Math.random() *
            (maxX + 1)
        );

    const randomY =
        Math.floor(
            Math.random() *
            (maxY + 1)
        );


    catchBtn.style.left =
        randomX + "px";

    catchBtn.style.top =
        randomY + "px";

}


// =================================
// CATCH THE CAKE
// =================================

catchBtn.addEventListener("click", function () {

    if (!challengeActive) {
        return;
    }

    catches++;

    challengeCounter.textContent =
        "Catches: " +
        catches +
        " / " +
        requiredCatches;


    if (catches >= requiredCatches) {

        challengeActive = false;

        challengeArea.classList.remove("active");

        challengeCompleteArea.classList.add("active");

    } else {

        moveCake();

    }

});


// =================================
// CHALLENGE COMPLETE
// =================================

challengeCompleteBtn.addEventListener("click", function () {

    challengeCompleteArea.classList.remove("active");

    birthdayRevealArea.classList.add("active");

});


// =================================
// BIRTHDAY REVEAL
// =================================

birthdayRevealBtn.addEventListener("click", function () {

    birthdayRevealArea.classList.remove("active");

    experienceIntroArea.classList.add("active");

});


// =================================
// OPEN THE VAULT
// =================================

showPreparedBtn.addEventListener("click", function () {

    experienceIntroArea.classList.remove("active");

    birthdayVaultArea.classList.add("active");

});


// =================================
// VAULT CARD 1
// SOMETHING FUN
// =================================

vaultCard1.addEventListener("click", function () {

    birthdayVaultArea.classList.remove("active");

    quizIntroArea.classList.add("active");

});


// =================================
// VAULT CARD 2
// SOMETHING SPECIAL
// =================================

vaultCard2.addEventListener("click", function () {

    birthdayVaultArea.classList.remove("active");

    specialIntroArea.classList.add("active");

});


// =================================
// VAULT CARD 3
// SECRET FILE
// =================================

vaultCard3.addEventListener("click", function () {

    if (
        localStorage.getItem("novaDivaUnlocked")
        === "true"
    ) {

        birthdayVaultArea.classList.remove("active");

        secretUnlockedArea.classList.add("active");

        return;

    }


    birthdayVaultArea.classList.remove("active");

    secretFileArea.classList.add("active");

});


// =================================
// UPDATE DIVA LOCK DISPLAY
// =================================

function updateDivaLockDisplay() {

    divaLockStatuses.forEach(
        function (status, index) {

            if (index < divaLock) {

                status.textContent = "💅";

                status.classList.add("unlocked");

            } else {

                status.textContent = "🔒";

                status.classList.remove("unlocked");

            }

        }
    );

}


// =================================
// START DIVA QUEST
// =================================

secretFileStartBtn.addEventListener(
    "click",
    function () {

        divaLock = 0;

        updateDivaLockDisplay();

        secretFileArea.classList.remove("active");

        divaCheckArea.classList.add("active");

        divaCheckFeedback.textContent = "";

    }
);


// =================================
// SECRET FILE → VAULT
// =================================

secretFileBackBtn.addEventListener(
    "click",
    function () {

        secretFileArea.classList.remove("active");

        birthdayVaultArea.classList.add("active");

    }
);


// =================================
// DIVA CHECK
// LEVEL 01
// =================================

divaCheckOptions
    .querySelectorAll("button")
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const choice =
                        button.dataset.divaChoice;


                    if (choice === "yes") {

                        button.classList.add("correct");

                        divaCheckFeedback.textContent =
                            "Correct. Obviously. 💅";

                        divaLock = 1;

                        updateDivaLockDisplay();


                        setTimeout(
                            function () {

                                divaCheckArea.classList.remove(
                                    "active"
                                );

                                startDivaChase();

                            },
                            700
                        );

                    } else {

                        button.classList.add("wrong");

                        divaCheckFeedback.textContent =
                            "Incorrect. Please reconsider your Diva credentials. 💀";

                    }

                }
            );

        }
    );


// =================================
// START DIVA CHASE
// LEVEL 02
// =================================

function startDivaChase() {

    divaChaseCatches = 0;

    divaChaseActive = true;

    divaChaseCounter.textContent =
        "Catches: 0 / " +
        requiredDivaChaseCatches;

    divaChaseFeedback.textContent = "";

    divaChaseArea.classList.add("active");

    setTimeout(
        function () {

            moveDivaEmoji();

        },
        100
    );

}


// =================================
// MOVE DIVA EMOJI
// =================================

function moveDivaEmoji() {

    const maxX =
        Math.max(
            0,
            divaChaseGame.clientWidth -
            divaChaseTarget.offsetWidth
        );

    const maxY =
        Math.max(
            0,
            divaChaseGame.clientHeight -
            divaChaseTarget.offsetHeight
        );


    const randomX =
        Math.floor(
            Math.random() *
            (maxX + 1)
        );

    const randomY =
        Math.floor(
            Math.random() *
            (maxY + 1)
        );


    divaChaseTarget.style.left =
        randomX + "px";

    divaChaseTarget.style.top =
        randomY + "px";

}


// =================================
// DIVA EMOJI CHASE CLICK
// =================================

divaChaseTarget.addEventListener(
    "click",
    function () {

        if (!divaChaseActive) {
            return;
        }

        divaChaseCatches++;

        divaChaseCounter.textContent =
            "Catches: " +
            divaChaseCatches +
            " / " +
            requiredDivaChaseCatches;


        if (
            divaChaseCatches >=
            requiredDivaChaseCatches
        ) {

            divaChaseActive = false;

            divaLock = 2;

            updateDivaLockDisplay();

            divaChaseFeedback.textContent =
                "Three catches. Diva reflexes confirmed. 💅";


            setTimeout(
                function () {

                    divaChaseArea.classList.remove(
                        "active"
                    );

                    startDivaMemory();

                },
                800
            );

        } else {

            moveDivaEmoji();

        }

    }
);


// =================================
// START DIVA MEMORY
// LEVEL 03
// =================================

function startDivaMemory() {

    divaMemoryRound = 0;

    divaMemoryArea.classList.add("active");

    startNextMemoryRound();

}


// =================================
// CREATE RANDOM MEMORY SEQUENCE
// =================================

function createMemorySequence(length) {

    const sequence = [];

    for (
        let i = 0;
        i < length;
        i++
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                divaSymbols.length
            );

        sequence.push(
            divaSymbols[randomIndex]
        );

    }

    return sequence;

}


// =================================
// START NEXT MEMORY ROUND
// =================================

function startNextMemoryRound() {

    divaMemoryWaiting = true;

    divaMemoryUserSequence = [];

    divaMemoryOptions.innerHTML = "";

    const sequenceLength =
        divaMemoryRound + 2;

    divaMemorySequence =
        createMemorySequence(
            sequenceLength
        );


    divaMemoryInstruction.textContent =
        "Round " +
        (divaMemoryRound + 1) +
        " / 3 — memorize this sequence.";


    divaMemoryDisplay.textContent =
        divaMemorySequence.join(" ");


    setTimeout(
        function () {

            divaMemoryDisplay.textContent =
                "Your turn. 💅";

            divaMemoryInstruction.textContent =
                "Click the symbols in the exact order.";


            createMemoryButtons();

            divaMemoryWaiting = false;

        },
        1800
    );

}


// =================================
// CREATE MEMORY BUTTONS
// =================================

function createMemoryButtons() {

    divaMemoryOptions.innerHTML = "";


    divaSymbols.forEach(
        function (symbol) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.textContent = symbol;

            button.addEventListener(
                "click",
                function () {

                    if (divaMemoryWaiting) {
                        return;
                    }


                    const expectedSymbol =
                        divaMemorySequence[
                            divaMemoryUserSequence.length
                        ];


                    if (
                        symbol ===
                        expectedSymbol
                    ) {

                        button.classList.add(
                            "correct"
                        );

                        divaMemoryUserSequence.push(
                            symbol
                        );


                        if (
                            divaMemoryUserSequence.length ===
                            divaMemorySequence.length
                        ) {

                            divaMemoryWaiting = true;

                            divaMemoryFeedback.textContent =
                                "Perfect sequence. 💅";


                            divaMemoryRound++;


                            if (
                                divaMemoryRound >= 3
                            ) {

                                divaLock = 3;

                                updateDivaLockDisplay();


                                setTimeout(
                                    function () {

                                        divaMemoryArea.classList.remove(
                                            "active"
                                        );

                                        startDivaPuzzle();

                                    },
                                    800
                                );

                            } else {

                                setTimeout(
                                    function () {

                                        divaMemoryFeedback.textContent =
                                            "";

                                        startNextMemoryRound();

                                    },
                                    800
                                );

                            }

                        }

                    } else {

                        divaMemoryWaiting = true;

                        divaMemoryFeedback.textContent =
                            "Wrong order. Try the round again. 🧠";


                        setTimeout(
                            function () {

                                divaMemoryFeedback.textContent =
                                    "";

                                startNextMemoryRound();

                            },
                            900
                        );

                    }

                }
            );


            divaMemoryOptions.appendChild(
                button
            );

        }
    );

}


// =================================
// START DIVA PUZZLE
// LEVEL 04
// =================================

function startDivaPuzzle() {

    divaPuzzleIndex = 0;

    divaPuzzleArea.classList.add("active");

    showDivaPuzzle();

}


// =================================
// DIVA PUZZLES
// =================================

const divaPuzzles = [

    {
        question:
            "💅 ⭐ 💅 ⭐ ?",

        options: [
            "💅",
            "⭐",
            "❤️",
            "👑"
        ],

        correct:
            "💅"
    },


    {
        question:
            "💅 ❤️ ⭐ 💅 ❤️ ?",

        options: [
            "💅",
            "❤️",
            "⭐",
            "✨"
        ],

        correct:
            "⭐"
    },


    {
        question:
            "Which symbol breaks the pattern? 💅 ⭐ ❤️ 💅 ⭐ 👑",

        options: [
            "💅",
            "⭐",
            "❤️",
            "👑"
        ],

        correct:
            "👑"
    }

];


// =================================
// SHOW DIVA PUZZLE
// =================================

function showDivaPuzzle() {

    const puzzle =
        divaPuzzles[divaPuzzleIndex];


    divaPuzzleQuestion.textContent =
        puzzle.question;


    divaPuzzleOptions.innerHTML = "";

    divaPuzzleFeedback.textContent = "";


    puzzle.options.forEach(
        function (option) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.textContent =
                option;


            button.addEventListener(
                "click",
                function () {

                    if (
                        option ===
                        puzzle.correct
                    ) {

                        button.classList.add(
                            "correct"
                        );

                        divaPuzzleFeedback.textContent =
                            "Correct. Brain cells successfully slayed. 🧠💅";


                        divaPuzzleIndex++;


                        if (
                            divaPuzzleIndex >=
                            divaPuzzles.length
                        ) {

                            divaLock = 4;

                            updateDivaLockDisplay();


                            setTimeout(
                                function () {

                                    divaPuzzleArea.classList.remove(
                                        "active"
                                    );

                                    startDivaFinal();

                                },
                                800
                            );

                        } else {

                            setTimeout(
                                function () {

                                    showDivaPuzzle();

                                },
                                800
                            );

                        }

                    } else {

                        button.classList.add(
                            "wrong"
                        );

                        divaPuzzleFeedback.textContent =
                            "Nope. The Diva database rejects that answer. 💀";

                    }

                }
            );


            divaPuzzleOptions.appendChild(
                button
            );

        }
    );

}


// =================================
// START FINAL DIVA LOCK
// LEVEL 05
// =================================

function startDivaFinal() {

    divaFinalSequence =
        createMemorySequence(3);

    divaFinalSelected = [];

    divaFinalInstruction.textContent =
        "Memorize the secret sequence.";

    divaFinalFeedback.textContent = "";

    divaFinalArea.classList.add("active");


    divaFinalContent.innerHTML =

        '<div class="diva-final-sequence">' +
        divaFinalSequence.join(" ") +
        "</div>";


    setTimeout(
        function () {

            showFinalSequenceChoices();

        },
        2000
    );

}


// =================================
// FINAL SEQUENCE CHOICES
// =================================

function showFinalSequenceChoices() {

    divaFinalInstruction.textContent =
        "Select the symbols in the exact order.";


    divaFinalContent.innerHTML = "";


    const sequenceDisplay =
        document.createElement("div");

    sequenceDisplay.className =
        "diva-final-sequence";

    sequenceDisplay.textContent =
        divaFinalSelected.length > 0
            ? divaFinalSelected.join(" ")
            : "Choose the sequence";


    divaFinalContent.appendChild(
        sequenceDisplay
    );


    const choices =
        document.createElement("div");

    choices.className =
        "diva-choice-grid";


    divaSymbols.forEach(
        function (symbol) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.textContent =
                symbol;


            button.addEventListener(
                "click",
                function () {

                    const expected =
                        divaFinalSequence[
                            divaFinalSelected.length
                        ];


                    if (
                        symbol ===
                        expected
                    ) {

                        divaFinalSelected.push(
                            symbol
                        );

                        showFinalSequenceChoices();


                        if (
                            divaFinalSelected.length ===
                            divaFinalSequence.length
                        ) {

                            setTimeout(
                                function () {

                                    showFinalSlayButton();

                                },
                                350
                            );

                        }

                    } else {

                        divaFinalSelected = [];

                        divaFinalFeedback.textContent =
                            "Wrong sequence. Final lock reset. 👑";


                        showFinalSequenceChoices();

                    }

                }
            );


            choices.appendChild(
                button
            );

        }
    );


    divaFinalContent.appendChild(
        choices
    );

}


// =================================
// FINAL SLAY BUTTON
// =================================

function showFinalSlayButton() {

    divaFinalInstruction.textContent =
        "Sequence accepted. One thing remains.";


    divaFinalFeedback.textContent =
        "";


    const slayButton =
        document.createElement("button");

    slayButton.type = "button";

    slayButton.className =
        "diva-final-slay";

    slayButton.textContent =
        "SLAY IT 💅";


    slayButton.addEventListener(
        "click",
        function () {

            divaLock = 5;

            updateDivaLockDisplay();

            localStorage.setItem(
                "novaDivaUnlocked",
                "true"
            );


            divaFinalFeedback.textContent =
                "FINAL LOCK DESTROYED. 👑💅";


            setTimeout(
                function () {

                    divaFinalArea.classList.remove(
                        "active"
                    );

                    secretUnlockedArea.classList.add(
                        "active"
                    );

                    updateVaultCard();

                },
                900
            );

        }
    );


    divaFinalContent.appendChild(
        slayButton
    );

}


// =================================
// UPDATE VAULT CARD
// =================================

function updateVaultCard() {

    vaultCard3.classList.remove(
        "vault-card-locked"
    );

    vaultCard3.classList.add(
        "vault-card-unlocked"
    );


    vaultCard3.querySelector(
        ".vault-icon"
    ).textContent =
        "💅";


    vaultCard3.querySelector(
        ".vault-card-title"
    ).textContent =
        "Secret File";


    vaultCard3.querySelector(
        ".vault-card-text"
    ).textContent =
        "Unlocked. 💅";

}


// =================================
// SECRET REWARD → DIVA MODE
// =================================

divaModeBtn.addEventListener(
    "click",
    function () {

        secretUnlockedArea.classList.remove(
            "active"
        );

        divaModeArea.classList.add(
            "active"
        );

    }
);


// =================================
// DIVA MODE STATUS MESSAGES
// =================================

const divaModeMessages = [

    "Diva energy: 100%. 💅",

    "Slay levels currently exceeding safe limits. 👑",

    "Nailcare emoji detected. Obviously. 💅",

    "Nova has officially approved this Diva behavior.",

    "Current status: Too fabulous for this database. 💅",

    "Diva.exe is operating normally.",

    "Warning: Excessive slay detected. 💀💅",

    "Project Nova reports: Diva confirmed.",

    "Diva protocol remains undefeated. 👑",

    "System check complete: still serving. 💅"

];


// =================================
// GENERATE DIVA STATUS
// =================================

divaModeGenerateBtn.addEventListener(
    "click",
    function () {

        const randomIndex =
            Math.floor(
                Math.random() *
                divaModeMessages.length
            );


        divaModeMessage.textContent =
            divaModeMessages[randomIndex];

    }
);


// =================================
// DIVA MODE → SECRET FILE
// =================================

divaModeBackBtn.addEventListener(
    "click",
    function () {

        divaModeArea.classList.remove(
            "active"
        );

        secretUnlockedArea.classList.add(
            "active"
        );

    }
);


// =================================
// SECRET REWARD → VAULT
// =================================

secretUnlockedBackBtn.addEventListener(
    "click",
    function () {

        secretUnlockedArea.classList.remove(
            "active"
        );

        birthdayVaultArea.classList.add(
            "active"
        );

    }
);


// =================================
// ACTUAL SECRET → PASSWORD SCREEN
// =================================

if (actualSecretTrigger) {

    actualSecretTrigger.addEventListener(
        "click",
        function () {

            enteredSecretPassword = "";

            updateSecretPasscodeDisplay();

            secretPasscodeFeedback.textContent =
                "";

            divaModeArea.classList.remove(
                "active"
            );

            actualSecretLockArea.classList.add(
                "active"
            );

        }
    );

}


// =================================
// UPDATE SECRET PASSWORD DISPLAY
// =================================

function updateSecretPasscodeDisplay() {

    if (!secretPasscodeDisplay) {
        return;
    }


    let display = "";


    for (
        let i = 0;
        i < 4;
        i++
    ) {

        if (
            i <
            enteredSecretPassword.length
        ) {

            display += "● ";

        } else {

            display += "• ";

        }

    }


    secretPasscodeDisplay.textContent =
        display.trim();

}


// =================================
// SECRET PASSWORD KEYPAD
// =================================

if (secretKeypad) {

    secretKeypad.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest("button");


            if (!button) {
                return;
            }


            const digit =
                button.dataset.digit;

            const action =
                button.dataset.action;


            // Number button

            if (
                digit !==
                undefined
            ) {

                if (
                    enteredSecretPassword.length >=
                    4
                ) {

                    return;

                }


                enteredSecretPassword +=
                    digit;


                updateSecretPasscodeDisplay();

                secretPasscodeFeedback.textContent =
                    "";

                return;

            }


            // Clear button

            if (
                action ===
                "clear"
            ) {

                enteredSecretPassword =
                    "";

                updateSecretPasscodeDisplay();

                secretPasscodeFeedback.textContent =
                    "";

                return;

            }


            // Enter button

            if (
                action ===
                "enter"
            ) {

                checkActualSecretPassword();

            }

        }
    );

}


// =================================
// CHECK ACTUAL SECRET PASSWORD
// =================================

function checkActualSecretPassword() {

    if (
        enteredSecretPassword ===
        actualSecretPassword
    ) {

        secretPasscodeFeedback.textContent =
            "ACCESS GRANTED. ❤️";


        setTimeout(
            function () {

                actualSecretLockArea.classList.remove(
                    "active"
                );

                actualSecretArea.classList.add(
                    "active"
                );

            },
            700
        );


        return;

    }


    secretPasscodeFeedback.textContent =
        "Wrong code. The file remains classified. 👀";


    enteredSecretPassword =
        "";


    setTimeout(
        function () {

            updateSecretPasscodeDisplay();

        },
        400
    );

}


// =================================
// ACTUAL SECRET PASSWORD → DIVA MODE
// =================================

if (actualSecretBackBtn) {

    actualSecretBackBtn.addEventListener(
        "click",
        function () {

            actualSecretLockArea.classList.remove(
                "active"
            );

            divaModeArea.classList.add(
                "active"
            );

        }
    );

}


// =================================
// ACTUAL SECRET MESSAGE
// =================================

if (actualSecretArea) {

    const actualSecretLetter =
        document.getElementById(
            "actual-secret-letter"
        );


    if (actualSecretLetter) {

        actualSecretLetter.innerHTML = `

            <p>
                There are some things I wanted to tell you
                that I couldn't really fit into all the games,
                jokes, challenges, and chaos of Project Nova.
            </p>

            <p>
                So if you made it this far...
            </p>

            <p>
                This part is actually for you.
            </p>

            <p>
                You became one of the most important people
                in my life.
            </p>

            <p>
                You supported me. You listened to me.
                You were there when I needed someone to talk to.
                Somewhere along the way, you became much more
                than just someone I talked to.
            </p>

            <p>
                You became one of my closest friends.
            </p>

            <p>
                There were days when talking to you made
                difficult things feel easier. You gave me
                reasons to smile, reasons to look forward to
                messages, and memories that genuinely matter
                to me.
            </p>

            <p>
                I don't think I can properly explain how
                important that became to me.
            </p>

            <p>
                You were someone I trusted. Someone I cared
                about. Someone I couldn't simply replace.
            </p>

            <p>
                And yeah... I probably didn't always say all
                of that properly.
            </p>

            <p>
                You once told me that when we get to 11th,
                we might not talk as much because studies and
                life could get busier.
            </p>

            <p>
                Maybe that's true.
                Maybe things will change.
                Maybe we'll both become busy and end up going
                in completely different directions.
            </p>

            <p>
                That's one of the reasons I wanted Project Nova
                to be big enough to hold onto a little piece
                of this chapter.
            </p>

            <p>
                The games.
                The jokes.
                The ridiculous 💅 energy.
                All of it.
            </p>

            <p>
                Even if life changes, I hope you remember that
                you were genuinely important to me.
            </p>

            <p>
                You supported me.
            </p>

            <p>
                You were my best friend.
            </p>

            <p>
                You were irreplaceable to me.
            </p>

            <p>
                So if someday we're both ridiculously busy
                and barely have time to talk, come back here
                and remember this chapter for what it was.
            </p>

            <p>
                Someone cared enough to build an entire stupid
                website just to make you smile. 💅
            </p>

            <p>
                Happy Birthday. ❤️
            </p>

            <p>
                Project Nova wasn't really about the website.
            </p>

            <p>
                It was about you.
            </p>

        `;

    }

}


// =================================
// ACTUAL SECRET → VAULT
// =================================

if (actualSecretBackVaultBtn) {

    actualSecretBackVaultBtn.addEventListener(
        "click",
        function () {

            actualSecretArea.classList.remove(
                "active"
            );

            birthdayVaultArea.classList.add(
                "active"
            );

        }
    );

}


// =================================
// RESTORE UNLOCKED SECRET FILE
// =================================

function restoreDivaUnlock() {

    if (
        localStorage.getItem("novaDivaUnlocked")
        === "true"
    ) {

        divaLock = 5;

        updateDivaLockDisplay();

        updateVaultCard();

    }

}


// =================================
// STARTUP
// =================================

restoreDivaUnlock();


// =================================
// START SOMETHING SPECIAL
// =================================

specialStartBtn.addEventListener("click", function () {

    specialIntroArea.classList.remove("active");

    specialScanArea.classList.add("active");

    runSpecialScan();

});


// =================================
// PERSONALITY SCAN
// =================================

function runSpecialScan() {

    scanTimers.forEach(function (timer) {

        clearTimeout(timer);

    });

    scanTimers = [];


    specialScanResults.innerHTML = "";


    const scanResults = [

        "Cares too much ........ CONFIRMED",

        "Talks a lot ........... CONFIRMED",

        "Gaming detected ....... YES",

        "Random screenshots .... CONCERNING",

        "Butter yellow detected . DEFINITELY",

        "Ceramic mug ............ IMPORTANT",

        "Sewing skill ........... LOADING..."

    ];


    scanResults.forEach(
        function (result, index) {

            const timer =
                setTimeout(
                    function () {

                        const resultLine =
                            document.createElement("p");


                        resultLine.textContent =
                            result;


                        specialScanResults.appendChild(
                            resultLine
                        );

                    },
                    index * 350
                );


            scanTimers.push(timer);

        }
    );

}


// =================================
// SCAN → LITTLE THINGS
// =================================

specialScanNextBtn.addEventListener(
    "click",
    function () {

        scanTimers.forEach(function (timer) {

            clearTimeout(timer);

        });

        scanTimers = [];


        specialScanArea.classList.remove(
            "active"
        );

        specialLittleThingsArea.classList.add(
            "active"
        );

    }
);


// =================================
// LITTLE THINGS → MEMORY ARCHIVE
// =================================

specialMemoryBtn.addEventListener(
    "click",
    function () {

        specialLittleThingsArea.classList.remove(
            "active"
        );

        specialMemoryArea.classList.add(
            "active"
        );

    }
);


// =================================
// MEMORY ARCHIVE
// =================================

memoryCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                const memory =
                    card.dataset.memory;


                if (memory === "birthday") {

                    memoryDisplay.textContent =
                        "MEMORY_007: Your 7th birthday. Apparently that one made it all the way into the Project Nova archive. 🎂";

                }


                if (memory === "laugh") {

                    memoryDisplay.textContent =
                        "LAUGH_LOG: People + yourself. A surprisingly effective comedy system. 😂";

                }


                if (memory === "care") {

                    memoryDisplay.textContent =
                        "CARE_LEVEL: 'I care a bit too much' has been officially recorded in the database. Evidence is overwhelming. 💛";

                }

            }
        );

    }
);


// =================================
// MEMORY → FINAL FILE
// =================================

specialFinalBtn.addEventListener(
    "click",
    function () {

        specialMemoryArea.classList.remove(
            "active"
        );

        specialFinalArea.classList.add(
            "active"
        );

    }
);


// =================================
// FINAL FILE → VAULT
// =================================

specialBackBtn.addEventListener(
    "click",
    function () {

        specialFinalArea.classList.remove(
            "active"
        );

        birthdayVaultArea.classList.add(
            "active"
        );

    }
);


// =================================
// START REVIEW QUIZ
// =================================

startQuizBtn.addEventListener("click", function () {

    currentQuiz = "review";

    currentQuestion = 0;

    quizScoreCount = 0;

    selectedAnswer = null;


    quizIntroArea.classList.remove("active");

    quizArea.classList.add("active");


    showQuestion();

});


// =================================
// SHOW QUESTION
// =================================

function showQuestion() {

    const questions =
        currentQuiz === "review"
            ? reviewQuestions
            : realTestQuestions;


    const question =
        questions[currentQuestion];


    quizQuestion.textContent =
        question.question;


    quizProgress.textContent =
        "QUESTION " +
        (currentQuestion + 1) +
        " / " +
        questions.length;


    quizOptions.innerHTML = "";


    selectedAnswer = null;

    questionChanging = false;


    question.options.forEach(
        function (option, index) {

            const optionBtn =
                document.createElement("button");


            optionBtn.type =
                "button";


            optionBtn.classList.add(
                "quiz-option"
            );


            optionBtn.textContent =
                option;


            optionBtn.addEventListener(
                "click",
                function () {

                    if (questionChanging) {

                        return;

                    }


                    questionChanging = true;

                    selectedAnswer =
                        index;


                    document
                        .querySelectorAll(
                            ".quiz-option"
                        )
                        .forEach(
                            function (button) {

                                button.classList.remove(
                                    "selected"
                                );

                            }
                        );


                    optionBtn.classList.add(
                        "selected"
                    );


                    document
                        .querySelectorAll(
                            ".quiz-option"
                        )
                        .forEach(
                            function (button) {

                                button.disabled = true;

                            }
                        );


                    setTimeout(function () {

                        goToNextQuestion();

                    }, 400);

                }
            );


            quizOptions.appendChild(
                optionBtn
            );

        }
    );

}


// =================================
// NEXT QUESTION LOGIC
// =================================

function goToNextQuestion() {

    if (selectedAnswer === null) {

        return;

    }


    const questions =
        currentQuiz === "review"
            ? reviewQuestions
            : realTestQuestions;


    if (currentQuiz === "real") {

        const correctAnswers =
            questions[currentQuestion]
                .correct;


        if (
            correctAnswers.includes(
                selectedAnswer
            )
        ) {

            quizScoreCount++;

        }

    }


    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        showQuestion();

    } else {

        finishQuiz();

    }

}


// =================================
// FINISH QUIZ
// =================================

function finishQuiz() {

    quizArea.classList.remove("active");

    quizResultArea.classList.add("active");


    if (currentQuiz === "review") {

        quizResultTitle.textContent =
            "Review complete.";


        quizScore.style.display =
            "none";


        quizResultMessage.innerHTML =
            "Your results have been carefully ignored." +
            "<br><br>" +
            "<strong>NOW THE REAL TEST BEGINS.</strong>";


        startRealTestBtn.style.display =
            "inline-block";


        quizBackBtn.style.display =
            "none";

    }


    else {

        quizResultTitle.textContent =
            "The results are in.";


        quizScore.style.display =
            "block";


        quizScore.textContent =
            "Score: " +
            quizScoreCount +
            " / " +
            realTestQuestions.length;


        quizResultMessage.textContent =
            "That concludes the examination.";


        startRealTestBtn.style.display =
            "none";


        quizBackBtn.style.display =
            "inline-block";

    }

}


// =================================
// START REAL TEST
// =================================

startRealTestBtn.addEventListener(
    "click",
    function () {

        currentQuiz = "real";

        currentQuestion = 0;

        quizScoreCount = 0;

        selectedAnswer = null;


        quizResultArea.classList.remove(
            "active"
        );


        quizArea.classList.add(
            "active"
        );


        showQuestion();

    }
);


// =================================
// BACK TO VAULT
// =================================

quizBackBtn.addEventListener(
    "click",
    function () {

        quizResultArea.classList.remove(
            "active"
        );


        birthdayVaultArea.classList.add(
            "active"
        );

    }
);