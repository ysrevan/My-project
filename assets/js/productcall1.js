
const row = document.querySelector('.row');

fetch("http://127.0.0.1:5500/assets/data/productcall1.json")
    .then(res => res.json())
    .then(data => {
        let col = ""
        data.forEach(i => {
            col += `
                <div data-aos="fade-down" class="col-12 col-sm-6 col-md-4">
                 <div class="card">
                       <img src="${i.image}" class="card-img-top" alt="...">
                     <div class="card-body">
                        <div class="title">
                        <a href="#">${i.owner}</a>
                        <p class="history">${i.history}</p>
                        </div>
                        <h5>${i.name}</h5>
                    </div>
                </div>
            </div>
        `;
    });
    row.innerHTML = col;
})

AOS.init();


const langData={
    az:["Ana səhifə","Siyahı","Bloq","Mağaza","Haqqımızda","Əlaqə",
    "Ana səhifə/","Bloq","Bloq",
    "BoxCar-a qoşulun","Qiymət yeniləmələri, alış-veriş məsləhətləri və daha çoxunu alın!",
    "Şirkət","Haqqımızda","Bloq","Xidmətlər","Şərtlər","Əlaqə",
    "Sürətli bağlantılar","Əlaqədə ol","Yardım mərkəzi","Qiymətləndirmə","Canlı söhbət","Bu necə işləyir",
    "Bizim Brendlərimiz","Nəqliyyat vasitələrinin növü","Hetçbek","Hibrid","Elektrik","Kupe","Yük maşını","Kabriolet",
    "Mobil Tətbiqimiz","Google Play-ə daxil olun","Apple Store-da endirin","Bizimlə əlaqə saxlayın"
    ],
    en:["Home","Listings","Blog","Shop","About Us","Contact",
    "Home/","Blog","Blog",
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