const URL = 'https://dummyjson.com/products';

async function getOfferImages(URL) {
    const response = await fetch(URL);
    var data = await response.json();

    //  console.log(data)

    const offerContainer = document.getElementById('offer-container');


    for (i = 10; i < 20; i++) {

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




