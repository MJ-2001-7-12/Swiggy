document.addEventListener('DOMContentLoaded', function () {
    const menuBoxContainer = document.getElementById('menu-box-container');
    const menuHeadingsContainer = document.getElementById('menu-headings-container');
   
    // <a href="menu.html?restaurantId=123">Restaurant 1</a>
    // const urlParams = new URLSearchParams(window.location.search);
    // const restaurantId = urlParams.get('restaurantId');
    const id=1;
 
    fetch('https://mocki.io/v1/15c4f84b-539f-4281-9a26-8ca758a7c0c3')
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

              // Create video element
              let videoElement = document.createElement("video");
              videoElement.setAttribute("class", "video-element-container");
              videoElement.setAttribute("width", "280px");
              videoElement.setAttribute("height", "280px");
              videoElement.setAttribute("controls", "controls");
              videoElement.setAttribute("autoplay", "");

              // Create source element for the video
              let sourceElement = document.createElement("source");
              sourceElement.setAttribute("src", "assets/img/restaurants/Cook with me.mp4");
              sourceElement.setAttribute("type", "video/mp4");

              // Append source element to video element
              videoElement.appendChild(sourceElement);

              // Append video element to existing structure
              let videoContainer = document.createElement("div");
              videoContainer.appendChild(videoElement);
              videoContainer.classList.add('video-container');

                // Main Container
                menuHeadingsContainer.appendChild(menuHead);
 
                // Course container
                let textContainer = document.createElement("div");
                textContainer.classList.add('text-container')
                let lineContainer = document.querySelector(".menu-headings-above-hr");
                let couponsContainer = document.querySelector('.coupons-container');

                textContainer.appendChild(menuHeadLeftSide);
                textContainer.appendChild(menuHeadRightSide);
                textContainer.appendChild(lineContainer);
                textContainer.appendChild(couponsContainer);
                menuHead.appendChild(textContainer);
                menuHead.appendChild(videoContainer);
 
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
    fetch('https://mocki.io/v1/69633389-b04b-41f8-bddf-12ad10dad4d1')
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
                menuBoxBtn.classList.add('add-btn')
                //menuBoxImage.classList.add('images');
 
                // Adding data
                menuBoxTitle.textContent = " " + product.title;
                menuBoxDescription.textContent = "Description: " + product.description;
                menuBoxCategory.textContent = "Cuisine: " + product.category;
                menuBoxRating.textContent = "Rating: " + product.rating;
                menuBoxBrand.textContent = "Ingredients: " + product.brand;
                menuBoxPrice.textContent = "Price: $" + product.price;
                
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

// Function to add item data to Google Sheet
function addToCart(itemDetails) {

    const modifiedDetails = {
        title: extractValue(itemDetails.title),
        category: extractValue(itemDetails.category),
        price: extractValue(itemDetails.price)
        
      };
    fetch('https://script.google.com/macros/s/AKfycbztl0rb7AMLtddgLj9BKzmFD-UrBjpu4QiwbuTA4h8ybjqiD1bE1X8GmHXYGovBvqGh/exec', {
      method: 'POST',
      body: JSON.stringify(modifiedDetails),
    })
    .then(response => {
      console.log('Item added to cart');
    })
    .catch(error => {
      console.error('Error adding item to cart:', error);
    });
  }
  
  function extractValue(text) {
    const colonIndex = text.indexOf(':');
    if (colonIndex !== -1) {
      return text.substring(colonIndex + 1).trim();
    }
    return text.trim();
  }
  // Event listener for the "Add" button click
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-btn')) {
      const item = event.target.parentElement.parentElement;
      const itemDetails = {
        title: item.querySelector('.title').textContent.trim(),
        category: item.querySelector('.category').textContent.trim(),
        price: item.querySelector('.price').textContent.trim()
        
      };
      addToCart(itemDetails);
    }
  });
  


  // Function to create an HTML table from cart data and calculate total cost
