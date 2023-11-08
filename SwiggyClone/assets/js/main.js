
document.addEventListener('DOMContentLoaded', function () {
    const menuBoxContainer = document.getElementById('menu-box-container');
    const menuHeadingsContainer = document.getElementById('menu-headings-container'); 

    // <a href="menu.html?restaurantId=123">Restaurant 1</a>
    // const urlParams = new URLSearchParams(window.location.search);
    // const restaurantId = urlParams.get('restaurantId');
    const id=1;

    fetch('https://dummyjson.com/products/'+id)
        .then(res => res.json())
        .then((data) => {
        
                let menuHead = document.createElement("div");
                let menuHeadLeftSide = document.createElement("div");
                let menuHeadRightSide = document.createElement("div");

                let menuHeadRestaurant = document.createElement('h3');
                let menuHeadOtherInfo = document.createElement('div');
                let menuHeadLocation = document.createElement('p');
                let menuHeadCuisine = document.createElement('p');
                let menuHeadRating = document.createElement('button');
                
                menuHead.classList.add('menu-head');
                menuHeadLeftSide.classList.add('head-left-side');
                menuHeadRightSide.classList.add('head-right-side');

                menuHeadRestaurant.classList.add('restaurant'); 
                menuHeadLocation.classList.add('location'); 
                menuHeadCuisine.classList.add('cuisine'); 
                menuHeadRating.classList.add('rating');

                menuHeadRestaurant.textContent = " " + data.title;
                console.log(menuHeadRestaurant)
                menuHeadLocation.textContent = "Location: " + data.brand;
                menuHeadCuisine.textContent = "Cuisine: " + data.category;
                //menuHeadRating.textContent = "★" + data.rating + "Rating"; 
                menuHeadRating.innerHTML = `<b><span>★${data.rating}</span></b><hr><p style="color: black;">rating</p>
                `;

                // Main Container
                menuHeadingsContainer.appendChild(menuHead);

                // Course container
                menuHead.appendChild(menuHeadLeftSide);
                menuHead.appendChild(menuHeadRightSide);

                // Left side
                menuHeadLeftSide.appendChild(menuHeadRestaurant);
                menuHeadLeftSide.appendChild(menuHeadOtherInfo);

                // Other info
                //menuHeadOtherInfo.appendChild(menuBoxDescription);
                menuHeadOtherInfo.appendChild(menuHeadLocation);
                menuHeadOtherInfo.appendChild(menuHeadCuisine);
                menuHeadRightSide.appendChild(menuHeadRating);
        
        });


         //==============================================================//

    // Fetch menu data
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data) => {

               
            data.products.forEach((product) => { 
                let menuBox = document.createElement("div");
                let menuBoxLeftSide = document.createElement("div");
                let menuBoxRightSide = document.createElement("div");

                let menuBoxTitle = document.createElement('h3');
                let menuBoxOtherInfo = document.createElement('div');
                let menuBoxDescription = document.createElement('p');
                let menuBoxCategory = document.createElement('p');
                let menuBoxRating = document.createElement('p');
                let menuBoxBrand = document.createElement('p');
                let menuBoxPrice = document.createElement('p');
                //let menuBoxImage = document.createElement('img');
                

                // Apply btn
                let menuBoxBtn = document.createElement('button');

                // Adding class names
                menuBox.classList.add('menu-box');
                menuBoxLeftSide.classList.add('left-side');
                menuBoxRightSide.classList.add('right-side');

                menuBoxDescription.classList.add('description'); 
                menuBoxCategory.classList.add('category'); 
                menuBoxRating.classList.add('rating'); 
                menuBoxBrand.classList.add('brand'); 
                menuBoxPrice.classList.add('price');
                //menuBoxImage.classList.add('images'); 

                // Adding data
                menuBoxTitle.textContent = " " + product.title;
                menuBoxDescription.textContent = "Description: " + product.description;
                menuBoxCategory.textContent = "Cuisine: " + product.category;
                menuBoxRating.textContent = "Rating: " + product.rating;
                menuBoxBrand.textContent = "Ingredients: " + product.brand;
                menuBoxPrice.textContent = "Price: $" + product.price;
                //menuBoxImage.src = product.images;
                
                // product.images.forEach((imageURL) => {
                //     let menuBoxImage = document.createElement('img');
                //     menuBoxImage.src = imageURL[0];
                //     menuBoxImage.classList.add('images');
                //     menuBoxRightSide.appendChild(menuBoxImage);
                // });

                if (product.images && product.images.length > 0) {
                    let menuBoxImage = document.createElement('img');
                    menuBoxImage.src = product.images[0]; // Display the first image
                    menuBoxImage.classList.add('images');
                    menuBoxRightSide.appendChild(menuBoxImage);
                }

                menuBoxBtn.textContent = "ADD";
                
                // Main Container
                menuBoxContainer.appendChild(menuBox);

                // Course container
                menuBox.appendChild(menuBoxLeftSide);
                menuBox.appendChild(menuBoxRightSide);

                // Left side
                menuBoxLeftSide.appendChild(menuBoxTitle);
                menuBoxLeftSide.appendChild(menuBoxOtherInfo);

                // Other info
                menuBoxOtherInfo.appendChild(menuBoxDescription);
                menuBoxOtherInfo.appendChild(menuBoxCategory);
                menuBoxOtherInfo.appendChild(menuBoxRating);
                menuBoxOtherInfo.appendChild(menuBoxBrand);
                menuBoxOtherInfo.appendChild(menuBoxPrice);

                // Right Side
                //menuBoxRightSide.appendChild(menuBoxImage);
                menuBoxRightSide.appendChild(menuBoxBtn);
            });
        })
        .catch((error) => console.log(error.message));
});

