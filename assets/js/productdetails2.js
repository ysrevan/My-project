fetch("http://127.0.0.1:5500/assets/data/productcall.json")
.then(res=>res.json())
.then(data=>{
    const urlid = location.href.slice(52,99);

const details = document.querySelector("#details");

const filterData = data.filter(p => p.id ==urlid);
details.innerHTML = `
<div class="container col-xxl-8 px-4 py-5">
<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div class="col-10 col-sm-8 col-lg-6">
    <img src="${filterData[0].image}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
  </div>
  <div class="col-lg-6">
    <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">${filterData[0].title}</h1>
    <p>${filterData[0].feature}</p>
    <div class="features">
    <div class="kilometer"><i class="fa-solid fa-gauge"></i>
    <p>${filterData[0].kilometers}</p>
    </div>
    <div class="type">
    <i class="fa-solid fa-gas-pump"></i>
    <p class="fuel">${filterData[0].fueltype}</p>
    </div>
     <div class="gear">
     <i class="fa-solid fa-gear"></i>
     <p class="gearbox">${filterData[0].gearbox}</p></div>
     </div>
     <p style="width: 80%;" class="mt-3">${filterData[0].lorem}</p>
    </div>
   <div class="back">
   <h1>${filterData[0].price}</h1>
   <a href="../pages/products.html">Back</a>
   </div>
   </div>
   </div>`

})



const langData={
  az:["Ana səhifə","Siyahı","Bloq","Mağaza","Haqqımızda","Əlaqə","Giriş","Daxil ol",
  "BoxCar-a qoşulun","Qiymət yeniləmələri, alış-veriş məsləhətləri və daha çoxunu alın!",
  "Şirkət","Haqqımızda","Bloq","Xidmətlər","Şərtlər","Əlaqə",
  "Sürətli bağlantılar","Əlaqədə ol","Yardım mərkəzi","Qiymətləndirmə","Canlı söhbət","Bu necə işləyir",
  "Bizim Brendlərimiz","Nəqliyyat vasitələrinin növü","Hetçbek","Hibrid","Elektrik","Kupe","Yük maşını","Kabriolet",
  "Mobil Tətbiqimiz","Google Play-ə daxil olun","Apple Store-da endirin","Bizimlə əlaqə saxlayın"
  ],

  en:["Home","Listings","Blog","Shop","About Us","Contact","Sign in","Submit Listing",
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