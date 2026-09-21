/* =========================================
   PROJECT NOVA - SURPRISE ROOM
   ========================================= */

/* ---------- Surprise data ---------- */

const surprises = [
    {
        icon: "💙",
        title: "Nova's Official Report",
        message:
            "After extensive investigation, Nova has reached a highly scientific conclusion: you are pretty damn awesome."
    },

    {
        icon: "🍬",
        title: "Cotton Candy Detected",
        message:
            "Nova's sensors detected dangerously sweet energy in this area. Further investigation is unnecessary. The evidence is overwhelming. 🍬"
    },

    {
        icon: "👑",
        title: "Royal Notification",
        message:
            "Attention: the person currently opening this box has been temporarily promoted to VIP status. Please behave accordingly."
    },

    {
        icon: "😂",
        title: "Important Announcement",
        message:
            "You have officially wasted several seconds opening a mystery box on a birthday website. Nova considers this an excellent use of time."
    },

    {
        icon: "✨",
        title: "Tiny Reminder",
        message:
            "You are allowed to have fun, be weird, laugh at stupid things, and make random memories. In fact, Nova strongly recommends it."
    }
];


/* ---------- Elements ---------- */

const surpriseBoxes = document.querySelectorAll(".surprise-box");

const discoveredCount = document.getElementById("discovered-count");
const progressFill = document.getElementById("progress-fill");

const resultPanel = document.getElementById("result-panel");
const resultIcon = document.getElementById("result-icon");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");

const anotherButton = document.getElementById("another-button");
const randomButton = document.getElementById("random-button");

const finalSection = document.getElementById("final-section");
const finalButton = document.getElementById("final-button");

const revealOverlay = document.getElementById("reveal-overlay");
const overlayIcon = document.getElementById("overlay-icon");
const overlayTitle = document.getElementById("overlay-title");
const overlayMessage = document.getElementById("overlay-message");

const closeReveal = document.getElementById("close-reveal");
const revealCloseButton = document.getElementById("reveal-close-button");


/* ---------- State ---------- */

let discovered = JSON.parse(
    localStorage.getItem("novaSurprisesDiscovered")
) || [];

/*
    Final reveal has three possible states:

    false
        Normal surprise mode.

    true
        First stage of the final reveal.
        "You Found Everything!"

    "easter-eggs"
        Second stage of the final reveal.
        "Wait... 👀"
*/
let finalRevealStage = false;


/* ---------- Progress ---------- */

function updateProgress() {
    const count = discovered.length;

    discoveredCount.textContent = count;

    const percentage = (count / surprises.length) * 100;

    progressFill.style.width = `${percentage}%`;

    if (count >= surprises.length) {
        unlockFinalSurprise();
    }
}


/* ---------- Reveal surprise ---------- */

function revealSurprise(index) {
    const surprise = surprises[index];

    if (!surprise) {
        return;
    }

    /* Remember discovered surprises */
    if (!discovered.includes(index)) {
        discovered.push(index);

        localStorage.setItem(
            "novaSurprisesDiscovered",
            JSON.stringify(discovered)
        );
    }

    updateProgress();

    /* Update result panel */
    resultIcon.textContent = surprise.icon;
    resultTitle.textContent = surprise.title;
    resultMessage.textContent = surprise.message;

    resultPanel.classList.remove("reveal");

    /*
        Force a browser reflow so the animation
        can play again when another surprise opens.
    */
    void resultPanel.offsetWidth;

    resultPanel.classList.add("reveal");

    /* Mark the box as opened */
    surpriseBoxes[index].classList.add("opened");

    /*
        This is a normal surprise,
        so reset the special final flow.
    */
    finalRevealStage = false;

    /* Restore normal button text */
    revealCloseButton.textContent = "Nice 👀";

    /* Show the bigger reveal */
    openReveal(surprise);
}


/* ---------- Overlay ---------- */

function openReveal(surprise) {
    overlayIcon.textContent = surprise.icon;
    overlayTitle.textContent = surprise.title;
    overlayMessage.textContent = surprise.message;

    revealOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}


