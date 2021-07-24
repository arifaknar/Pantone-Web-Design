//Tanımlamalar
const firstMenuContent = document.querySelector("#firstMenuContent");
const secondMenuContent = document.querySelector("#secondMenuContent");
const productsElement = document.querySelectorAll(".slides")[0];
let productsLeft = 0;
let slideNumber = 1;

//Arayüzle ilgili Sınıf ve fonksiyonlar

class Ui {
  constructor() {}

//   Menü Fonksiyonları

  showMenu() {
    $("#menu").toggleClass("hide");
  }

  hideMenu() {
    $("#menu").toggleClass("hide");

    firstMenuContent.innerHTML = "";
    secondMenuContent.innerHTML = "";
  }

  addMenuArrayContent(content) {
    firstMenuContent.innerHTML = "";
    secondMenuContent.innerHTML = "";
    console.log(content);

    if (typeof content == "object") {
      content.map((item, index) => {
        if (index < 9) {
          firstMenuContent.innerHTML =
            firstMenuContent.innerHTML + `<li>${item}</li>`;
        } else {
          secondMenuContent.innerHTML =
            secondMenuContent.innerHTML + `<li>${item}</li>`;
        }
      });
    } else if (content != undefined) {
      firstMenuContent.innerHTML = `<li>${content}</li>`;
    }
  }

  addContactContent(content) {
    secondMenuContent.innerHTML = "";
    firstMenuContent.innerHTML = `
        <div style="margin-bottom:20px" id="contact-heading"><h3 > ${content.heading} </h3></div>
        <div id="contact-content"></div>
        <li style="margin-bottom:40px" > ${content.adress}</li> 
        <li><b>Tel:</b> ${content.tel}</li> 
        <li><b>Faks:</b>  ${content.fax}</li>
        <li style="margin-bottom:30px"><b>Eposta:</b><a href="mailto:${content.email}"> ${content.email}</a> </li>  
        <a href="#" class="btn btn-green" style="margin-right:10px">${content.mapButtonText}</a>
        <a href="#" class="btn btn-orange">${content.directionsButtonText}</a>
        
        `;
  }


// Sayfa Açılışında Ürünleri Getirme

  getProducts(products) {
    products.map((product) => {
      productsElement.innerHTML += `
            <div class="product-card" style="background-color:#${product.backgrounColor}">
            <div class="product-no">${product.no}.</div>
            <div class="product-name">${product.name}</div>
            <div class="product-url"><a href="${product.url}">Detaylı bilgi al</a> </div>
        </div>`;
    });
  }

  //slide-one Slider Düğme Fonksiyonları
  arrowLeftSlideOneUI(){
    slideNumber--;
    if(slideNumber<1){
     slideNumber=3
    } 
    
    slideNumberElement.innerHTML = slideNumber;
    
  }
  arrowRightSlideOneUI(){
    slideNumber++;
    if(slideNumber>3){
      slideNumber=1;
    } 
    slideNumberElement.innerHTML = slideNumber;

  }
  // Product Slider Düğme Fonksiyonları

  arrowLeftProductUI(){
        if(productsLeft!=0)
        {
           productsLeft += 280;
        productsElement.style.left = `${productsLeft}px`;
        console.log(productsElement.style.left);
        }
       
      }
  
    arrowRightProductUI(){
      const condition=-((products.length-1)*270.6)
      console.log(condition)
          if(productsLeft>condition){
            productsLeft -= 280;
          productsElement.style.left = `${productsLeft}px`;
          console.log(productsElement.style.left);
          }
         
        }
      
}

