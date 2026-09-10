// =================================
// CHAOS BUTTON - PROJECT NOVA
// =================================


// =================================
// GET HTML ELEMENTS
// =================================

const chaosButton =
    document.getElementById("chaos-button");

const pressCount =
    document.getElementById("press-count");

const chaosLevel =
    document.getElementById("chaos-level");

const bestScore =
    document.getElementById("best-score");

const chaosTitle =
    document.getElementById("chaos-title");

const chaosMessage =
    document.getElementById("chaos-message");

const chaosDisplay =
    document.getElementById("chaos-display");

const buttonArea =
    document.getElementById("button-area");

const resetButton =
    document.getElementById("reset-button");


// =================================
// GAME VARIABLES
// =================================

let presses = 0;

let best =
    Number(
        localStorage.getItem("novaChaosBest")
    ) || 0;


// =================================
// EXPLOSION SETTINGS
// =================================

// ⭐ EXPERIMENT WITH THIS NUMBER
// 0.05 = 5%
// 0.10 = 10%
// 0.50 = 50%
// 1.00 = 100%

const explosionChance = 0.01;


// =================================
// NORMAL RANDOM EVENTS
// =================================

const chaosEvents = [

    {
        title: "The button has been pressed.",
        message:
            "Congratulations. You have made a decision."
    },

    {
        title: "Nova is concerned.",
        message:
            "You were specifically told not to do that. 💀"
    },

    {
        title: "CHAOS DETECTED.",
        message:
            "Absolutely nothing productive happened."
    },

    {
        title: "System questioning life choices.",
        message:
            "Please continue making questionable decisions."
    },

    {
        title: "Diva Protocol activated.",
        message:
            "💅 The button has officially entered its slay era."
    },

    {
        title: "You found absolutely nothing.",
        message:
            "Except another reason to press the button."
    },

    {
        title: "Nova has received your request.",
        message:
            "Nova has chosen to ignore it."
    },

    {
        title: "IMPORTANT SYSTEM UPDATE",
        message:
            "The system is now 3% more confused."
    },

    {
        title: "ERROR: Too much curiosity.",
        message:
            "Recommended action: press the button again."
    },

    {
        title: "Congratulations.",
        message:
            "You have successfully achieved absolutely nothing. 🎉"
    },

    {
        title: "The button remembers.",
        message:
            "Unfortunately, so does your browser."
    },

    {
        title: "CHAOS LEVEL RISING.",
        message:
            "This is probably where you should stop."
    },

    {
        title: "You again?",
        message:
            "I respect the dedication."
    },

    {
        title: "Nova prediction:",
        message:
            "You are going to press it again."
    },

    {
        title: "Critical discovery.",
        message:
            "The button is still a button."
    }

];


// =================================
// SPECIAL EVENTS
// =================================

const specialEvents = [

    {
        min: 5,
        title:
            "Okay, you really like this button.",
        message:
            "Five presses. There is no turning back now."
    },

    {
        min: 10,
        title:
            "TEN PRESSES.",
        message:
            "You have officially entered unnecessary territory."
    },

    {
        min: 20,
        title:
            "CHAOS MASTER.",
        message:
            "Twenty presses. Nova is starting to respect you."
    },

    {
        min: 30,
        title:
            "WHY ARE YOU STILL HERE?",
        message:
            "Honestly... keep going."
    },

    {
        min: 50,
        title:
            "THE BUTTON HAS BEEN DEFEATED.",
        message:
            "Just kidding. It will never be defeated."
    }

];


// =================================
// RANDOM EVENT
// =================================

function getRandomEvent() {

    const randomIndex =
        Math.floor(
            Math.random() *
            chaosEvents.length
        );

    return chaosEvents[randomIndex];

}


// =================================
// CHAOS LEVEL
// =================================

function calculateChaosLevel() {

    return Math.min(
        10,
        Math.floor(presses / 5) + 1
    );

}


// =================================
// SPECIAL EVENT
// =================================

function getSpecialEvent() {

    let selectedEvent = null;

    for (
        let i = 0;
        i < specialEvents.length;
        i++
    ) {

        if (
            presses >=
            specialEvents[i].min
        ) {

            selectedEvent =
                specialEvents[i];

        }

    }

    return selectedEvent;

}


// =================================
// UPDATE STATISTICS
// =================================

function updateStats() {

    pressCount.textContent =
        presses;

    chaosLevel.textContent =
        calculateChaosLevel();


    if (presses > best) {

        best = presses;

        localStorage.setItem(
            "novaChaosBest",
            best
        );

    }

    bestScore.textContent =
        best;

}


