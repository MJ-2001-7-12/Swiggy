
url="https://dummyjson.com/products"


    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        const foodsTitle= document.querySelector(".foodsTitle");
        foodsTitle.textContent=`${data.products.length} Restaurants to Explore`
        console.log(data)
        const foodCardsFrame= document.querySelector(".foodCardsFrame");
        for (let i=0; i<10; i++){

            const foodCards=document.createElement("div");
            foodCards.classList.add("foodCards");

            const name=document.createElement('div');
            name.textContent=data.products[i].title;

            const image= document.createElement('img');
            image.setAttribute('src',data.products[i].images[0]);

            const description=document.createElement('div')
            description.textContent=data.products[i].brand;  
            
            const description2=document.createElement('div')
            description2.textContent=data.products[i].category;

            const rateFrame=document.createElement('div');
            rateFrame.classList.add("ratingsFrame")

            const rate=document.createElement('div');
            rate.textContent=data.products[i].rating

            const mins=document.createElement('div');
            mins.textContent=`  ${data.products[i].stock} mins`
            
            rateFrame.appendChild(rate);
            rateFrame.appendChild(mins);
            
            
            foodCards.appendChild(image)
            foodCards.appendChild(name);
            foodCards.appendChild(rateFrame);
            foodCards.appendChild(description);
            foodCards.appendChild(description2);

            foodCardsFrame.appendChild(foodCards);
        }

      })
      .catch(error => {
        console.error('Fetch error:', error.message);
      });
  
  