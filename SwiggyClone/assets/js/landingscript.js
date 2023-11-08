function redirectToLogin() {
  window.location.href = "target_page.html"; //Enter login page.html
}
function redirectToSignup() {
  window.location.href = "target_page.html"; //Enter signup page.html
}

var changingHeading = document.getElementById("changingHeading"); //The array elements are headings that are displayed
var texts = [
  "Late night at office?",
  "Hungry?",
  "Unexpected Guests?",
  "Cooking gone wrong?",
  "Movie marathon?",
  "Game night?",
];
var currentIndex = 0;

function changeHeading() {
  changingHeading.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
} // Set an interval to change the heading every 2 seconds (2000 milliseconds)
setInterval(changeHeading, 2000);
