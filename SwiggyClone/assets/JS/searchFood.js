
url="https://dummyjson.com/products"


    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data Length:', data.products.length);
        
        const foodCardsFrame= document.querySelector(".foodCardsFrame");
        for (let i=0; i<10; i++){


            const foodCards=document.createElement("div");
            foodCards.classList.add("foodCards");

            const restaurantTitleBar=document.createElement("div");
            restaurantTitleBar.classList.add("restaurantTitleBar")

            const restaurantTitle=document.createElement("div");

            const name=document.createElement('div');
            name.textContent=`By ${data.products[i].title}`;
            console.log()

            const rateFrame=document.createElement('div');
            rateFrame.classList.add("ratingsFrame")

            const rate=document.createElement('div');
            rate.textContent=data.products[i].rating

            const mins=document.createElement('div');
            mins.textContent=`  ${data.products[i].stock}mins`
            
            rateFrame.appendChild(rate);
            rateFrame.appendChild(mins);

            restaurantTitle.appendChild(name);
            restaurantTitle.appendChild(rateFrame);

            const arrow= document.createElement('img');
            arrow.setAttribute('src','./assets/img/food/arrowIcon.png');

            restaurantTitleBar.appendChild(restaurantTitle);
            restaurantTitleBar.appendChild(arrow);

            foodCards.appendChild(restaurantTitleBar);

            const barHoriz=document.createElement("div")
            barHoriz.textContent="......................................................................................................................."
            barHoriz.setAttribute('colour','#bebfc5')
            foodCards.appendChild(barHoriz)

            const image= document.createElement('img');
            image.setAttribute('src',data.products[i].images[0]);
            

            const description=document.createElement('div');
            description.textContent=data.products[i].brand;  

            const restaurantBody=document.createElement("div");
            restaurantBody.classList.add("restaurantBody")
            
            const restaurantBodyTitle=document.createElement("div");

            const foodName=document.createElement("h3")
            foodName.textContent=data.products[i].category;
            const foodPrice=document.createElement("p")
            foodPrice.textContent=`₹ ${data.products[i].price}`;
            
            restaurantBodyTitle.appendChild(foodName);
            restaurantBodyTitle.appendChild(foodPrice);
            restaurantBody.appendChild(restaurantBodyTitle);

            const restaurantImage=document.createElement("img");
            restaurantImage.setAttribute("src",data.products[i].images[0]);
            restaurantBody.appendChild(restaurantImage);

            foodCards.appendChild(restaurantBody)
            foodCardsFrame.appendChild(foodCards);
        }

      })
      .catch(error => {
        console.error('Fetch error:', error.message);
      });
  
  