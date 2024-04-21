const loginContact = document.querySelectorAll(".input");
const loginRegister = document.querySelector('#contact-form');
const myalertRegister = document.querySelector('#myalert');

const authContact = (e) => {
  e.preventDefault();
  if (!loginContact[0].value || !loginContact[1].value || !loginContact[2].value || !loginContact[3].value || !loginContact[4].value) {
    myalertRegister.innerHTML = 'Please fill in the boxes';
    myalertRegister.className = "alert alert-warning";
  } else {
    myalertRegister.innerHTML = 'Contact success';
    myalertRegister.className = "alert alert-success";
  }
}

loginRegister.addEventListener('submit', authContact);

(function() {
  emailjs.init({
    publicKey: "x2iYBk0BRxVcgTPvy",
  });
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_5wuiuvj', 'template_wkabjg9', this)
          .then(() => {
              console.log('SUCCESS!');
          }, (error) => {
              console.log('FAILED...', error);
          });
  });
}

const langData={
  az:["Ana səhifə","Siyahı","Bloq","Mağaza","Haqqımızda","Əlaqə",
  "Ana səhifə/","Bizimlə əlaqə","Bizimlə əlaqə","Əlaqə saxlayın",
  "Məlumatlarınızı yazın suallarınızı verin və biz sizə kömək edək.",
  "Əlaqə məlumatları","Məlumatlarınızı yazın suallarınızı verin və biz sizə kömək edək.",
  "Adress<br>123 Queensberry Küçəsi, North<br>Melbourne VIC3051, Australia.",
  "Telefon<br>+76 956 123 456","Bizi izlə","Ofislərimiz","Xəritədə baxın","Xəritədə baxın","Xəritədə baxın",
  "BoxCar-a qoşulun","Qiymət yeniləmələri, alış-veriş məsləhətləri və daha çoxunu alın!",
  "Şirkət","Haqqımızda","Bloq","Xidmətlər","Şərtlər","Əlaqə",
  "Sürətli bağlantılar","Əlaqədə ol","Yardım mərkəzi","Qiymətləndirmə","Canlı söhbət","Bu necə işləyir",
  "Bizim Brendlərimiz","Nəqliyyat vasitələrinin növü","Hetçbek","Hibrid","Elektrik","Kupe","Yük maşını","Kabriolet",
  "Mobil Tətbiqimiz","Google Play-ə daxil olun","Apple Store-da endirin","Bizimlə əlaqə saxlayın"
  ],

  en:["Home","Listings","Blog","Shop","About Us","Contact",
  "Home/","Contact Us","Contact Us","Get In Touch",
  "Etiam pharetra egestas interdum blandit viverra morbi consequat mi non bibendum egestas quam egestas nulla.",
  "Contact details","Etiam pharetra egestas interdum blandit viverra morbi<br>consequat mi non bibendum egestas quam egestas nulla.",
  "Address<br>123 Queensberry Street, North<br>Melbourne VIC3051, Australia.",
  "Phone<br>+76 956 123 456","Follow us","Our Offices","See on Map","See on Map","See on Map",
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
  