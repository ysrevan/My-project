
const row = document.querySelector('.row')

fetch("http://127.0.0.1:5500/assets/data/productcall.json")
.then(res=>res.json())
.then(data=>{
   let col = ""
   data.map(i=>{
       col+=`
       <div data-aos="fade-down" class="col-12 col-sm-4 col-md-3">
       <div class="card">
       <img src="${i.image}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${i.title}</h5>
             <p>${i.feature}</p>
             <div class="proporties">
             <div class="kilometer"><i class="fa-solid fa-gauge"></i>
             <p class="mile">${i.kilometers}</p>
             </div>
            <div class="type">
            <i class="fa-solid fa-gas-pump"></i>
            <p class="fuel">${i.fueltype}</p>
            </div>
             <div class="gear">
             <i class="fa-solid fa-gear"></i>
             <p class="gearbox">${i.gearbox}</p></div>
             </div>
             <div class="details">
             <h5 class="price">${i.price}</h5>
             <a href="productdetails2.html?id=${i.id}">View Details</a>
             <i class="fa-solid fa-arrow-up-right-from-square"></i>
           </div>
             </div>
           </div>
   </div>
      `
   })
   row.innerHTML = col;
})

AOS.init();



const langData={
   az:["Ana səhifə","Siyahı","Bloq","Mağaza","Haqqımızda","Əlaqə","Giriş","Daxil ol",
   "Ana səhifə/","Siyahı v1","Siyahı v1",
   "BoxCar-a qoşulun","Qiymət yeniləmələri, alış-veriş məsləhətləri və daha çoxunu alın!",
   "Şirkət","Haqqımızda","Bloq","Xidmətlər","Şərtlər","Əlaqə",
   "Sürətli bağlantılar","Əlaqədə ol","Yardım mərkəzi","Qiymətləndirmə","Canlı söhbət","Bu necə işləyir",
   "Bizim Brendlərimiz","Nəqliyyat vasitələrinin növü","Hetçbek","Hibrid","Elektrik","Kupe","Yük maşını","Kabriolet",
   "Mobil Tətbiqimiz","Google Play-ə daxil olun","Apple Store-da endirin","Bizimlə əlaqə saxlayın"
   ],

   en:["Home","Listings","Blog","Shop","About Us","Contact","Sign in","Submit Listing",
   "Home/","Listing v1","Listing v1",
   "Join BoxCar","Receive pricing updates, shopping tips & more!",
   "Company","About Us","Blog","Services","Terms","Contact Us",
   "Quick Links","Get in Touch","Help center","Pricing","Live chat","How it works",
   "Our Brands","Vehicles Type","Hatchback","Hybrid","Electric","Coupe","Truck","Convertible",
   "Our Mobile App","Get in on<br>Google Play","Download on the<br>Apple Store","Connect With Us"
   ]
}




const langBtn = document.querySelector('#lang-btn');
  const langItem = document.querySelectorAll('.lang');
  
  function multiLang() {
    if (langBtn.innerHTML == 'AZ') {
      langBtn.innerHTML = 'EN';
      for (let i in langData.az) {
        langItem[i].innerHTML = langData.az[i]; 
      }
      localStorage.setItem('lang', 'AZ'); 
    } else {
      langBtn.innerHTML = 'AZ';
      for (let i in langData.en) {
        langItem[i].innerHTML = langData.en[i];
      }
      localStorage.setItem('lang', 'EN'); 
    }
  }
  
  langBtn.onclick = multiLang;
  
  
  if (localStorage.getItem("lang")===undefined) {
    localStorage.setItem('lang', 'EN'); 
  }else{
    if (localStorage.getItem('lang') === 'AZ') { 
      langBtn.innerHTML = 'EN';
      for (let i in langData.az) {
        langItem[i].innerHTML = langData.az[i];
      }
    } else {
      langBtn.innerHTML = 'AZ';
      for (let i in langData.en) {
        langItem[i].innerHTML = langData.en[i];
      }
    }
  }
  

