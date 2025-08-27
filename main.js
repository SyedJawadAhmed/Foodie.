
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
const cartList = document.querySelector('.cart-list');


cartIcon.addEventListener("click", () => cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener("click", () => cartTab.classList.remove('cart-tab-active'));

let productList = [];
let cartProduct = [];

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
            addToCart(product);
        });


    });
};

const addToCart = (product) => {

    const existingProduct = cartProduct.find(item => item.id === product.id);
    if (existingProduct) {

        alert('Product is already in the cart');
        return;
    }

    cartProduct.push(product);

    let quantity = 0;

    const cartItem = document.createElement('div');
    cartItem.classList.add('item');

    cartItem.innerHTML = `
        <div class="image-container">
           <img src="${product.image}">
        </div>
        <div>
            <h4>${product.name}</h4>
            <h4 class="item-total">${product.price}</h4>
        </div>
        <div class="flex">
            <a href="#" class="quantity-btn minus">
                <i class="fa-solid fa-minus"></i>
            </a>
            <h4 class="quantity-value">${quantity}</h4>
            <a href="#" class="quantity-btn plus">
                <i class="fa-solid fa-plus"></i>
            </a>
        </div>
    `;
    cartList.appendChild(cartItem);

    const minusBtn = cartItem.querySelector('.minus');
    const plusBtn = cartItem.querySelector('.plus');
    const quantityValue = cartItem.querySelector('.quantity-value');

    plusBtn.addEventListener('click', (e) => {

        e.preventDefault();
        quantity++;
        quantityValue.textContent = quantity;
    });

    minusBtn.addEventListener('click', (e) => {

        e.preventDefault();
        if (quantity > 0) {
            quantity--;
            quantityValue.textContent = quantity;
        }
    });
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