const urlProducts = "https://solovey.com.ua/test/data.json";
const productName = document.querySelector('.banner-productName');
const productLink = document.querySelector('.banner-container');
const productImage = document.querySelector('.product-image');
const productPrice = document.querySelector('.product-price');
const orderBTN = document.querySelector('.banner-btn');

const getProduct = async () => {
    try {
        const response = await fetch(urlProducts);
        if (response.ok) {
            const data = await response.json();
            let newProduct = data.sneakers[Math.floor(Math.random() * data.sneakers.length)]
            productName.innerHTML = newProduct.model;
            productLink.href = newProduct.link;
            productImage.src = newProduct.image_url;
            productPrice.innerHTML = `<span class="product-currency">${data.currency}</span>${newProduct.price}`;
            orderBTN.classList.add('active');
            function remove () {
                orderBTN.classList.remove('active');
            }
            setTimeout(remove,500);
        }
    } catch (error) {
        console.log(error);
    }
};

orderBTN.onclick = getProduct;

