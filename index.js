let homeCount = 0;
let homeScore = document.getElementById('home-score');

function homePlusOne() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function homePlusTwo() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function homePlusThree() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}


let guestCount = 0;
let guestScore = document.getElementById('guest-score');

function guestPlusOne() {
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function guestPlusTwo() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function guestPlusThree() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}

function homeSubOne() {
    homeCount -= 1;
    homeScore.textContent = homeCount;
}

function homeSubTwo() {
    homeCount -= 2;
    homeScore.textContent = homeCount;
}

function homeSubThree() {
    homeCount -= 3;
    homeScore.textContent = homeCount;
}

function guestSubOne() {
    guestCount -= 1;
    guestScore.textContent = guestCount;
}

function guestSubTwo() {
    guestCount -= 2;
    guestScore.textContent = guestCount;
}

function guestSubThree() {
    guestCount -= 3;
    guestScore.textContent = guestCount;
}

function resetGame() {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = guestCount;
    guestScore.textContent = guestCount;
}