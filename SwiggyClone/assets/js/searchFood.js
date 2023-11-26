document.addEventListener("DOMContentLoaded", function () {
  try {
    // search icon in the html
    const searchbar = document.querySelector(".searchBarIcon");

    // function to search for the food items
    const searchFoodItems = () => {
      // input box for entering the foodname
      const foodItem = document.querySelector(".searchInput").value;
      console.log(`input is ${foodItem}`);

      // console.log("search bar is "+searchbar);
      const string = foodItem;
      console.log(`input is ${foodItem}`);

      const url = `https://dummyjson.com/products/category/${string}`;
      // const url= `https://mocki.io/v1/428914dd-eb15-42fb-87eb-6450fbed78d1/category/${string}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not OK");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data Length:", data.products.length);
          const foodCardsFrame = document.querySelector(".foodCardsFrame");
          console.log(foodCardsFrame);
          foodCardsFrame.innerHTML = "";
          const searchInput = document.querySelector(".searchInput");
          console.log(searchInput);
          const searchbar = document.querySelector(".searchBarIcon");
          console.log("search bar is " + searchbar);

          for (let i = 0; i < data.products.length; i++) {
            const foodCards = document.createElement("div");
            foodCards.classList.add("foodCards");

            const restaurantTitleBar = document.createElement("div");
            restaurantTitleBar.classList.add("restaurantTitleBar");

            const restaurantTitle = document.createElement("div");

            const name = document.createElement("div");
            name.textContent = `By ${data.products[i].title}`;
            console.log();

            const rateFrame = document.createElement("div");
            rateFrame.classList.add("ratingsFrame");

            const rate = document.createElement("div");
            rate.textContent = data.products[i].rating;

            const mins = document.createElement("div");
            mins.textContent = `  ${data.products[i].stock}mins`;

            rateFrame.appendChild(rate);
            rateFrame.appendChild(mins);

            restaurantTitle.appendChild(name);
            restaurantTitle.appendChild(rateFrame);

            const arrow = document.createElement("img");
            arrow.setAttribute("src", "./assets/img/food/arrowIcon.png");

            restaurantTitleBar.appendChild(restaurantTitle);
            restaurantTitleBar.appendChild(arrow);

            foodCards.appendChild(restaurantTitleBar);

            const barHoriz = document.createElement("div");
            const hrTag= document.createElement("hr");
            barHoriz.appendChild(hrTag);
            // barHoriz.setAttribute("colour", "#282c3f73");
            foodCards.appendChild(hrTag);

            const image = document.createElement("img");
            image.setAttribute("src", data.products[i].images[0]);

            const description = document.createElement("div");
            description.textContent = data.products[i].brand;

            const restaurantBody = document.createElement("div");
            restaurantBody.classList.add("restaurantBody");

            const restaurantBodyTitle = document.createElement("div");

            const foodName = document.createElement("h3");
            foodName.textContent = data.products[i].category;
            const foodPrice = document.createElement("p");
            foodPrice.textContent = `₹ ${data.products[i].price}`;

            restaurantBodyTitle.appendChild(foodName);
            restaurantBodyTitle.appendChild(foodPrice);
            restaurantBody.appendChild(restaurantBodyTitle);

            const restaurantImage = document.createElement("img");
            restaurantImage.setAttribute("src", data.products[i].images[0]);
            restaurantBody.appendChild(restaurantImage);

            foodCards.appendChild(restaurantBody);
            foodCardsFrame.appendChild(foodCards);
          }
          const searchIcon = document.querySelector(".searchBarIcon");
          console.log(searchIcon);
        })
        .catch((error) => {
          console.error("Fetch error:", error.message);
        });
    };

    searchbar.addEventListener("click", searchFoodItems);

    const foodSearch = document.querySelector(".searchInput");
    foodSearch.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
          // Call the seachfood
        searchFoodItems();
      }
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
