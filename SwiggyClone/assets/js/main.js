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