const URL = 'https://dummyjson.com/products';

async function getOfferImages(URL) {
    const response = await fetch(URL);
    var data = await response.json();

    //  console.log(data)

    const offerContainer = document.getElementById('offer-container');


    for (let i = 10; i < 20; i++) {

        // console.log(data.products[i])

        let offerBox = document.createElement('div');
        let offerImg = document.createElement('img');

        offerBox.classList.add('offer-box');
        offerImg.classList.add('offer-img');

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

    const topRestContainer = document.getElementById('top-rest-container');


    for (let i = 1; i < 10; i++) {

        // console.log(data.products[i])

        let topRestBox = document.createElement('div');
        let topRestImg = document.createElement('img');
        let topRestName = document.createElement('h4');

        let topRestRating = document.createElement('p');
        // let topRestRatingSymbol = document.createElement('i');

        let topRestCategory = document.createElement('p');
        let topRestLocation = document.createElement('p');


        topRestBox.classList.add('top-rest-box');

        topRestName.classList.add('item-name');
        topRestRating.classList.add('rating');
        topRestCategory.classList.add('category');
        topRestLocation.classList.add('location');
        // topRestRatingSymbol.classList.add('fa-regular fa-star');


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



    const restOnlineContainer = document.getElementById('rest-online-container');


    for (let i = 0; i < 30; i++) {


        //Dynamic  Elements
        let restOnlineBox = document.createElement('div');
        let restOnlineImg = document.createElement('img');
        let restOnlineName = document.createElement('h4');
        let restOnlineRating = document.createElement('p');
        let restOnlineCategory = document.createElement('p');
        let restOnlineLocation = document.createElement('p');


        //Adding classes
        restOnlineBox.classList.add('rest-online-box');
        restOnlineName.classList.add('item-name');
        restOnlineRating.classList.add('rating');
        restOnlineCategory.classList.add('category');
        restOnlineLocation.classList.add('location');

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


    const bestPlacesContainer = document.getElementById('best-places-container');

    for (let i = 0; i < 12; i++) {


        //Dynamic Elements
        let bestPlacesBox = document.createElement('div');
        let bestPlaceName = document.createElement('a');


        //Adding classes
        bestPlacesBox.classList.add('best-places-box');

        //Adding data
        bestPlaceName.textContent = "Best Restaurants in " + data.products[i].brand;


        //Append Child
        bestPlacesContainer.appendChild(bestPlacesBox);
        bestPlacesBox.appendChild(bestPlaceName);


    }


}


displayCityNames(URL)







// Get City Names ==> Best Places to eat

async function displayCuisines(URL) {

    const response = await fetch(URL);
    let data = await response.json();

    //  console.log(data)


    const bestCuisinesContainer = document.getElementById('best-cuisines-container');

    for (let i = 0; i < 12; i++) {


        //Dynamic Elements
        let bestCuisinesBox = document.createElement('div');
        let bestCuisinesName = document.createElement('a');


        //Adding classes
        bestCuisinesBox.classList.add('best-cuisines-box');

        //Adding data
        bestCuisinesName.textContent = data.products[i].brand + " Restaurants Near Me";


        //Append Child
        bestCuisinesContainer.appendChild(bestCuisinesBox);
        bestCuisinesBox.appendChild(bestCuisinesName);


    }


}


displayCuisines(URL)
