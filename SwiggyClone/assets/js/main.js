const URL = "https://dummyjson.com/products";

async function getOfferImages(URL) {
  const response = await fetch(URL);
  var data = await response.json();

  //  console.log(data)

  const offerContainer = document.getElementById("offer-container");

  for (let i = 10; i < 20; i++) {
    // console.log(data.products[i])

    let offerBox = document.createElement("div");
    let offerImg = document.createElement("img");

    offerBox.classList.add("offer-box");
    offerImg.classList.add("offer-img");

    offerImg.src = `${data.products[i].images[1]}`;

    offerContainer.appendChild(offerBox);
    offerBox.appendChild(offerImg);
  }
}

getOfferImages(URL);

//Get Restaurants
// const URL2 = 'https://dummyjson.com/carts';

//Temporary Function for testing

async function getRestaurants(URL) {
  const response = await fetch(URL);
  let data = await response.json();

  //  console.log(data)

  const topRestContainer = document.getElementById("top-rest-container");

  for (let i = 1; i < 10; i++) {
    // console.log(data.products[i])

    let topRestBox = document.createElement("div");
    let topRestImg = document.createElement("img");
    let topRestName = document.createElement("h4");

    let topRestRating = document.createElement("p");
    // let topRestRatingSymbol = document.createElement('i');

    let topRestCategory = document.createElement("p");
    let topRestLocation = document.createElement("p");

    topRestBox.classList.add("top-rest-box");

    topRestName.classList.add("item-name");
    topRestRating.classList.add("rating");
    topRestCategory.classList.add("category");
    topRestLocation.classList.add("location");
    // topRestRatingSymbol.classList.add('fa-regular fa-star');

    //Adding URL
    // console.log("tEST " + topRestBox);
    // topRestBox.href = "menu.html";

    //Adding Data
    topRestImg.src = `${data.products[i].thumbnail}`;
    topRestName.textContent = data.products[i].title;
    topRestRating.textContent = data.products[i].rating;
    topRestCategory.textContent = data.products[i].category;
    topRestLocation.textContent = data.products[i].brand;

    //Appending Child
    topRestContainer.appendChild(topRestBox);
    topRestBox.appendChild(topRestImg);
    topRestBox.appendChild(topRestName);
    topRestBox.appendChild(topRestRating);
    // topRestRating.appendChild(topRestRatingSymbol);

    topRestBox.appendChild(topRestCategory);
    topRestBox.appendChild(topRestLocation);
  }
}

getRestaurants(URL);

//Restaurants with online delivery

async function displayRestaurantsWithOnlineDelivery(URL) {
  const response = await fetch(URL);
  let data = await response.json();

  //console.log(data)

  const restOnlineContainer = document.getElementById("rest-online-container");

  for (let i = 0; i < 30; i++) {
    //Dynamic  Elements
    let restOnlineBox = document.createElement("div");
    let restOnlineImg = document.createElement("img");
    let restOnlineName = document.createElement("h4");
    let restOnlineRating = document.createElement("p");
    let restOnlineCategory = document.createElement("p");
    let restOnlineLocation = document.createElement("p");

    //Adding classes
    restOnlineBox.classList.add("rest-online-box");
    restOnlineName.classList.add("item-name");
    restOnlineRating.classList.add("rating");
    restOnlineCategory.classList.add("category");
    restOnlineLocation.classList.add("location");

    //Adding Data
    restOnlineImg.src = `${data.products[i].thumbnail}`;
    restOnlineName.textContent = data.products[i].title;
    restOnlineRating.textContent = data.products[i].rating;
    restOnlineCategory.textContent = data.products[i].category;
    restOnlineLocation.textContent = data.products[i].brand;

    //Appending Child
    restOnlineContainer.appendChild(restOnlineBox);
    restOnlineBox.appendChild(restOnlineImg);
    restOnlineBox.appendChild(restOnlineName);
    restOnlineBox.appendChild(restOnlineRating);
    restOnlineBox.appendChild(restOnlineCategory);
    restOnlineBox.appendChild(restOnlineLocation);
  }
}

displayRestaurantsWithOnlineDelivery(URL);

// Get City Names ==> Best Places to eat

async function displayCityNames(URL) {
  const response = await fetch(URL);
  let data = await response.json();

  //  console.log(data)

  const bestPlacesContainer = document.getElementById("best-places-container");

  for (let i = 0; i < 12; i++) {
    //Dynamic Elements
    let bestPlacesBox = document.createElement("div");
    let bestPlaceName = document.createElement("a");

    //Adding classes
    bestPlacesBox.classList.add("best-places-box");

    //Adding data
    bestPlaceName.textContent = "Best Restaurants in " + data.products[i].brand;

    //Append Child
    bestPlacesContainer.appendChild(bestPlacesBox);
    bestPlacesBox.appendChild(bestPlaceName);
  }
}

displayCityNames(URL);

// Get City Names ==> Best Places to eat

async function displayCuisines(URL) {
  const response = await fetch(URL);
  let data = await response.json();

  //  console.log(data)

  const bestCuisinesContainer = document.getElementById(
    "best-cuisines-container"
  );

  for (let i = 0; i < 12; i++) {
    //Dynamic Elements
    let bestCuisinesBox = document.createElement("div");
    let bestCuisinesName = document.createElement("a");

    //Adding classes
    bestCuisinesBox.classList.add("best-cuisines-box");

    //Adding data
    bestCuisinesName.textContent =
      data.products[i].brand + " Restaurants Near Me";

    //Append Child
    bestCuisinesContainer.appendChild(bestCuisinesBox);
    bestCuisinesBox.appendChild(bestCuisinesName);
  }
}

displayCuisines(URL);

//NAVBAR LOCATION RECEIVING THROUGH QUERY PARAMETERS
const urlParams = new URLSearchParams(window.location.search);
const deliveryLocation = urlParams.get("deliveryLocation");
console.log(deliveryLocation);
const navbarLocation = document.getElementById("navbarLocation");
navbarLocation.textContent = deliveryLocation;
