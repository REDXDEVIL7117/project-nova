// =================================
// NOVA ARCADE - COMPLIMENT GENERATOR
// =================================

const moodCards =
    document.querySelectorAll(".mood-card");

const generateButton =
    document.getElementById("generate-button");

const anotherButton =
    document.getElementById("another-button");

const selectedMoodText =
    document.getElementById("selected-mood-text");

const complimentText =
    document.getElementById("compliment-text");

const complimentIcon =
    document.getElementById("compliment-icon");

const discoveryCount =
    document.getElementById("discovery-count");

const discoveryProgress =
    document.getElementById("discovery-progress");


// =================================
// SETTINGS
// =================================

const totalCompliments = 95;

let selectedMood = null;

let lastCompliment = null;


// =================================
// SAVED DISCOVERIES
// =================================

let discoveredCompliments =
    JSON.parse(
        localStorage.getItem(
            "novaComplimentsDiscovered"
        )
    ) || [];


// =================================
// COMPLIMENT DATABASE
// =================================

const compliments = {

    happy: [

        "Your happiness has a way of making everything around you feel a little brighter. ☀️",

        "You have a smile that makes ordinary moments feel special.",

        "You somehow make being happy look effortlessly cool.",

        "Your energy today is genuinely contagious. 💙",

        "You deserve every bit of the happiness you're feeling right now.",

        "There is something really lovely about seeing you enjoy the little things.",

        "You make good moments feel even better just by being yourself.",

        "Your laugh could probably improve Nova's entire database. 😂",

        "You have a talent for turning tiny moments into good memories.",

        "Your happy energy is seriously difficult not to appreciate.",

        "You bring a really nice kind of warmth wherever you go.",

        "You have every right to enjoy this good mood to the fullest.",

        "You make happiness look wonderfully uncomplicated.",

        "Today feels a little brighter because you're in a good mood. 💙",

        "Keep that smile around. It suits you."

    ],


    sad: [

        "You don't have to be okay every second. You're still wonderful on difficult days. 💙",

        "Even on your worst days, there are still so many good things about you.",

        "You deserve kindness, especially from yourself.",

        "A bad day doesn't get to decide your worth.",

        "You are allowed to slow down and simply exist for a while.",

        "You don't have to carry everything perfectly all the time.",

        "There is nothing wrong with needing a little extra comfort today.",

        "You are still you underneath the difficult mood, and that's pretty special.",

        "Tomorrow doesn't have to be perfect. It just has to arrive.",

        "You deserve moments that feel soft, peaceful, and calm.",

        "Whatever made today difficult doesn't erase everything good about you.",

        "You've made it through difficult moments before, one small step at a time.",

        "Having a difficult day doesn't make you a difficult person.",

        "You deserve to be reminded that you matter, even when you're not feeling your best.",

        "For today, you don't need to solve everything. Just be gentle with yourself. ☁️"

    ],


    tired: [

        "You've done enough for today. Your brain is officially requesting cozy mode. 😴",

        "You don't have to be productive every minute to be impressive.",

        "Rest is not wasted time. Even Nova's servers need maintenance. 💙",

        "You deserve a ridiculously comfortable break.",

        "Your tired version is still completely wonderful.",

        "You have permission to slow the entire universe down for a bit.",

        "Sometimes the strongest move is simply getting some rest.",

        "You don't need to earn the right to relax.",

        "Your battery being low doesn't mean you're running out of potential.",

        "You've already made it through enough today. Take the softer route now.",

        "Even superheroes occasionally need a charging screen. ⚡",

        "You can put the impossible-to-do list down for a little while.",

        "Being tired doesn't make you lazy. It means you're human.",

        "Go easy on yourself today. You've got plenty of time to shine later.",

        "Your only assignment right now might be: get comfy. ☁️"

    ],


    annoyed: [

        "Honestly, you're allowed to be annoyed. You are still absolutely iconic. 😤",

        "Whatever irritated you today clearly has questionable taste.",

        "You deserve at least one thing today that doesn't annoy you.",

        "Your patience deserves a medal for surviving some of the nonsense around you.",

        "You can be annoyed without letting the whole day win.",

        "Some problems really do deserve a dramatic eye roll.",

        "Nova officially supports your right to be mildly done with everything.",

        "You are far more impressive than whatever tiny inconvenience started this.",

        "Take a breath. The annoying thing does not get the final word.",

        "You have survived worse than one particularly irritating moment.",

        "Your ability to keep going despite being annoyed is genuinely impressive.",

        "Not everything deserves your energy, especially the ridiculous stuff.",

        "You can dislike something without letting it ruin your entire mood.",

        "Your day may be annoying, but you are still pretty great.",

        "Okay, diva. Deep breath. The world can wait five minutes. 💅"

    ],


    overwhelmed: [

        "You don't have to figure out everything at once. One thing at a time is enough. 💙",

        "A crowded mind doesn't mean you're incapable. It means you have a lot going on.",

        "You are allowed to pause before deciding what comes next.",

        "Not everything needs your attention at the exact same moment.",

        "Take the giant pile of thoughts and turn it into one tiny next step.",

        "You don't need to have the entire plan figured out today.",

        "Being overwhelmed doesn't make you weak. It means things feel like a lot right now.",

        "You are more capable than your current stress is making you feel.",

        "Some days are about progress. Some are simply about getting through them.",

        "Give yourself permission to breathe before tackling the next thing.",

        "You can handle today without solving your entire future.",

        "The world can be loud. You don't have to match its volume.",

        "One small win still counts as a win.",

        "You don't have to carry every responsibility perfectly.",

        "For the next few minutes, just breathe. Everything else can wait. ☁️"

    ],


    slaying: [

        "Respectfully, the level of slay happening here is becoming difficult to document. 💅",

        "You walked into this mood and immediately raised the standards.",

        "Nova has reviewed the evidence. Diva status confirmed.",

        "Your confidence has entered the room before you have.",

        "You are serving an unreasonable amount of main-character energy.",

        "Honestly, someone should probably warn the mirror before you look into it.",

        "Your vibe today has absolutely no business being this powerful.",

        "You don't enter an era. You simply declare it.",

        "The crown is imaginary, but somehow it still looks correct on you. 👑",

        "You have the kind of energy that makes ordinary moments feel iconic.",

        "Nova would like to formally report excessive fabulousness.",

        "You are not overdressed for the moment. The moment is underdressed for you.",

        "Your confidence could probably power this entire website.",

        "The 💅 emoji was basically invented for situations like this.",

        "You have successfully turned existing into an aesthetic.",

        "If slaying were a competitive sport, the scoreboard would need fixing.",

        "You are giving premium edition with absolutely no subscription required.",

        "Your current vibe has been classified as dangerously fabulous.",

        "Nova checked the system twice. Yep. Still serving.",

        "Some people bring energy into a room. You apparently bring the whole atmosphere. 💅"

    ]

};


