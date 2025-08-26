
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

    productList.forEach(product => {

        const orderCard = document.createElement('div');
        orderCard.classList.add('order-card');

        orderCard.innerHTML = `
            <div class="card-image">
                <img src="${product.image}">
            </div>
            <h4>${product.name}</h4>
            <h4 class="price">${product.price}</h4>
            <a href="#" class="btn card-btn">Add To Cart</a>
        `;

        cardList.appendChild(orderCard);

        const cardBtn = orderCard.querySelector('.card-btn');
        cardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`${product.name} added to cart!`);
        });


    });
};

const addToCart = (product) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('item');

    cartItem.innerHTML = `
        <div class="image-container">
           <img src="images/burger.png">
        </div>
        <div>
            h4>Doubble Beef Burger</h4>
            <h4 class="item-total">$200</h4>
        </div>
        <div class="flex">
            <a href="#" class="quantity-btn">
                <i class="fa-solid fa-minus"></i>
            </a>
            <h4 class="quantity-value">1</h4>
            <a href="#" class="quantity-btn">
                <i class="fa-solid fa-plus"></i>
            </a>
        </div>
    `;
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