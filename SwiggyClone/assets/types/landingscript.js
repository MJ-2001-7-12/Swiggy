// Elements
var SignUpContainer = document.getElementById("SignUpContainer");
var modal = document.getElementById("modal");
// Functions
var redirectToSignup = function () {
    SignUpContainer.classList.remove("hidden");
    modal.style.right = "0";
};
// Changing headings
var changingHeading = document.getElementById("changingHeading");
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
}
// Set an interval to change the heading every 2 seconds (2000 milliseconds)
setInterval(changeHeading, 2000);
// Location sharing
var submitForm = function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Get the value from the input field
    var deliveryLocationInput = document.getElementById("deliveryLocation");
    var deliveryLocation = deliveryLocationInput.value;
    // Set cookie and redirect
    document.cookie = "deliveryLocation=".concat(deliveryLocation, ";");
    window.location.href = "home.html";
};
// Footer section
// Company section
var companyList = document.getElementById("companyList");
var companyListElements = [
    "About us",
    "Team",
    "Careers",
    "Swiggy Blog",
    "Bug Bounty",
    "Swiggy One",
    "Swiggy Corporate",
    "Swiggy Instamart",
    "Swiggy Genie",
    "Swiggy HDFC Bank Credit Card",
];
for (var i = 0; i < companyListElements.length; i++) {
    var company = document.createElement("li");
    var companyListButton = document.createElement("button");
    companyListButton.textContent = companyListElements[i];
    companyListButton.classList.add("cList");
    company.appendChild(companyListButton);
    companyList.appendChild(company);
}
// Contact section
var contactList = document.getElementById("contactList");
var contactListElements = ["Help & Support", "Partner with us", "Ride with us"];
for (var i = 0; i < contactListElements.length; i++) {
    var contact = document.createElement("li");
    var contactListButton = document.createElement("button");
    contactListButton.textContent = contactListElements[i];
    contactListButton.classList.add("cList");
    contact.appendChild(contactListButton);
    contactList.appendChild(contact);
}
// Legal section
var legalList = document.getElementById("legalList");
var legalListElements = [
    "Terms & Conditions",
    "Refund & Cancellation",
    "Privacy Policy",
    "Cookie Policy",
    "Offer Terms",
    "Phishing & Fraud",
    "Corporate - Swiggy Money Codes Terms and Conditions",
    "Corporate - Swiggy Discount Voucher Terms and Conditions",
];
for (var i = 0; i < legalListElements.length; i++) {
    var legal = document.createElement("li");
    var legalListButton = document.createElement("button");
    legalListButton.textContent = legalListElements[i];
    legalListButton.classList.add("cList");
    legal.appendChild(legalListButton);
    legalList.appendChild(legal);
}
// We Deliver To section
var numberOfPlaces = 100;
fetch("https://randomuser.me/api/?results=".concat(numberOfPlaces))
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var placeNames = data.results.map(function (result) { return result.name.first; });
    console.log(placeNames);
    var y = 0;
    for (var i = 1; i <= 4; i++) {
        var weDeliverTo = document.getElementById("wedeliverList".concat(i));
        for (y; y < i * 25; y++) {
            var wedeliverElement = document.createElement("li");
            var wedeliverListButton = document.createElement("button");
            wedeliverListButton.textContent = placeNames[y];
            wedeliverListButton.classList.add("cList");
            wedeliverElement.appendChild(wedeliverListButton);
            weDeliverTo.appendChild(wedeliverElement);
        }
    }
    // Best Places section
    y = 0;
    for (var i = 1; i <= 4; i++) {
        var bestPlaces = document.getElementById("bestPlacesList".concat(i));
        for (y; y < i * 25; y++) {
            var bestPlacesElement = document.createElement("li");
            var bestPlacesListButton = document.createElement("button");
            bestPlacesListButton.textContent = "Best Restaurants In ".concat(placeNames[y]);
            bestPlacesListButton.classList.add("cList");
            bestPlacesElement.appendChild(bestPlacesListButton);
            bestPlaces.appendChild(bestPlacesElement);
        }
    }
})
    .catch(function (error) { return console.error("Error:", error); });
// BOTTOM SECTION
// Bottom swiggy logo
var scrollToTop = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
