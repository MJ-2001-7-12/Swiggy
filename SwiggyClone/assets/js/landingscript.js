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
  // Changed the condition in the loop
  const company = document.createElement("li");
  const companyListButton = document.createElement("button");

  companyListButton.textContent = companyListElements[i];
  companyListButton.classList.add("cList"); // Changed to classList.add
  company.appendChild(companyListButton);
  companyList.appendChild(company);
}

var contactList = document.getElementById("contactList");
var contactListElements = ["Help & Support", "Partner with us", "Ride with us"];

for (let i = 0; i < contactListElements.length; i++) {
  // Changed the condition in the loop
  const contact = document.createElement("li");
  const contactListButton = document.createElement("button");

  contactListButton.textContent = contactListElements[i];
  contactListButton.classList.add("cList"); // Changed to classList.add
  contact.appendChild(contactListButton);
  contactList.appendChild(contact);
}

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
  // Changed the condition in the loop
  const legal = document.createElement("li");
  const legalListButton = document.createElement("button");

  legalListButton.textContent = legalListElements[i];
  legalListButton.classList.add("cList"); // Changed to classList.add
  legal.appendChild(legalListButton);
  legalList.appendChild(legal);
}
