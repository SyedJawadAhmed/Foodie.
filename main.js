
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

const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.Close-btn');
const cardList = document.querySelector('.card-list');

 
cartIcon.addEventListener("click", () => cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener("click", () => cartTab.classList.remove('cart-tab-active'));

let productList = [];

const showCard = () => {

    productList.forEach(product =>{

        const orderCard = document.createElement('div');
        orderCard.classList.add('order-card');

        orderCard.innerHTML = `
            <div class="card-image">
                <img src="${product.image}">
            </div>
            <h4>${product.name}</h4>
            <h4 class="price">${product.price}</h4>
            <a href="#" class="btn">Add To Cart</a>
        `;
        
        cardList.appendChild(orderCard);
    })
}

const initApp = () => {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            productList = data;
            showCard(); 
        });
}

initApp();