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


    // Fetch menu data
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data) => {

            // Create objects to hold categorized products
            const categories = {
                appetizers: [],
                main: [],
                desserts: [],
            };

            // Categorize the products based on their IDs
            data.products.forEach((product) => {
                if (product.id >= 1 && product.id <= 10) {
                    categories.appetizers.push(product);
                } else if (product.id >= 11 && product.id <= 20) {
                    categories.main.push(product);
                } else if (product.id >= 21 && product.id <= 30) {
                    categories.desserts.push(product);
                }
            });

            // Create a function to display products for a specific category
            function displayCategory(category, categoryName) {
                const categorySection = document.createElement('section');
                const categoryTitle = document.createElement('h3');
                categoryTitle.classList.add('category-title'); 
                categoryTitle.textContent = categoryName;
                categorySection.appendChild(categoryTitle);



                // Set a unique ID for each section
                const sectionId = categoryName.toLowerCase().replace(' ', '-');
                categorySection.id = sectionId;


                // Display products for the category
                category.forEach((product) => {   
            //data.products.forEach((product) => { 
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
                menuBoxTitle.classList.add('title');
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
            categorySection.appendChild(menuBox);
                });

                menuBoxContainer.appendChild(categorySection);
            }



    // Define the search input and button elements
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('menu-search-button');


    searchButton.addEventListener('click', function () {
        const keyword = searchInput.value.trim().toLowerCase();
    
        // Get all menu items
        const allMenuItems = document.querySelectorAll('.menu-box');
        
        // Get all category sections
        const categorySections = document.querySelectorAll('.category-title');
    
        // Check if the search input is empty or only contains spaces
        if (keyword === '') {
            // If the search input is empty, show all menu items and display section headings
            allMenuItems.forEach((menuItem) => {
                menuItem.style.display = 'block';
            });
    
            categorySections.forEach((section) => {
                section.style.display = 'block';
            });
        } else {
            // If there's a keyword, filter the menu items and hide section headings
            allMenuItems.forEach((menuItem) => {
                const title = menuItem.querySelector('.title').textContent;
                const description = menuItem.querySelector('.description').textContent;
    
                if (title.toLowerCase().includes(keyword) || description.toLowerCase().includes(keyword)) {
                    menuItem.style.display = 'block';
                } else {
                    menuItem.style.display = 'none';
                }
            });
    
            categorySections.forEach((section) => {
                section.style.display = 'none';
            });
        }
    });
    

            // Display products for each category
            displayCategory(categories.appetizers, "Appetizers");
            displayCategory(categories.main, "Main Courses");
            displayCategory(categories.desserts, "Desserts");
        
    // Add anchor links to the "Browse Menu" button
        const browseMenuButton = document.getElementById('browse-btn');
        const menuPopup = document.createElement('div');
        menuPopup.classList.add('menu-popup');
        menuPopup.style.display = 'none';
        const appetizersLink = document.createElement('a');
        appetizersLink.href = '#appetizers'; 
        appetizersLink.textContent = 'Appetizers ';
        menuPopup.appendChild(appetizersLink);

        const mainLink = document.createElement('a');
        mainLink.href = '#main-courses'; 
        mainLink.textContent = 'Main ';
        menuPopup.appendChild(mainLink);

        const dessertsLink = document.createElement('a');
        dessertsLink.href = '#desserts'; 
        dessertsLink.textContent = 'Desserts ';
        menuPopup.appendChild(dessertsLink);

        browseMenuButton.appendChild(menuPopup);

        //browse menu button click
        browseMenuButton.addEventListener('click', function () {
            if (menuPopup.style.display === 'none') {
                menuPopup.style.display = 'block';
            } else {
                menuPopup.style.display = 'none';
            }
        });
        
        //menupopup link click
        menuPopup.addEventListener('click', function (event) {
            if (event.target.tagName === 'A') {
                event.preventDefault();
                const targetSectionId = event.target.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetSectionId);
                if (targetSection) {
                    const offset = -100; // control how much above the section title you want to scroll
                    window.scrollTo({
                        top: targetSection.offsetTop + offset,
                        behavior: 'smooth'
                    });
                }
                // Hide the menuPopup when a section link is clicked
                menuPopup.style.display = 'none';
            }
        });
          
    })
        .catch((error) => console.log(error.message));
});