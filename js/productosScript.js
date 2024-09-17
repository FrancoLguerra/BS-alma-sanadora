let selectNav1 = document.querySelector('#productos');

selectNav1.addEventListener('change', function() {
    let value = selectNav1.value;
    console.log('value', value);
    let url = value + '.html';
    window.location.href = url;
    console.log('url', url);
});

document.addEventListener('DOMContentLoaded', ()=> {
    loadCart();
});

function addToCart(name, price, cant){

    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const product = {name,price,cant};
    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function loadCart(){
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let cartItems = document.getElementById('cartItem');
    cartItems.innerHTML='';

    cart.forEach(element => {
        console.log(item.name, item.price, item.cant);
        cartItems.innerHTML += `<p>${item.name} - $${item.price} - ${item.cant} <button onclick="removeFromCart(${index})">Eliminar</button></p>`
    });
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>El carrito está vacío</p>';
      }
}

