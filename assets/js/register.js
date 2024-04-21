const formInput = document.querySelectorAll(".input")
const form = document.querySelector('form');
const myalert = document.querySelector('#myalert');

const register = (e)=>{
      e.preventDefault();
     if (!formInput[0].value || !formInput[1].value || !formInput[2].value || !formInput[3].value || !formInput[4].value) {
        myalert.innerHTML = 'Please fill in the boxes';
        myalert.className = "alert alert-warning";
     }else{
        if (formInput[3].value != formInput[4].value) {
            myalert.innerHTML = 'Password is different';
            myalert.className = "alert alert-danger";
        }else{
            myalert.innerHTML = 'Register is successfull';
            myalert.className = "alert alert-success";
            localStorage.setItem('firstname',formInput[0].value)
            localStorage.setItem('email',formInput[2].value)
            localStorage.setItem('password',formInput[3].value)
            localStorage.setItem('login',"false")
            window.location.assign('login.html');
        }
     }
}
form.onsubmit = register;


const langData={
    az:["Ana səhifə","Siyahı","Bloq","Mağaza","Haqqımızda","Əlaqə","Giriş","Qeydiyyatdan keçin",
    "Qeydiyyatdan keçin","İndi qeydiyyatdan keçin və tətbiqimizə tam giriş əldə edin.","Qeydiyyatdan keç",
    "Facebook ilə daxil olun","Google ilə daxil olun",
    "BoxCar-a qoşulun","Qiymət yeniləmələri, alış-veriş məsləhətləri və daha çoxunu alın!",
    "Şirkət","Haqqımızda","Bloq","Xidmətlər","Şərtlər","Əlaqə",
    "Sürətli bağlantılar","Əlaqədə ol","Yardım mərkəzi","Qiymətləndirmə","Canlı söhbət","Bu necə işləyir",
    "Bizim Brendlərimiz","Nəqliyyat vasitələrinin növü","Hetçbek","Hibrid","Elektrik","Kupe","Yük maşını","Kabriolet",
    "Mobil Tətbiqimiz","Google Play-ə daxil olun","Apple Store-da endirin","Bizimlə əlaqə saxlayın"
    ],

    en:["Home","Listings","Blog","Shop","About Us","Contact","Sign in","Register",
    "Register","Signup now and get full access to our app.","Submit",
    "Login with Facebook","Login with Google",
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