const ul = document.querySelector('#cars-list');

fetch("http://127.0.0.1:5500/assets/data/products.json")
.then(res=>(res.json()))
.then(data=>{
  let li = "";
  data.map(item=>{
    li+=`
    <div data-aos="fade-down" class="col-12 col-sm-6 col-md-4">
    <div class="card ">
        <img  height="300" style="object-fit:contain" src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="search">${item.title}</h5>
         <p>${item.feature}</p>
        <div class="proporties">
        <div class="kilometer"><i class="fa-solid fa-gauge"></i>
        <p class="mile">${item.kilometers}</p>
        </div>
       <div class="type">
       <i class="fa-solid fa-gas-pump"></i>
       <p class="fuel">${item.fueltype}</p>
       </div>
        <div class="gear">
        <i class="fa-solid fa-gear"></i>
        <p class="gearbox">${item.gearbox}</p></div>
        </div>
        <div class="details">
        <h5 class="price">${item.price}</h5>
        <a href="productdetails1.html?id=${item.id}">View Details</a>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </div>
        </div>
      </div>
</div>`
})
    document.querySelector('#cars-list').innerHTML = li;

    AOS.init();

})  
.catch(err=>console.log(err))


document.addEventListener('DOMContentLoaded', (event) => {

  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  document.body.classList.toggle('dark-mode', isDarkMode);

  const darkBtn = document.querySelector('#dark-btn');
  darkBtn.innerHTML = isDarkMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

const darkBtn = document.querySelector('#dark-btn');

function toggleDarkMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);

  darkBtn.innerHTML = isDarkMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

darkBtn.addEventListener('click', toggleDarkMode);


setTimeout(()=>{
     document.querySelector('.pre-loader').style.display = "none"
     document.querySelector('.main-page').style.display = "block"
},1500)


  