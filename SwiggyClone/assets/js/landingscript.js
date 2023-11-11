const redirectToLogin = () => {
  window.location.href = "home.html";
};

const redirectToSignup = () => {
  window.location.href = "home.html";
};
//Changing headings
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

//Location sharing
const submitForm = (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the value from the input field
  const deliveryLocation = document.getElementById("deliveryLocation").value;
  const encodedLocation = encodeURIComponent(deliveryLocation);
  window.location.href = "home.html?deliveryLocation=" + encodedLocation;
};

//Footer section
//comapny section
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
for (let i = 0; i < companyListElements.length; i++) {
  const company = document.createElement("li");
  const companyListButton = document.createElement("button");

  companyListButton.textContent = companyListElements[i];
  companyListButton.classList.add("cList");
  company.appendChild(companyListButton);
  companyList.appendChild(company);
}

//contact section
var contactList = document.getElementById("contactList");
var contactListElements = ["Help & Support", "Partner with us", "Ride with us"];

for (let i = 0; i < contactListElements.length; i++) {
  const contact = document.createElement("li");
  const contactListButton = document.createElement("button");

  contactListButton.textContent = contactListElements[i];
  contactListButton.classList.add("cList");
  contact.appendChild(contactListButton);
  contactList.appendChild(contact);
}
//legal section
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

for (let i = 0; i < legalListElements.length; i++) {
  const legal = document.createElement("li");
  const legalListButton = document.createElement("button");

  legalListButton.textContent = legalListElements[i];
  legalListButton.classList.add("cList");
  legal.appendChild(legalListButton);
  legalList.appendChild(legal);
}

//We Deliver To section
const numberOfPlaces = 100;
fetch(`https://randomuser.me/api/?results=${numberOfPlaces}`)
  .then((response) => response.json())
  .then((data) => {
    const placeNames = data.results.map((result) => result.name.first);
    console.log(placeNames);
    let y = 0;
    for (let i = 1; i <= 4; i++) {
      var weDeliverto = document.getElementById(`wedeliverList${i}`);
      for (y; y < i * 25; y++) {
        const wedeliverElement = document.createElement("li");
        const wedeliverListButton = document.createElement("button");

        wedeliverListButton.textContent = placeNames[y];
        wedeliverListButton.classList.add("cList");
        wedeliverElement.appendChild(wedeliverListButton);
        weDeliverto.appendChild(wedeliverElement);
      }
    }
  })
  .catch((error) => console.error("Error:", error));

//Best places section

fetch(`https://randomuser.me/api/?results=${numberOfPlaces}`)
  .then((response) => response.json())
  .then((data) => {
    const placeNames = data.results.map((result) => result.name.first);
    console.log(placeNames);
    let y = 0;
    for (let i = 1; i <= 4; i++) {
      var bestPlaces = document.getElementById(`bestPlacesList${i}`);
      for (y; y < i * 25; y++) {
        const bestPlacesElement = document.createElement("li");
        const bestPlacesListButton = document.createElement("button");

        bestPlacesListButton.textContent = `Best Restaurants In ${placeNames[y]}`;
        bestPlacesListButton.classList.add("cList");
        bestPlacesElement.appendChild(bestPlacesListButton);
        bestPlaces.appendChild(bestPlacesElement);
      }
    }
  })
  .catch((error) => console.error("Error:", error));

//BOTTOM SECTION
//Bottom swiggy logo
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
