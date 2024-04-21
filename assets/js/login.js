// Login Start
const databaseUser = {
    email: localStorage.getItem('email') ,
    password: localStorage.getItem('password'),
  }
  
  const loginInput = document.querySelectorAll(".form-control");
  const loginForm = document.querySelector('form');
  const myalert = document.querySelector('#myalert');
  
  const authLogin = (e) => {
    e.preventDefault();
    if (!loginInput[0].value || !loginInput[1].value) {
      myalert.innerHTML = 'Please fill in both email and password';
      myalert.className = "alert alert-warning";
    } else {
      if (loginInput[0].value === databaseUser.email && loginInput[1].value === databaseUser.password) {
        myalert.innerHTML = 'Login successful';
        myalert.className = "alert alert-success";
        window.location.assign('home.html');
        localStorage.setItem('login',"true")
      } else {
        myalert.innerHTML = 'Email or password is wrong';
        myalert.className = "alert alert-danger";
      }
    }
  }
  
  loginForm.addEventListener('submit', authLogin);
// Login End


const langData ={
  az:["Ana səhifə","Siyahı","Bloq","Mağaza","Haqqımızda","Əlaqə","Giriş","Qeydiyyatdan keçin",
  "Hesabınıza daxil olun","Daxil ol","Hesab yoxdur?","YOXSA","Facebook ilə daxil olun","Google ilə daxil olun",
  "İstifadəçi adı: demo","Parol: demo",
  "BoxCar-a qoşulun","Qiymət yeniləmələri, alış-veriş məsləhətləri və daha çoxunu alın!",
  "Şirkət","Haqqımızda","Bloq","Xidmətlər","Şərtlər","Əlaqə",
  "Sürətli bağlantılar","Əlaqədə ol","Yardım mərkəzi","Qiymətləndirmə","Canlı söhbət","Bu necə işləyir",
  "Bizim Brendlərimiz","Nəqliyyat vasitələrinin növü","Hetçbek","Hibrid","Elektrik","Kupe","Yük maşını","Kabriolet",
  "Mobil Tətbiqimiz","Google Play-ə daxil olun","Apple Store-da endirin","Bizimlə əlaqə saxlayın"],

  en:["Home","Listings","Blog","Shop","About Us","Contact","Sign in","Register",
  "Sign in to your account","Login","No account?","OR","Login with Facebook","Login with Google",
  "Username: demo","Password: demo",
  "Join BoxCar","Receive pricing updates, shopping tips & more!",
  "Company","About Us","Blog","Services","Terms","Contact Us",
  "Quick Links","Get in Touch","Help center","Pricing","Live chat","How it works",
  "Our Brands","Vehicles Type","Hatchback","Hybrid","Electric","Coupe","Truck","Convertible",
  "Our Mobile App","Get in on<br>Google Play","Download on the<br>Apple Store","Connect With Us"]
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