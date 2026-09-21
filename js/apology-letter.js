/* =========================================
   PROJECT NOVA - APOLOGY LETTER
   ========================================= */

/*
    Small entrance animation helper.

    The page itself does not need complicated
    JavaScript. The letter is intentionally simple.
*/

document.addEventListener("DOMContentLoaded", () => {
    const letter = document.querySelector(".letter-card");

    if (!letter) {
        return;
    }

    /*
        Mark the page as loaded so CSS can handle
        the entrance animation cleanly.
    */
    letter.classList.add("loaded");
});