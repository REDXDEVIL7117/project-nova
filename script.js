// Get all screens

const birthdayScreen = document.getElementById("birthday-screen");
const nameScreen = document.getElementById("name-screen");
const readyScreen = document.getElementById("ready-screen");
const chaosScreen = document.getElementById("chaos-screen");
const homeScreen = document.getElementById("home-screen");


// Get birthday elements

const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const birthdayNextBtn = document.getElementById("birthday-next-btn");
const birthdayMessage = document.getElementById("birthday-message");


// Get name elements

const nameInput = document.getElementById("name-input");
const nameNextBtn = document.getElementById("name-next-btn");
const nameMessage = document.getElementById("name-message");


// Correct birthday

const correctDay = 7;
const correctMonth = 11;


// Function to switch screens

function showScreen(screenToShow) {

    // Hide every screen

    document.querySelectorAll(".screen").forEach(function (screen) {
        screen.classList.remove("active");
    });

    // Show the requested screen

    screenToShow.classList.add("active");
}


// Birthday verification

birthdayNextBtn.addEventListener("click", function () {

    const enteredDay = Number(dayInput.value);
    const enteredMonth = Number(monthInput.value);

    // Check if the birthday is correct

    if (
        enteredDay === correctDay &&
        enteredMonth === correctMonth
    ) {

        birthdayMessage.textContent = "";

        // Move to the name screen

        showScreen(nameScreen);

    } else {

        birthdayMessage.textContent = "Hmm... that doesn't seem right.";
    }

});


// Temporary name verification

nameNextBtn.addEventListener("click", function () {

    const enteredName = nameInput.value.trim();

    // For now, just make sure something was entered

    if (enteredName !== "") {

        nameMessage.textContent = "";

        // Move to the ready screen

        showScreen(readyScreen);

    } else {

        nameMessage.textContent = "You need to enter a name first.";
    }

});


// Temporary NO button behavior

document.getElementById("no-btn").addEventListener("click", function () {

    showScreen(chaosScreen);

});


// Temporary YES button behavior

document.getElementById("yes-btn").addEventListener("click", function () {

    document.getElementById("chaos-title").textContent =
        "Interesting choice...";

});


// Temporary chaos NO button behavior

document.getElementById("chaos-no-btn").addEventListener("click", function () {

    document.getElementById("chaos-title").textContent =
        "Then perhaps you should reconsider.";

});