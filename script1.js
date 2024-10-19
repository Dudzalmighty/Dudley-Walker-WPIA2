const cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} added to cart!`);
}

function checkout() {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'invoice.html';
}
