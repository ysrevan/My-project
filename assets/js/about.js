const langData ={
    az:["Ana səhifə","Siyahı","Bloq","Mağaza","Haqqımızda","Əlaqə","Giriş","Daxil ol",
    "Ana səhifə/","Haqqımızda","Haqqımızda","Biz Müştərilərimiz Dəyərlidir və Onların Gözəl Təcrübəsinin Olmasını İstəyirik",
    "Biz müşdərilərimizə ən gözəl xidməti göstərməyə çalışırıq ",
    "Bizim müşdərilərimiz həmişə bizə güvənir və biz onlara bacardığımız<br>qədər bildiyimiz hər bir şeyi izah edirik. Onlara ən yaxşısını seçməkdı kömək edirik və ən yaxşılarını tövsiyə edirik.",
    "Bizi seçdiyiniz üçün sizə təşəkkür edirik.","45 Illik Biznes",
    "Niyə bizi seçməlisiniz?","Xüsusi Maliyyə Təklifləri","Pulunuza qənaət etmək üçün maliyyə həlləri tapa bilən stresssiz maliyyə departamentimiz.",
    "Etibarlı Avtomobil Satıcısı","Pulunuza qənaət etmək üçün maliyyə həlləri tapa bilən stresssiz maliyyə departamentimiz.",
    "Şəffaf Qiymətləndirmə","Pulunuza qənaət etmək üçün maliyyə həlləri tapa bilən stresssiz maliyyə departamentimiz.",
    "Mütəxəssis Avtomobil Xidməti","Pulunuza qənaət etmək üçün maliyyə həlləri tapa bilən stresssiz maliyyə departamentimiz.",
    "Öz avtomobilinizi burda tapın","Biz müştərilərimizə geniş çeşid təklif edirik",
    "Biz Böyük Britaniyanın ən böyük provayderiyik","24/7 yolkənarı yardım alırsınız","5 maşından 4-nü yol kənarında düzəldirik",
    "Indi Başla","SATILIR MAŞINLAR","MÜŞDƏRİ RƏYLƏRİ","GÜNLÜK ZİYARƏTÇİLƏR","YOXLANMIŞ MÜŞDƏRİ",
    "Premium Brendlərimizi Araşdırın","Bütün Brendləri göstərin","Bizim Komanda","Hamısına Baxın",
    "İnkişaf Meneceri","Proqram təminatı yoxlayıcısı","Proqram Tərtibatçısı","UI/UX Dizayner",
    "BoxCar-a qoşulun","Qiymət yeniləmələri, alış-veriş məsləhətləri və daha çoxunu alın!",
    "Şirkət","Haqqımızda","Bloq","Xidmətlər","Şərtlər","Əlaqə",
    "Sürətli bağlantılar","Əlaqədə ol","Yardım mərkəzi","Qiymətləndirmə","Canlı söhbət","Bu necə işləyir",
    "Bizim Brendlərimiz","Nəqliyyat vasitələrinin növü","Hetçbek","Hibrid","Elektrik","Kupe","Yük maşını","Kabriolet",
    "Mobil Tətbiqimiz","Google Play-ə daxil olun","Apple Store-da endirin","Bizimlə əlaqə saxlayın"
],

    en:["Home","Listings","Blog","Shop","About Us","Contact","Sign in","Submit Listing",
    "Home/","About Us","About Us","We Value Our Clients And<br> Want Them To Have A<br> Nice Experience",
    "Lorem ipsum dolor sit amet consectetur. Convallis integer enim eget sit urna. Eu duis lectus<br>amet vestibulum varius. Nibh tellus sit sit at lorem facilisis. Nunc vulputate ac interdum<br> aliquet vestibulum in tellus.",
    "Sit convallis rhoncus dolor purus amet orci urna. Lobortis vulputate vestibulum consectetur <br>donec ipsum egestas velit laoreet justo. Eu dignissim egestas egestas ipsum. Sit est nunc<br>pellentesque at a aliquam ultrices consequat. Velit duis velit nec amet eget eu morbi. Libero<br>non diam sit viverra dignissim. Aliquam tincidunt in cursus euismod enim.",
    "Magna odio sed ornare ultrices. Id lectus mi amet sit at sit arcu mi nisl. Mauris egestas arcu <br>mauris.","45<br>Years in Business",
    "Why Choose Us?","Special Financing Offers","Our stress-free finance department that can find financial solutions to save you money.",
    "Trusted Car Dealership","Our stress-free finance department that can find financial solutions to save you money.",
    "Transparent Pricing","Our stress-free finance department that can find financial solutions to save you money.",
    "Expert Car Service","Our stress-free finance department that can find financial solutions to save you money.",
    "Get A Fair Price For<br> Your Car Sell To Us<br> Today","We are committed to providing our customers with<br>exceptional service, competitive pricing, and a wide range<br> of.",
    "We are the UK’s largest provider, with more patrols<br> in more places","You get 24/7 roadside assistance","We fix 4 out of 5 cars at the roadside",
    "Get Started","CARS FOR SALE","DEALER REVIEWS","VISITORS PER DAY","VERIFIED DEALERS",
    "Explore Our Premium Brands","Show All Brands","Our Team","View All",
    "Development Manager","Software Tester","Software Developer","UI/UX Designer",
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
  