let selectNav = document.querySelector('#productos');

selectNav.addEventListener('change', function() {
    let value = selectNav.value;
    let url = value + '.html';
    window.location.href = url;
    console.log('url', url);
});
// Inicializar el carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar productos al carrito
function agregarProducto(id, nombre, precio) {
  // Verificar si el producto ya está en el carrito
  const productoExistente = carrito.find(producto => producto.id === id);

  if (productoExistente) {
    // Si existe, incrementa la cantidad
    productoExistente.cantidad++;
  } else {
    // Si no existe, agregar nuevo producto con cantidad 1
    const nuevoProducto = { id, nombre, precio, cantidad: 1 };
    carrito.push(nuevoProducto);
  }

  // Guardar el carrito actualizado en localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Actualizar la visualización del carrito
  //mostrarCarrito();
  console.log(carrito);
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
  const itemsCarrito = document.getElementById('items-carrito');
  itemsCarrito.innerHTML = '';

  // Si el carrito está vacío
  if (carrito.length === 0) {
    itemsCarrito.innerHTML = '<p>El carrito está vacío.</p>';
    return;
  }

  // Mostrar productos del carrito
  carrito.forEach(producto => {
    const item = document.createElement('div');
    item.innerHTML = `
      <p>${producto.nombre} - $${producto.precio} x ${producto.cantidad}</p>
    `;
    itemsCarrito.appendChild(item);
  });
}
function descontarProducto(id,nombre,precio){
   
        // Verificar si el producto ya está en el carrito
        const productoExistente = carrito.find(producto => producto.id === id);
      
        if (productoExistente) {
          if(productoExistente.cantidad>1){

              productoExistente.cantidad--;
            }
            else{
                eliminarProducto(id);
            }
        }
      
        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
      
        // Actualizar la visualización del carrito
        //mostrarCarrito();
}

function eliminarProducto(id){
    console.log("entrando a eliminar")
    carrito = carrito.filter(producto => producto.id !== id);
    console.log(carrito);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
}
// Cargar el carrito al iniciar la página
//document.addEventListener('DOMContentLoaded', mostrarCarrito);
