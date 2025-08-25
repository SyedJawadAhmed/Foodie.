
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

cartIcon.addEventListener("click", () => cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener("click", () => cartTab.classList.remove('cart-tab-active'));

let productList = [];

const showCard = () => {

    productList.forEach(product => {

        const orderCard = document.createElement('div');
        orderCard.classList.add('order-card');

        orderCard.innerHTML = `
        
            <div class="card-image">
                <img src="images/burger.png" alt="">
            </div>
            <h4>Doubble Beef Burger</h4>
            <h4 class="price">$200</h4>
            <a href="#" class="btn">Add To Cart</a>
        `;
    })
}

const initApp = () => {

    fetch('products.json').then(response => response.json()).then(data => {
        productList = data;
        console.log(productList);
    })
}

initApp();