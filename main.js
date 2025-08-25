
var swiper = new Swiper(".mySwiper", {
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: "#Next",
        prevEl: "#Prev",
    },
});

const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".Close-btn");

cartIcon.addEventListener("click",()=> cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener("click",()=> cartTab.classList.remove('cart-tab-active'));

let productList = [];

const initApp = () =>{
    fetch('products')
}