function createCartTable(cartData) {
    const table = document.createElement('table');
    table.classList.add('cart-table');
    let totalCost = 0;
  
    for (let i = 0; i < cartData.length; i++) {
      const row = document.createElement('tr');
  
      for (let j = 0; j < cartData[i].length; j++) {
        const cell = document.createElement(i === 0 ? 'th' : 'td');
        cell.textContent = cartData[i][j];

        // Add delete button to all rows except row 0 (titles)
        if (i > 0 && j === cartData[i].length - 1) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '  -  ';
        deleteButton.classList.add('delete-cart-item-button');
        deleteButton.onclick = function() {
          deleteCartItem(i); // Call delete function passing the row number
          };
        cell.appendChild(deleteButton);
        }

        row.appendChild(cell);
  
        // Check if it's a price cell (price is in the third column)
        if (j === 2 && i > 0) {
          const price = parseFloat(cartData[i][j]); // Convert price to number
          if (!isNaN(price)) {
            totalCost += price;
          }
        }
      }
  
      table.appendChild(row);
    }
  
    // Add a row for total cost at the end of the table
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-price');
    const totalTitleCell = document.createElement('th');
    totalTitleCell.textContent = 'Total Cost';
    totalRow.appendChild(totalTitleCell);
  
    // Add empty cells for formatting (assuming 3 columns)
    for (let k = 0; k < 1; k++) {
      const emptyCell = document.createElement('td');
      totalRow.appendChild(emptyCell);
    }
  
    // Cell for total cost
    const totalCostCell = document.createElement('td');
    totalCostCell.textContent = '₹' + totalCost.toFixed(2); // Format total cost
    totalRow.appendChild(totalCostCell);
  
    // Append the total row to the table
    table.appendChild(totalRow);
  
    return table;
  }
  
  
  
  // Function to display cart data in a modal
  function displayCartModal(cartData) {
    const modal = document.getElementById('myModal');
    const cartDataDiv = document.getElementById('cartData');
    
    // Clear previous content
    cartDataDiv.innerHTML = '';
  
    // Convert cart data to an HTML table
    const table = createCartTable(cartData);
  
    // Append the table to the cartDataDiv
    cartDataDiv.appendChild(table);
  
    // Display the modal
    modal.style.display = 'block';
  
    // Close the modal when the 'x' button is clicked
    const closeBtn = document.querySelector('.cart-close');
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    };
  
    // Close the modal when clicked outside the modal content
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }
  

// Function to view cart data
function viewCart() {
  fetch('https://script.google.com/macros/s/AKfycbztl0rb7AMLtddgLj9BKzmFD-UrBjpu4QiwbuTA4h8ybjqiD1bE1X8GmHXYGovBvqGh/exec')
    .then(response => response.json())
    .then(data => {
      // Display cart data in modal
      displayCartModal(data);
    })
    .catch(error => {
      console.error('Error viewing cart:', error);
    });
}

// Event listener for the "View Cart" button click
const viewCartBtn = document.getElementById('viewCartBtn');
viewCartBtn.addEventListener('click', function() {
  viewCart();
});


// Function to delete a specific item in the cart

function deleteCartItem(rowToDelete) {
  const rowToDeleteInSheet = rowToDelete + 1; // Adjust row number for Google Sheets (since indexing starts from 1)

  fetch(`https://script.google.com/macros/s/AKfycbztl0rb7AMLtddgLj9BKzmFD-UrBjpu4QiwbuTA4h8ybjqiD1bE1X8GmHXYGovBvqGh/exec`, {
    method: 'POST',
    body: JSON.stringify({ row: rowToDeleteInSheet }),
  })
    .then(response => {
      console.log(`Row ${rowToDeleteInSheet} deleted`);
      // Refresh the cart modal after deletion
      viewCart();
    })
    .catch(error => {
      console.error('Error deleting item:', error);
    });
}

// Function to delete all items in the cart on page load
window.addEventListener('load', function() {
  fetch('https://script.google.com/macros/s/AKfycbztl0rb7AMLtddgLj9BKzmFD-UrBjpu4QiwbuTA4h8ybjqiD1bE1X8GmHXYGovBvqGh/exec?clear=true', {
    method: 'POST',
  })
  .then(response => {
    if (response.ok) {
      console.log('Rows cleared except title row');
    } else {
      console.error('Failed to clear rows');
    }
    // Proceed with other operations or reload the page as needed
  })
  .catch(error => {
    console.error('Error clearing rows:', error);
  });
});
