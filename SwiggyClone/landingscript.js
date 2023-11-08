var changingHeading = document.getElementById('changingHeading');
var texts = ['Late night at office?','Hungry?', 'Unexpected Guests?', 'Cooking gone wromg?','Movie marathon?'];
var currentIndex = 0;

function changeHeading() {
    changingHeading.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

// Set an interval to change the heading every 2 seconds (2000 milliseconds)
setInterval(changeHeading, 2000);
