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

async function getRestaurants(URL) {

    const response = await fetch(URL);
    let data = await response.json();

    console.log(data)

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