// =================================
// MOOD INFORMATION
// =================================

const moodInfo = {

    happy: {
        name: "Happy",
        icon: "☀️"
    },

    sad: {
        name: "Sad",
        icon: "🌧️"
    },

    tired: {
        name: "Tired",
        icon: "😴"
    },

    annoyed: {
        name: "Annoyed",
        icon: "😤"
    },

    overwhelmed: {
        name: "Overwhelmed",
        icon: "😵"
    },

    slaying: {
        name: "Slaying",
        icon: "💅"
    }

};


// =================================
// SAVE DISCOVERIES
// =================================

function saveDiscoveries() {

    localStorage.setItem(
        "novaComplimentsDiscovered",
        JSON.stringify(
            discoveredCompliments
        )
    );

}


// =================================
// UPDATE DISCOVERY COUNTER
// =================================

function updateDiscoveryDisplay() {

    const discovered =
        discoveredCompliments.length;

    discoveryCount.textContent =
        `${discovered} / ${totalCompliments}`;

    const percentage =
        (discovered / totalCompliments) * 100;

    discoveryProgress.style.width =
        `${percentage}%`;

}


// =================================
// GET RANDOM COMPLIMENT
// =================================

function getRandomCompliment(mood) {

    const moodCompliments =
        compliments[mood];

    if (!moodCompliments) {
        return null;
    }


    let availableCompliments =
        moodCompliments.filter(
            function (compliment) {

                return (
                    compliment !==
                    lastCompliment
                );

            }
        );


    if (
        availableCompliments.length === 0
    ) {

        availableCompliments =
            moodCompliments;

    }


    const randomIndex =
        Math.floor(
            Math.random() *
            availableCompliments.length
        );


    return availableCompliments[
        randomIndex
    ];

}


// =================================
// MOOD SELECTION
// =================================

moodCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                moodCards.forEach(
                    function (otherCard) {

                        otherCard.classList.remove(
                            "selected"
                        );

                    }
                );


                card.classList.add(
                    "selected"
                );


                selectedMood =
                    card.dataset.mood;


                const mood =
                    moodInfo[selectedMood];


                selectedMoodText.textContent =
                    `${mood.icon} ${mood.name} selected`;


                generateButton.disabled =
                    false;

            }
        );

    }
);


// =================================
// GENERATE COMPLIMENT
// =================================

function generateCompliment() {

    if (!selectedMood) {
        return;
    }


    const compliment =
        getRandomCompliment(
            selectedMood
        );


    if (!compliment) {
        return;
    }


    lastCompliment =
        compliment;


    complimentText.textContent =
        compliment;


    complimentIcon.textContent =
        moodInfo[selectedMood].icon;


    if (
        !discoveredCompliments.includes(
            compliment
        )
    ) {

        discoveredCompliments.push(
            compliment
        );

        saveDiscoveries();

    }


    updateDiscoveryDisplay();


    anotherButton.hidden =
        false;


    complimentText.classList.remove(
        "compliment-show"
    );

    complimentIcon.classList.remove(
        "compliment-show"
    );


    void complimentText.offsetWidth;


    complimentText.classList.add(
        "compliment-show"
    );

    complimentIcon.classList.add(
        "compliment-show"
    );

}


// =================================
// BUTTONS
// =================================

generateButton.addEventListener(
    "click",
    function () {

        generateCompliment();

    }
);


anotherButton.addEventListener(
    "click",
    function () {

        generateCompliment();

    }
);


// =================================
// INITIALIZE
// =================================

updateDiscoveryDisplay();