function closeOverlay() {
    revealOverlay.classList.remove("active");
    document.body.style.overflow = "";

    /* Reset final reveal state */
    finalRevealStage = false;

    /* Restore normal button */
    revealCloseButton.textContent = "Nice 👀";
}


/* ---------- Random surprise ---------- */

function openRandomSurprise() {
    if (surprises.length === 0) {
        return;
    }

    let randomIndex;

    /*
        Try to pick an undiscovered surprise first.
        This makes the random button useful for
        unlocking the whole room instead of repeatedly
        showing the same surprise.
    */
    const undiscovered = surprises
        .map((_, index) => index)
        .filter((index) => !discovered.includes(index));

    if (undiscovered.length > 0) {
        randomIndex =
            undiscovered[
                Math.floor(Math.random() * undiscovered.length)
            ];
    } else {
        randomIndex = Math.floor(
            Math.random() * surprises.length
        );
    }

    revealSurprise(randomIndex);
}


/* ---------- Another button ---------- */

function openAnother() {
    openRandomSurprise();
}


/* ---------- Final surprise ---------- */

function unlockFinalSurprise() {
    finalSection.classList.add("unlocked");

    finalButton.disabled = false;
    finalButton.textContent = "Open the secret ✨";
}


function openFinalSurprise() {
    if (discovered.length < surprises.length) {
        return;
    }

    /*
        Start the special two-stage final reveal.

        Stage 1:
        You Found Everything!

        Stage 2:
        Wait... 👀
    */
    finalRevealStage = true;

    overlayIcon.textContent = "🎂";

    overlayTitle.textContent = "You Found Everything!";

    overlayMessage.textContent =
        "Five surprises discovered. Nova officially declares you a certified mystery-box professional. 🎉";

    revealCloseButton.textContent = "Nice 👀";

    revealOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}


/* ---------- Final reveal next step ---------- */

function continueFinalReveal() {

    /*
        FIRST CLICK

        Move from:

        You Found Everything!

        to:

        Wait... 👀
    */
    if (finalRevealStage === true) {
        overlayIcon.textContent = "🥚";

        overlayTitle.textContent = "Wait... 👀";

        overlayMessage.textContent =
            "You found all five surprises, but I have a feeling you probably missed TWO little Easter eggs. 🥚✨ One of them is waiting for you...";

        revealCloseButton.textContent =
            "Enter the Time Capsule →";

        finalRevealStage = "easter-eggs";

        return;
    }


    /*
        SECOND CLICK

        Move from:

        Wait... 👀

        directly into:

        Time Capsule
    */
    if (finalRevealStage === "easter-eggs") {
        window.location.href = "time-capsule.html";
    }
}


/* ---------- Box clicks ---------- */

surpriseBoxes.forEach((box) => {
    box.addEventListener("click", () => {
        const index = Number(box.dataset.surprise);

        revealSurprise(index);
    });
});


/* ---------- Buttons ---------- */

anotherButton.addEventListener("click", openAnother);

randomButton.addEventListener("click", openRandomSurprise);

finalButton.addEventListener("click", openFinalSurprise);


/*
    The same button normally closes a surprise.

    During the final-surprise flow, however,
    it becomes the next-step button.
*/
revealCloseButton.addEventListener("click", () => {

    if (finalRevealStage) {
        continueFinalReveal();
        return;
    }

    closeOverlay();
});


/* ---------- Close button ---------- */

closeReveal.addEventListener("click", closeOverlay);


/* ---------- Close overlay with Escape ---------- */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeOverlay();
    }
});


/* ---------- Close overlay by clicking outside ---------- */

revealOverlay.addEventListener("click", (event) => {
    if (event.target === revealOverlay) {
        closeOverlay();
    }
});


/* ---------- Initial state ---------- */

surpriseBoxes.forEach((box, index) => {
    if (discovered.includes(index)) {
        box.classList.add("opened");
    }
});


/* ---------- Start ---------- */

updateProgress();