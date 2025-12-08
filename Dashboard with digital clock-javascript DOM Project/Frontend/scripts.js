const clock = document.getElementById('clock');

function updateClock() {

    const now = new Date;
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');

    clock.textContent = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

const qoutes = document.getElementById('qoutes');

const qouteManager = [
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you are working on something exciting, it will keep you motivated. - Unknown",
    "Success is not in what you have, but who you are. - Bo Bennett"
];

function fetchQoute() {
    const randomIndex = Math.floor(Math.random() * qouteManager.length);
    qoutes.textContent = qouteManager[randomIndex];
}

setInterval(fetchQoute, 10000);
fetchQoute();
