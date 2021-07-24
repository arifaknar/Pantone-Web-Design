
//DOM Erişim Tanımlamaları
const menu = document.querySelector("#menu");
const menuOpenButton = document.querySelector("#menu-open");
const menuCloseButton = document.querySelector("#menu-close");
const images = document.querySelector(".images");
const arrowLeft = document.querySelector(".carousel-control-prevv");
const arrowRight = document.querySelector(".carousel-control-nextt");
const slideNumberElement = document.querySelector("#slide-number");
const productArrowLeft = document.querySelector(".arrow-left");
const productArrowRight = document.querySelector(".arrow-right");
const productInfoElement=document.querySelector("#product-info");
const menuItems=document.querySelector("#menu ul")

const menuContents = {
  kurumsal: "kurumsal",
  kabiliyetlerimiz: [
    "Çocuk Kitabı",
    "Okul Kitabı",
    "Sanatsal Kitap",
    "Roman",
    "Çizgi Roman",
    "Boyama Kitabı",
    "Dergi",
    "Katalog",
    "Takvim",
    "Defter",
    "Broşür",
    "Ajanda",
    "Tanıtım Ürünleri",
  ],
  urunlerimiz: "urunlerimiz",
  bizdenhaberler: "bizdenhaberler",
  iletisim: {
    heading: "Genel Merkez",
    adress: "Akçaburgaz Mah. 137.Sok. No:12 <br> Esenyurt/İstanbul/TÜRKİYE",
    tel: "444 62 18",
    fax: "+90 212 656 2926",
    email: "info@imakofset.com.tr",
    mapButtonText: "Haritada gör",
    directionsButtonText: "Yol tarifi al",
  },
};

const products = [
  { no: "01", name: "Çocuk Kitabı", url: "#", backgrounColor: "264653" },
  { no: "02", name: "Okul Kitabı", url: "#", backgrounColor: "2a9d8f" },
  { no: "03", name: "Sanatsal Kitap", url: "#", backgrounColor: "e9c46a" },
  { no: "04", name: "çizgi Roman", url: "#", backgrounColor: "f4a261" },
  { no: "05", name: "Boyama Kitabı", url: "#", backgrounColor: "e76f51" },
  { no: "06", name: "Sanatsal Kitap", url: "#", backgrounColor: "264653" },
  { no: "07", name: "çizgi Roman", url: "#", backgrounColor: "2a9d8f" },
  { no: "08", name: "Boyama Kitabı", url: "#", backgrounColor: "e9c46a" },
  { no: "09", name: "Sanatsal Kitap", url: "#", backgrounColor: "f4a261" },
  { no: "10", name: "çizgi Roman", url: "#", backgrounColor: "e76f51" },
  { no: "11", name: "Boyama Kitabı", url: "#", backgrounColor: "264653" },
  { no: "12", name: "Sanatsal Kitap", url: "#", backgrounColor: "2a9d8f" },
  { no: "13", name: "çizgi Roman", url: "#", backgrounColor: "e9c46a" },
  { no: "14", name: "Boyama Kitabı", url: "#", backgrounColor: "f4a261" },
  { no: "15", name: "Boyama Kitabı", url: "#", backgrounColor: "e76f51" },
  ];





//UI sınıfına ait ui objesinin tanımlanması
const ui = new Ui();

// Menüyü Gösterme ve Gizleme
const showMenuToUi = () => ui.showMenu();
const hideMenuToUi = () => ui.hideMenu();

//slide-one Slider Düğme Fonksiyonları
const arrowLeftSlideOne = () => {
   ui.arrowLeftSlideOneUI()
   
};
const arrowRightSlideOne= () => {
 ui.arrowRightSlideOneUI()
};

//Product Slider Düğme Fonksiyonları
const arrowRightProduct = () => {
  ui.arrowRightProductUI();
};
const arrowLeftProduct = () => {
  ui.arrowLeftProductUI();
};

//Tüm event listener tanımlamalarının sayfa açılışında yüklenmesi
eventListeners();

// Tüm Event Listenerlar
function eventListeners() {
  document.addEventListener("DOMContentLoaded", getAllProducts(products));
  menu.addEventListener("mouseover", menuEvents);
  menuOpenButton.addEventListener("click", showMenuToUi);
  menuCloseButton.addEventListener("click", hideMenuToUi);
  arrowLeft.addEventListener("click", arrowLeftSlideOne);
  arrowRight.addEventListener("click", arrowRightSlideOne);
  productArrowLeft.addEventListener("click", arrowLeftProduct);
  productArrowRight.addEventListener("click", arrowRightProduct);
  menuItems.addEventListener("click",hideMenuToUi)
}

//Menü item hover olayı
function menuEvents(e) {
  const menuName = e.target.id;
  const condition =
    menuName.trim() != "" &&
    menuName != "iletisim" &&
    menuName != "menu" &&
    menuName != "firstMenuContent" &&
    menuName != "secondMenuContent";

  if (condition) {
    ui.addMenuArrayContent(menuContents[menuName]);
  } else if (menuName == "iletisim") {
    ui.addContactContent(menuContents[menuName]);
  }
}



//Ürünleri Arayüze Getirme
function getAllProducts(products) {
  ui.getProducts(products);
}


