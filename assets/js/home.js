const langData={

    az:["Ana səhifə","Siyahı","Bloq","Mağaza","Haqqımızda","Əlaqə",
    "Sizə yaxın satış və kirayə avtomobilləri tapın", "Mükəmməl Avtomobilinizi Tapın",
    "Hamısı","Yeni","Isdifadə olunmuş","Başqa Markalar","Başqa Modellər","Qiymətlər:Bütün Qiymətlər",
    "Avtomobil Axtar","Və ya Seçilmiş Modeli Gözdən keçirin","Premium Brendlərimizi Araşdırın",
    "Bütün Brendləri göstərin","Bütün Vasitələri Araşdırın","Hamısına Baxın",
    "Öz avtomobilinizi burda tapın","Biz müştərilərimizə geniş çeşid təklif edirik",
    "Biz Böyük Britaniyanın ən böyük provayderiyik","24/7 yolkənarı yardım alırsınız","5 maşından 4-nü yol kənarında düzəldirik",
    "Indi Başla","SATILIR MAŞINLAR","MÜŞDƏRİ RƏYLƏRİ","GÜNLÜK ZİYARƏTÇİLƏR","YOXLANMIŞ MÜŞDƏRİ",
    "Niyə bizi seçməlisiniz?","Xüsusi Maliyyə Təklifləri","Pulunuza qənaət etmək üçün maliyyə həlləri tapa bilən stresssiz maliyyə departamentimiz.",
    "Etibarlı Avtomobil Satıcısı","Pulunuza qənaət etmək üçün maliyyə həlləri tapa bilən stresssiz maliyyə departamentimiz.",
    "Şəffaf Qiymətləndirmə","Pulunuza qənaət etmək üçün maliyyə həlləri tapa bilən stresssiz maliyyə departamentimiz.",
    "Mütəxəssis Avtomobil Xidməti","Pulunuza qənaət etmək üçün maliyyə həlləri tapa bilən stresssiz maliyyə departamentimiz.",
    "Ən son Bloq Yazıları","Hamısına Baxın","22 noyabr 2023-cü il","2024 BMW ALPINA XB7 eksklüziv detallarla, qeyri-adi",
    "22 noyabr 2023-cü il","BMW X6 M50i ən idman üslubunuzu aşmaq üçün nəzərdə tutulmuşdur.",
    "22 noyabr 2023-cü il","BMW X5 Gold 2024 İdman İcmalı:İşıq yandırılır İdman",
    "Axtarırsan Avtomobil üçün?","Biz müştərilərimizə müstəsna xidmət göstəririk.","Başla",
    "Avtomobil Satmaq İstəyirsən?","Biz müştərilərimizə müstəsna xidmət göstəririk","Başla",
    "BoxCar-a qoşulun","Qiymət yeniləmələri, alış-veriş məsləhətləri və daha çoxunu alın!",
    "Şirkət","Haqqımızda","Bloq","Xidmətlər","Şərtlər","Əlaqə",
    "Sürətli bağlantılar","Əlaqədə ol","Yardım mərkəzi","Qiymətləndirmə","Canlı söhbət","Bu necə işləyir",
    "Bizim Brendlərimiz","Nəqliyyat vasitələrinin növü","Hetçbek","Hibrid","Elektrik","Kupe","Yük maşını","Kabriolet",
    "Mobil Tətbiqimiz","Google Play-ə daxil olun","Apple Store-da endirin","Bizimlə əlaqə saxlayın"
  ],
  
  
    en:["Home","Listings","Blog","Shop","About Us","Contact",
    "Find cars for sale and for rent near you","Find Your Perfect Car",
    "All","New","Used","Any Makes","Any Models","Prices:All Prices",
    "Search Cars","Or Browse Featured Model","Explore Our Premium Brands",
    "Show All Brands","Explore All Vehicles","View All",
    "Get A Fair Price For<br> Your Car Sell To Us<br> Today","We are committed to providing our customers with<br>exceptional service, competitive pricing, and a wide range<br> of.",
    "We are the UK’s largest provider, with more patrols<br> in more places","You get 24/7 roadside assistance","We fix 4 out of 5 cars at the roadside",
    "Get Started","CARS FOR SALE","DEALER REVIEWS","VISITORS PER DAY","VERIFIED DEALERS",
    "Why Choose Us?","Special Financing Offers","Our stress-free finance department that can find financial solutions to save you money.",
    "Trusted Car Dealership","Our stress-free finance department that can find financial solutions to save you money.",
    "Transparent Pricing","Our stress-free finance department that can find financial solutions to save you money.",
    "Expert Car Service","Our stress-free finance department that can find financial solutions to save you money.",
    "Latest Blog Posts","View All","November 22,2023","2024 BMW ALPINA XB7 with exclusive details,extraordinary",
    "November 22,2023","BMW X6 M50i is designed to exceed your<br> sportiest.",
    "November 22,2023","BMW X5 Gold 2024 Sport Review:Light on<br> Sport",
    "Are You Looking<br>For a Car ?","We are committed to providing our customers with<br> exceptional service.","Get Started",
    "Do You Want to<br>Sell a Car ?","We are committed to providing our customers with<br> exceptional service.","Get Started",
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
  
