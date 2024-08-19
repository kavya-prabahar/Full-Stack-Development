
if (!sessionStorage.getItem('sessionStarted')) {
    localStorage.removeItem('cart');
    sessionStorage.setItem('sessionStarted', 'true');
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} added to cart!`);
    displayCartItems(); 
}

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const productDiv = document.querySelector('.product p');
    const costDiv = document.querySelector('.cost p');
    let totalCost = 0;

    productDiv.innerHTML = '';
    costDiv.innerHTML = ''; 
    
    cartItems.forEach(item => {
        productDiv.innerHTML += `${item.name}<br>`;
        costDiv.innerHTML += `$${item.price}<br>`;
        totalCost += item.price;
    });

    productDiv.innerHTML += `<b>Total</b><br>`;
    costDiv.innerHTML += `<b>$${totalCost}</b><br>`;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayCartItems);
} else {
    displayCartItems();
}
