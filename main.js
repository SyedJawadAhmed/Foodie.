
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