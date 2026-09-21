/* =========================================
   PROJECT NOVA - TIME CAPSULE
   ========================================= */

const memories = [
    {
        chapter: "CHAPTER 01",
        icon: "🕷️",
        title: "The Random Message",
        content: [
            "I randomly messaged a girl because I wanted to make a new friend.",
            "We started talking, and I slowly learned more about her. Her favourite games were Genshin Impact and Mobile Legends: Bang Bang.",
            "I thought she was really cool."
        ]
    },

    {
        chapter: "CHAPTER 02",
        icon: "🤝",
        title: "We Became Good Friends",
        content: [
            "We started talking more and became good friends.",
            "Then I told her that, because of some issues, I wouldn't be able to talk to her for 7–8 days.",
            "Except... I came back after only 3–4 days. 💀",
            "She told me she'd thought about me, and that's when I realised she genuinely cared about people."
        ]
    },

    {
        chapter: "CHAPTER 03",
        icon: "💙",
        title: "The Friend I Trusted",
        content: [
            "I told her about the online girl who supposedly had a crush on me, only to eventually find out that it had been a prank.",
            "After that, she became the only friend I still trusted.",
            "I considered us genuinely good friends, and somewhere along the way I developed a crush on her because I thought she was cool and really supportive.",
            "I liked almost everything about her... except the fact that she swore at me way too much. 💀"
        ]
    },

    {
        chapter: "CHAPTER 04",
        icon: "👑",
        title: "Besties... Then Something Unexpected",
        content: [
            "I started considering her my bestie.",
            "I wasn't even sure whether she considered me hers.",
            "Then she told me that she liked me.",
            "I was shocked at first, but eventually I accepted her proposal. ❤️"
        ]
    },

    {
        chapter: "CHAPTER 05",
        icon: "❤️",
        title: "What Changed?",
        content: [
            "I don't really know exactly what changed between us after that.",
            "We enjoyed each other's company a lot, and I was genuinely happy with her.",
            "I had also told her that if I ever suddenly disappeared without explaining, there would be a serious reason behind it, like a family issue or something serious happening to me.",
            "That became one of those little things between us."
        ]
    },

    {
        chapter: "CHAPTER 06",
        icon: "🌱",
        title: "Besties Again",
        content: [
            "Then she told me that she wasn't mentally ready to handle a relationship.",
            "I asked her to promise that she wouldn't just leave my life.",
            "And eventually, we became besties again.",
            "Except this time, I consider her my best friend... and hopefully, she considers me hers too. ❤️"
        ]
    },

    {
        chapter: "CHAPTER 07",
        icon: "📦",
        title: "Right Now",
        content: [
            "Life keeps moving.",
            "Things change. Days turn into more days, and we're still here, still living, still making memories.",
            "Through everything, her presence has meant more to me than I probably ever managed to say."
        ]
    }
];

const introScreen = document.getElementById("intro-screen");
const timelineSection = document.getElementById("timeline-section");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const backToSurprisesButton = document.getElementById("back-to-surprises");

const memoryCard = document.getElementById("memory-card");
const timelineEnding = document.getElementById("timeline-ending");

const memoryNumber = document.getElementById("memory-number");
const memoryIcon = document.getElementById("memory-icon");
const memoryTitle = document.getElementById("memory-title");
const memoryContent = document.getElementById("memory-content");

const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

let currentMemory = 0;

/* Start the Time Capsule */

function startTimeCapsule() {
    introScreen.classList.add("hidden");
    timelineSection.classList.remove("hidden");

    showMemory(0);
}

/* Display a chapter */

function showMemory(index) {
    const memory = memories[index];

    if (!memory) {
        return;
    }

    currentMemory = index;

    memoryCard.classList.remove("chapter-change");

    void memoryCard.offsetWidth;

    memoryCard.classList.add("chapter-change");

    memoryNumber.textContent = memory.chapter;
    memoryIcon.textContent = memory.icon;
    memoryTitle.textContent = memory.title;

    memoryContent.innerHTML = "";

    memory.content.forEach((paragraph) => {
        const paragraphElement = document.createElement("p");

        paragraphElement.textContent = paragraph;

        memoryContent.appendChild(paragraphElement);
    });

    const progress = ((index + 1) / memories.length) * 100;

    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${index + 1} / ${memories.length}`;

    if (index === memories.length - 1) {
        nextButton.textContent = "Finish the Time Capsule →";
    } else {
        nextButton.textContent = "Continue →";
    }
}

/* Continue to the next chapter */

function nextMemory() {
    if (currentMemory < memories.length - 1) {
        showMemory(currentMemory + 1);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return;
    }

    finishTimeCapsule();
}

/* Finish */

function finishTimeCapsule() {
    memoryCard.classList.add("hidden");
    timelineEnding.classList.remove("hidden");

    progressFill.style.width = "100%";
    progressText.textContent = `${memories.length} / ${memories.length}`;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* Return to Surprise Room */

function returnToSurprises() {
    window.location.href = "surprises.html";
}

/* Events */

startButton.addEventListener("click", startTimeCapsule);
nextButton.addEventListener("click", nextMemory);
backToSurprisesButton.addEventListener("click", returnToSurprises);

/* Keyboard support */

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !timelineSection.classList.contains("hidden")) {
        nextMemory();
    }
});