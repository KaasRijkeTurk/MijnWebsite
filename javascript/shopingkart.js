let cart = [];
let cartTotal = 0;
// mijn zus en AI hebben mij geholpen met javascript te schrijven
// functie om items aan winkelwagen toe te voegen
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// update functie voor de winkelwagen
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotalElement = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    cartTotal = 0;

    // rendering van winkelwagen items
    cart.forEach((item, index) => {
        cartTotal += item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>€${item.price.toFixed(2)}</span>
                <button onclick="removeItem(${index})">❌</button>
            </div>
        `;
    });

    cartCount.textContent = cart.length;
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

// item verwijderen uit winkelwagen
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// toggle functie voor winkelwagen weergave
function toggleCart() {
    const cartModal = document.querySelector('.cart-modal');
    cartModal.style.display = cartModal.style.display === 'none' ? 'block' : 'none';
}

// checkout proces met basis validatie
function checkout() {
    if (cart.length === 0) {
        alert('Je winkelwagen is leeg!');
        return;
    }
    alert(`Bedankt voor je bestelling! Totaalbedrag: €${cartTotal.toFixed(2)}`);
    cart = [];
    updateCart();
    toggleCart();
}