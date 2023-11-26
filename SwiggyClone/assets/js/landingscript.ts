// Elements
const SignUpContainer: HTMLElement | null = document.getElementById("SignUpContainer");
const modal: HTMLElement | null = document.getElementById("modal");

// Functions
const redirectToSignup = (): void => {
  if (SignUpContainer) {
    SignUpContainer.classList.remove("hidden");
  }
  if (modal) {
    modal.style.right = "0";
  }
};

// Changing headings
const changingHeading: HTMLElement | null = document.getElementById("changingHeading");
const texts: string[] = [
  "Late night at office?",
  "Hungry?",
  "Unexpected Guests?",
  "Cooking gone wrong?",
  "Movie marathon?",
  "Game night?",
];
let currentIndex: number = 0;

function changeHeading(): void {
  if (changingHeading) {
    changingHeading.textContent = texts[currentIndex];
  }
  currentIndex = (currentIndex + 1) % texts.length;
}

// Set an interval to change the heading every 2 seconds (2000 milliseconds)
setInterval(changeHeading, 2000);

// Location sharing
const submitForm = (event: Event): void => {
  event.preventDefault(); // Prevent the default form submission
  const deliveryLocationInput: HTMLInputElement | null = document.getElementById("deliveryLocation") as HTMLInputElement;
  const deliveryLocation: string | undefined = deliveryLocationInput?.value;
  if (deliveryLocation) {
    document.cookie = `deliveryLocation=${deliveryLocation};`;
    window.location.href = "home.html";
  }
};

// Footer section
// Company section
const companyList: HTMLElement | null = document.getElementById("companyList");
const companyListElements: string[] = [
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
  const company: HTMLLIElement = document.createElement("li");
  const companyListButton: HTMLButtonElement = document.createElement("button");
  companyListButton.textContent = companyListElements[i];
  companyListButton.classList.add("cList");
  company.appendChild(companyListButton);
  if (companyList) {
    companyList.appendChild(company);
  }
}

// Contact section
const contactList: HTMLElement | null = document.getElementById("contactList");
const contactListElements: string[] = ["Help & Support", "Partner with us", "Ride with us"];

for (let i = 0; i < contactListElements.length; i++) {
  const contact: HTMLLIElement = document.createElement("li");
  const contactListButton: HTMLButtonElement = document.createElement("button");
  contactListButton.textContent = contactListElements[i];
  contactListButton.classList.add("cList");
  contact.appendChild(contactListButton);
  if (contactList) {
    contactList.appendChild(contact);
  }
}

// Legal section
const legalList: HTMLElement | null = document.getElementById("legalList");
const legalListElements: string[] = [
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
  const legal: HTMLLIElement = document.createElement("li");
  const legalListButton: HTMLButtonElement = document.createElement("button");
  legalListButton.textContent = legalListElements[i];
  legalListButton.classList.add("cList");
  legal.appendChild(legalListButton);
  if (legalList) {
    legalList.appendChild(legal);
  }
}

// We Deliver To section
const numberOfPlaces: number = 100;
fetch(`https://randomuser.me/api/?results=${numberOfPlaces}`)
  .then((response) => response.json())
  .then((data) => {
    const placeNames: string[] = data.results.map((result: { name: { first: string } }) => result.name.first);
    console.log(placeNames);
    let y: number = 0;
    for (let i = 1; i <= 4; i++) {
      const weDeliverTo: HTMLElement | null = document.getElementById(`wedeliverList${i}`);
      for (y; y < i * 25; y++) {
        const wedeliverElement: HTMLLIElement = document.createElement("li");
        const wedeliverListButton: HTMLButtonElement = document.createElement("button");
        wedeliverListButton.textContent = placeNames[y];
        wedeliverListButton.classList.add("cList");
        wedeliverElement.appendChild(wedeliverListButton);
        if (weDeliverTo) {
          weDeliverTo.appendChild(wedeliverElement);
        }
      }
    }

    // Best Places section
    y = 0;
    for (let i = 1; i <= 4; i++) {
      const bestPlaces: HTMLElement | null = document.getElementById(`bestPlacesList${i}`);
      for (y; y < i * 25; y++) {
        const bestPlacesElement: HTMLLIElement = document.createElement("li");
        const bestPlacesListButton: HTMLButtonElement = document.createElement("button");
        bestPlacesListButton.textContent = `Best Restaurants In ${placeNames[y]}`;
        bestPlacesListButton.classList.add("cList");
        bestPlacesElement.appendChild(bestPlacesListButton);
        if (bestPlaces) {
          bestPlaces.appendChild(bestPlacesElement);
        }
      }
    }
  })
  .catch((error) => console.error("Error:", error));

// BOTTOM SECTION
// Bottom swiggy logo
const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
