function loadInvoice() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let invoiceHTML = '';
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        invoiceHTML += `<p>${item.name} - $${item.price}</p>`;
        subtotal += item.price;
    });
    
    const tax = subtotal * 0.15;
    const total = subtotal + tax;

    invoiceHTML += `<p>Subtotal: $${subtotal.toFixed(2)}</p>`;
    invoiceHTML += `<p>Tax (15%): $${tax.toFixed(2)}</p>`;
    invoiceHTML += `<p>Total: $${total.toFixed(2)}</p>`;
    
    document.getElementById('invoiceDetails').innerHTML = invoiceHTML;
}

if (window.location.pathname.endsWith('invoice.html')) {
    loadInvoice();
}
