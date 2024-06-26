const cardContainer = document.getElementById('cardContainer');
let allData;

const basket = [];

const addToCart = (addProd) => {
    basket.push(addProd);
    const localBasket = JSON.stringify(wishlist);
    localStorage.setItem('basket', localBasket);
  }
  

  let basketcount = 0;




fetch("http://127.0.0.1:5500/assets/data/shop.json")
    .then(res => res.json())
    .then(data => {
        allData = data; 
        displayCards(data); 
    });

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredData = allData.filter(item => {
        return item.title.toLowerCase().includes(searchTerm);
    });

    displayCards(filteredData);
}

function displayCards(data) {
    let col = "";
    data.forEach(i => {
        col += `
      <div data-aos="fade-down" class="col-12 col-sm-6 col-md-4">
          <div class="card zoomable-card">
          <img src="${i.image}" class="card-img-top" alt="...">
          <div class="card-body">
           <div class="wish">
           <h5 class="card-title">${i.title}</h5>
           <button class="btn btn-primary addToWishlistBtn wish" data-image="${i.image}" data-title="${i.title}" data-price="${i.price}">
           <i class="fa-solid fa-heart"></i>
             </button>
           </div>
             <div class="list">
               <h5 class="card-text">${i.price}</h5>
                 </div>
             <div class="view">
                      <div class="cart">
                  <button class="btn btn-primary addToCartBtn" data-image="${i.image}" data-title="${i.title}" data-price="${i.price}" onclick="addToCart(${i.id})">
                      <i class="fa-solid fa-cart-shopping"></i>Add to Cart
                </button>
                 <div class="arrow">
                 <a href="./shopdetails.html?id=${i.id}">View Details</a>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
    });
    cardContainer.innerHTML = col;
    setupAddToCartListeners(); 
    setupAddToWishlistListeners(); 
}


function setupAddToCartListeners() {
    document.querySelectorAll('.addToCartBtn').forEach(btn => {
        btn.addEventListener('click', function () {

            const isLoginIn = localStorage.getItem('login') === 'true'; 

            if (!isLoginIn) { 
                alert('You need to login first.');
                window.location.assign('login.html'); 
                return; 
            }else{
                const image = btn.dataset.image;
                const title = btn.dataset.title;
                const price = parseFloat(btn.dataset.price);
    
                const product = {
                    image: image,
                    title: title,
                    price: price,
                };
    
      
                basketcount+=1;
                document.querySelector('#basket-counter').innerHTML =basketcount;
                localStorage.setItem('basketcount',basketcount);
    
                let basketData = JSON.parse(localStorage.getItem('basket')) || [];
                basketData.push(product);
                localStorage.setItem('basket', JSON.stringify(basketData));
                alert('The product has been added to the cart!');
            }
          
        });
    });
}



document.querySelector('#basket-counter').innerHTML =localStorage.getItem('basketcount');



function setupAddToWishlistListeners() {
    document.querySelectorAll('.addToWishlistBtn').forEach(btn => {
        btn.addEventListener('click', function () {
            const image = btn.dataset.image;
            const title = btn.dataset.title;
            const price = parseFloat(btn.dataset.price);

            const product = {
                image: image,
                title: title,
                price: price,
            };

         
            
            let wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlistData.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlistData));
            alert('Product added to wishlist!');
        });
    });
}






AOS.init();



