const redirectToSignup = (): void => {
  const signUpContainer = document.getElementById('SignUpContainer') as HTMLDivElement;
  const modal = document.getElementById('modal') as HTMLDivElement;
  const usernameInput = document.getElementById('username') as HTMLInputElement;
  const passwordInput = document.getElementById('password') as HTMLInputElement;
  const signUpFirstNameInput = document.getElementById('signUp firstName') as HTMLInputElement;
  const signUpLastNameInput = document.getElementById('signUp lastName') as HTMLInputElement;
  const signUpEmailInput = document.getElementById('signUp email') as HTMLInputElement;
  const signUpUsernameInput = document.getElementById('signUp username') as HTMLInputElement;
  const signUpPasswordInput = document.getElementById('signUp password') as HTMLInputElement;

  signUpContainer.classList.remove('hidden');
  modal.style.right = '0';
  usernameInput.value = '';
  passwordInput.value = '';
  signUpFirstNameInput.value = '';
  signUpLastNameInput.value = '';
  signUpEmailInput.value = '';
  signUpUsernameInput.value = '';
  signUpPasswordInput.value = '';
};

function deleteCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

deleteCookie('id');
deleteCookie('firstName');

// Changing headings

const changingHeadingElement = document.getElementById('changingHeading') as HTMLHeadingElement;
const texts: string[] = [
  'Late night at office?',
  'Hungry?',
  'Unexpected Guests?',
  'Cooking gone wrong?',
  'Movie marathon?',
  'Game night?',
];
let currentIndex = 0;

function changeHeading(): void {
  if (changingHeadingElement) {
    changingHeadingElement.textContent = texts[currentIndex];
  }
  currentIndex = (currentIndex + 1) % texts.length;
}

// Set an interval to change the heading every 2 seconds (2000 milliseconds)
setInterval(changeHeading, 2000);

// Location sharing
const submitForm = (event: Event): void => {
  event.preventDefault(); // Prevent the default form submission
  const deliveryLocationInput = document.getElementById('deliveryLocation') as HTMLInputElement;
  const deliveryLocation: string | undefined = deliveryLocationInput ? deliveryLocationInput.value : undefined;

  if (deliveryLocation) {
    document.cookie = `deliveryLocation=${deliveryLocation}`;
    window.location.href = 'home.html';
  }
};

// Function to handle button click and set cookie
function handleButtonClick(buttonId: string): void {
  const topPlacesButton = document.getElementById(buttonId) as HTMLButtonElement | null;

  if (topPlacesButton) {
    topPlacesButton.addEventListener("click", function () {
      const deliveryLocation = this.textContent;
      document.cookie = `deliveryLocation=${deliveryLocation}`;
      window.location.href = "home.html";
    });
  }
}
for(let i=1;i<10;i++){
handleButtonClick(`topPlace${i}`);
}
// Footer section

// Company section
const companyList: HTMLUListElement = document.getElementById('companyList') as HTMLUListElement;
const companyListElements: string[] = [
  'About us',
  'Team',
  'Careers',
  'Swiggy Blog',
  'Bug Bounty',
  'Swiggy One',
  'Swiggy Corporate',
  'Swiggy Instamart',
  'Swiggy Genie',
  'Swiggy HDFC Bank Credit Card',
];

for (let i = 0; i < companyListElements.length; i++) {
  const company = document.createElement('li') as HTMLLIElement;
  const companyListButton = document.createElement('button') as HTMLButtonElement;
  companyListButton.textContent = companyListElements[i];
  companyListButton.classList.add('cList');
  company.appendChild(companyListButton);

  companyList.appendChild(company);
}

// Contact section
const contactList: HTMLUListElement = document.getElementById('contactList') as HTMLUListElement;
const contactListElements: string[] = ['Help & Support', 'Partner with us', 'Ride with us'];

for (let i = 0; i < contactListElements.length; i++) {
  const contact = document.createElement('li') as HTMLLIElement;
  const contactListButton = document.createElement('button') as HTMLButtonElement;
  contactListButton.textContent = contactListElements[i];
  contactListButton.classList.add('cList');
  contact.appendChild(contactListButton);

  contactList.appendChild(contact);
}

// Legal section
const legalList: HTMLUListElement = document.getElementById('legalList') as HTMLUListElement;
const legalListElements: string[] = [
  'Terms & Conditions',
  'Refund & Cancellation',
  'Privacy Policy',
  'Cookie Policy',
  'Offer Terms',
  'Phishing & Fraud',
  'Corporate - Swiggy Money Codes Terms and Conditions',
  'Corporate - Swiggy Discount Voucher Terms and Conditions',
];

for (let i = 0; i < legalListElements.length; i++) {
  const legal = document.createElement('li') as HTMLLIElement;
  const legalListButton = document.createElement('button') as HTMLButtonElement;
  legalListButton.textContent = legalListElements[i];
  legalListButton.classList.add('cList');
  legal.appendChild(legalListButton);

  legalList.appendChild(legal);
}
// We Deliver To section
const numberOfPlaces: number = 100;

fetch(`https://randomuser.me/api/?results=${numberOfPlaces}`)
  .then((response: Response) => response.json())
  .then((data: { results: Array<{ name: { first: string } }> }) => {
    const placeNames: string[] = data.results.map((result) => result.name.first);
   // console.log(placeNames);

    let y = 0;
    for (let i = 1; i <= 4; i++) {
      const weDeliverTo: HTMLUListElement = document.getElementById(`wedeliverList${i}`) as HTMLUListElement;
      for (; y < i * 25; y++) {
        const wedeliverElement: HTMLLIElement = document.createElement('li');
        const wedeliverListButton: HTMLButtonElement = document.createElement('button');
        wedeliverListButton.id = `wedeliverButton${y}`;
        wedeliverListButton.textContent = placeNames[y];
        wedeliverListButton.classList.add('cList');
        wedeliverElement.appendChild(wedeliverListButton);

        if (weDeliverTo) {
          weDeliverTo.appendChild(wedeliverElement);
        }
      }
    }
    for(let i=0;i<numberOfPlaces;i++){
      handleButtonClick(`wedeliverButton${i}`);
    }

    // Best Places section
    y = 0;
    for (let i = 1; i <= 4; i++) {
      const bestPlaces: HTMLUListElement = document.getElementById(`bestPlacesList${i}`) as HTMLUListElement;
      for (; y < i * 25; y++) {
        const bestPlacesElement: HTMLLIElement = document.createElement('li');
        const bestPlacesListButton: HTMLButtonElement = document.createElement('button');
        bestPlacesListButton.id = `bestPlacesButton${y}`;
        bestPlacesListButton.textContent = `Best Restaurants In ${placeNames[y]}`;
        bestPlacesListButton.classList.add('cList');
        bestPlacesElement.appendChild(bestPlacesListButton);

        if (bestPlaces) {
          bestPlaces.appendChild(bestPlacesElement);
        }
      }
    }
    // for(let i=0;i<100;i++){
    //   handleButtonClick(`bestPlacesButton${i}`);
    // }
  })
  .catch((error: Error) => {
    console.error('Error:', error);
  });

// BOTTOM SECTION

// Bottom swiggy logo
const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};