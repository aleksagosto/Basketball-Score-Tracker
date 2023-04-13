let scoreDisplayHome = document.getElementById("score-display-home")
let scoreDisplayGuest = document.getElementById("score-display-guest")
let homeTitle = document.getElementById("home-title")
let guestTitle = document.getElementById("guest-title")
scoreHome = 0
scoreGuest = 0

function plus1Home() {
    scoreHome += 1;
    scoreDisplayHome.textContent = scoreHome;
}

function plus1Guest() {
    scoreGuest += 1;
    scoreDisplayGuest.textContent = scoreGuest;
}

function plus2Home() {
    scoreHome += 2;
    scoreDisplayHome.textContent = scoreHome;
}

function plus2Guest() {
    scoreGuest += 2;
    scoreDisplayGuest.textContent = scoreGuest;
}

function plus3Home() {
    scoreHome += 3;
    scoreDisplayHome.textContent = scoreHome;
}

function plus3Guest() {
    scoreGuest += 3;
    scoreDisplayGuest.textContent = scoreGuest;
}

function reset() {
    scoreHome = 0;
    scoreGuest = 0;
    scoreDisplayGuest.textContent = 0;
    scoreDisplayHome.textContent = 0;
}
