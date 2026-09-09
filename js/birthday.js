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


// =================================
// QUIZ SETTINGS
// =================================

let currentQuestion = 0;

let selectedAnswer = null;

let currentQuiz = "review";

let quizScoreCount = 0;

let questionChanging = false;


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

    catches = 0;

    challengeCounter.textContent =
        "Catches: 0 / " +
        requiredCatches;

    challengeIntroArea.classList.remove("active");

    challengeArea.classList.add("active");

    // Wait until the game area is visible
    // before calculating its size
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

    catches++;


    challengeCounter.textContent =
        "Catches: " +
        catches +
        " / " +
        requiredCatches;


    if (catches >= requiredCatches) {

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
// =================================

vaultCard3.addEventListener("click", function () {

    vaultCard3.querySelector(
        ".vault-card-text"
    ).textContent =
        "Still locked.";

});


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

            setTimeout(function () {

                const resultLine =
                    document.createElement("p");

                resultLine.textContent =
                    result;

                specialScanResults.appendChild(
                    resultLine
                );

            }, index * 350);

        }
    );

}


// =================================
// SCAN → LITTLE THINGS
// =================================

specialScanNextBtn.addEventListener(
    "click",
    function () {

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


    // Clear old options
    quizOptions.innerHTML = "";


    selectedAnswer = null;

    questionChanging = false;


    // Create new option buttons
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

                    // Prevent multiple clicks
                    if (questionChanging) {

                        return;

                    }


                    questionChanging = true;

                    selectedAnswer =
                        index;


                    // Remove selection from
                    // every other option
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


                    // Highlight selected answer
                    optionBtn.classList.add(
                        "selected"
                    );


                    // Disable all buttons
                    document
                        .querySelectorAll(
                            ".quiz-option"
                        )
                        .forEach(
                            function (button) {

                                button.disabled = true;

                            }
                        );


                    // Move to next question
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


    // Only calculate score
    // during the REAL TEST
    if (currentQuiz === "real") {

        const correctAnswers =
            questions[currentQuestion]
                .correct;


        // Supports one OR multiple
        // correct answers
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


    // ================================
    // REVIEW RESULT
    // ================================

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


    // ================================
    // REAL TEST RESULT
    // ================================

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