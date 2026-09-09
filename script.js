// ================================
// PROJECT NOVA - MAIN SCRIPT
// ================================


// =================================
// SCREEN ELEMENTS
// =================================

const birthdayScreen = document.getElementById("birthday-screen");
const nameScreen = document.getElementById("name-screen");
const readyScreen = document.getElementById("ready-screen");
const chaosScreen = document.getElementById("chaos-screen");
const homeScreen = document.getElementById("home-screen");


// =================================
// BIRTHDAY ELEMENTS
// =================================

const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const birthdayNextBtn = document.getElementById("birthday-next-btn");
const birthdayMessage = document.getElementById("birthday-message");

const correctDay = 7;
const correctMonth = 11;


// =================================
// NAME ELEMENTS
// =================================

const nameInput = document.getElementById("name-input");
const nameNextBtn = document.getElementById("name-next-btn");
const nameMessage = document.getElementById("name-message");

const allowedNames = [
    "janvi",
    "cotton candy",
    "furry"
];


// =================================
// CHAOS ELEMENTS
// =================================

const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const chaosNoBtn = document.getElementById("chaos-no-btn");
const chaosTitle = document.getElementById("chaos-title");

const chaosButtons = document.getElementById("chaos-buttons");

const reasonArea = document.getElementById("reason-area");
const reasonInput = document.getElementById("reason-input");
const reasonContinueBtn = document.getElementById("reason-continue-btn");


// =================================
// CHAOS STATE
// =================================

let chaosStep = 0;


// =================================
// SCREEN SWITCHING
// =================================

function showScreen(screenToShow) {

    document.querySelectorAll(".screen").forEach(function (screen) {
        screen.classList.remove("active");
    });

    screenToShow.classList.add("active");

}


// =================================
// BIRTHDAY VERIFICATION
// =================================

birthdayNextBtn.addEventListener("click", function () {

    const enteredDay = Number(dayInput.value);
    const enteredMonth = Number(monthInput.value);

    if (
        enteredDay === correctDay &&
        enteredMonth === correctMonth
    ) {

        birthdayMessage.textContent = "";

        showScreen(nameScreen);

    } else {

        birthdayMessage.textContent =
            "Hmm... that doesn't seem right.";

    }

});


// =================================
// NAME VERIFICATION
// =================================

nameNextBtn.addEventListener("click", function () {

    const enteredName = nameInput.value
        .trim()
        .toLowerCase();

    if (allowedNames.includes(enteredName)) {

        nameMessage.textContent = "";

        showScreen(readyScreen);

    } else {

        nameMessage.textContent =
            "Hmm... I don't think you're the person I'm looking for.";

    }

});


// =================================
// FIRST FORCED NO BUTTON
// =================================

noBtn.addEventListener("click", function () {

    chaosStep = 0;

    // Reset the screen

    chaosTitle.textContent =
        "Are you sure you don't want to proceed?";

    chaosButtons.style.display = "flex";

    yesBtn.style.display = "inline-block";

    chaosNoBtn.style.display = "inline-block";

    chaosNoBtn.textContent = "NO";

    chaosNoBtn.classList.remove("take-me-inside");

    reasonArea.style.display = "none";

    reasonInput.value = "";

    // Make sure normal theme is active

    document.body.classList.remove("anger-mode");

    showScreen(chaosScreen);

});


// =================================
// YES BUTTON
// =================================

yesBtn.addEventListener("click", function () {

    // YES means she is sure she does not
    // want to proceed.

    chaosTitle.textContent =
        "Interesting...";

    yesBtn.style.display = "none";

    chaosNoBtn.textContent =
        "TAKE ME INSIDE";

    chaosNoBtn.classList.add("take-me-inside");

    chaosStep = 3;

});


// =================================
// CHAOS NO BUTTON
// =================================

chaosNoBtn.addEventListener("click", function () {

    // First NO

    if (chaosStep === 0) {

        chaosTitle.textContent =
            "Hmm... are you really sure?";

        chaosStep = 1;

        return;

    }


    // Second NO

    if (chaosStep === 1) {

        chaosTitle.textContent =
            "Then why did you press NO before?";

        // Hide YES and NO buttons

        chaosButtons.style.display = "none";

        // Activate red / black theme HERE

        document.body.classList.add("anger-mode");

        // Show explanation area

        reasonArea.style.display = "flex";

        chaosStep = 2;

        return;

    }


    // TAKE ME INSIDE

    if (chaosStep === 3) {

        // Restore the normal theme

        document.body.classList.remove("anger-mode");

        showScreen(homeScreen);

    }

});


// =================================
// EXPLANATION SUBMITTED
// =================================

reasonContinueBtn.addEventListener("click", function () {

    chaosTitle.textContent =
        "Interesting.";

    // Hide the explanation input

    reasonArea.style.display = "none";

    // Bring back the button area

    chaosButtons.style.display = "flex";

    // Only show TAKE ME INSIDE

    yesBtn.style.display = "none";

    chaosNoBtn.style.display = "inline-block";

    chaosNoBtn.textContent =
        "TAKE ME INSIDE";

    chaosNoBtn.classList.add("take-me-inside");

    chaosStep = 3;

});