// =================================
// SHOW CHAOS EVENT
// =================================

function showEvent() {

    const special =
        getSpecialEvent();

    let event;


    if (
        special &&
        Math.random() < 0.35
    ) {

        event =
            special;

    } else {

        event =
            getRandomEvent();

    }


    chaosTitle.textContent =
        event.title;

    chaosMessage.textContent =
        event.message;


    chaosDisplay.classList.remove(
        "flash"
    );

    void chaosDisplay.offsetWidth;

    chaosDisplay.classList.add(
        "flash"
    );

}


// =================================
// MOVE BUTTON
// =================================

function moveButton() {

    const areaWidth =
        buttonArea.clientWidth;

    const areaHeight =
        buttonArea.clientHeight;

    const buttonWidth =
        chaosButton.offsetWidth;

    const buttonHeight =
        chaosButton.offsetHeight;


    const maxX =
        Math.max(
            10,
            areaWidth -
            buttonWidth -
            10
        );

    const maxY =
        Math.max(
            10,
            areaHeight -
            buttonHeight -
            10
        );


    const randomX =
        Math.random() *
        maxX;

    const randomY =
        Math.random() *
        maxY;


    chaosButton.style.position =
        "absolute";

    chaosButton.style.left =
        `${randomX}px`;

    chaosButton.style.top =
        `${randomY}px`;

}


// =================================
// CHAOS EFFECTS
// =================================

function triggerChaosEffects() {

    const level =
        calculateChaosLevel();


    // Screen shake

    if (
        level >= 2 &&
        Math.random() < 0.35
    ) {

        document.body.classList.remove(
            "screen-shake"
        );

        void document.body.offsetWidth;

        document.body.classList.add(
            "screen-shake"
        );

    }


    // Button movement

    if (
        level >= 3 &&
        Math.random() < 0.20
    ) {

        moveButton();

    }


    // Button flash

    if (
        level >= 6 &&
        Math.random() < 0.25
    ) {

        chaosButton.style.filter =
            "brightness(1.35)";

        setTimeout(
            function () {

                chaosButton.style.filter =
                    "";

            },
            250
        );

    }

}


// =================================
// EXPLOSION CHECK
// =================================

function shouldExplode() {

    return (
        Math.random() <
        explosionChance
    );

}


// =================================
// TRIGGER EXPLOSION
// =================================

function triggerExplosion() {

    const overlay =
        document.createElement("div");

    overlay.className =
        "explosion-overlay";


    const text =
        document.createElement("div");

    text.className =
        "explosion-text";

    text.textContent =
        "CHAOS OVERLOAD 💥";


    overlay.appendChild(text);

    document.body.appendChild(
        overlay
    );


    // Reset current chaos run

    presses = 0;


    chaosButton.style.position =
        "relative";

    chaosButton.style.left =
        "";

    chaosButton.style.top =
        "";


    chaosTitle.textContent =
        "THE BUTTON EXPLODED.";

    chaosMessage.textContent =
        "Chaos has been automatically reset. 💀";


    updateStats();


    // Remove explosion

    setTimeout(
        function () {

            overlay.remove();

            chaosTitle.textContent =
                "Everything is normal.";

            chaosMessage.textContent =
                "This button definitely should not be pressed.";

        },
        1200
    );

}


// =================================
// MAIN BUTTON CLICK
// =================================

chaosButton.addEventListener(
    "click",
    function () {

        // Check explosion BEFORE normal chaos

        if (shouldExplode()) {

            triggerExplosion();

            return;

        }


        presses++;

        updateStats();

        showEvent();

        triggerChaosEffects();


        // Button press animation

        chaosButton.classList.remove(
            "pressed"
        );

        void chaosButton.offsetWidth;

        chaosButton.classList.add(
            "pressed"
        );


        setTimeout(
            function () {

                chaosButton.classList.remove(
                    "pressed"
                );

            },
            150
        );

    }
);


// =================================
// RESET BUTTON
// =================================

resetButton.addEventListener(
    "click",
    function () {

        presses = 0;


        chaosButton.style.position =
            "relative";

        chaosButton.style.left =
            "";

        chaosButton.style.top =
            "";


        chaosTitle.textContent =
            "Everything is normal.";

        chaosMessage.textContent =
            "This button definitely should not be pressed.";


        updateStats();

    }
);


// =================================
// LOAD SAVED BEST SCORE
// =================================

updateStats();
