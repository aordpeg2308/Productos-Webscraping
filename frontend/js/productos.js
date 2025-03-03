$(document).ready(function () {
  /**
   * Funcion que mostrará los productos de dentro del localStorage
   * @returns  devuvelve todos los productos
   */
  function mostrarProductos() {
    let listaProductos = $('#lista-productos');
    let productos = JSON.parse(localStorage.getItem('productos')) || [];

    if (productos.length === 0) {
      listaProductos.html('<p>No hay productos guardados.</p>');
      return;
    }

    listaProductos.html(
      productos.map((producto, index) => `
        <div class="producto">
          <h2>${producto.juego.titulo}</h2>
          <img src="${producto.juego.imagen}" alt="${producto.juego.titulo}" class="imagen-juego">
          <p><strong>Precio en Game:</strong> ${producto.juego.precio}</p>
          <p><strong>Precio en Amazon:</strong> ${producto.precioAmazon}</p>
          <p><strong>Descripción:</strong> ${producto.juego.descripción}</p>
          <button class="eliminar" data-index="${index}">Eliminar</button>
        </div>
      `).join('')
    );
  }

  /**
   * Funcion que se utiliza para eliminar el producto
   * @param {} index  la posición en la que se localiza el producto
   *  Después  modificará el localStorage  y lo mostrará con el producto eliminado
   */

  function eliminarProducto(index) {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    if (index < 0 || index >= productos.length) return;
    productos.splice(index, 1);
    localStorage.setItem('productos', JSON.stringify(productos));
    mostrarProductos();
  }

  $('#lista-productos').on('click', '.eliminar', function () {
    let index = $(this).data('index');
    eliminarProducto(index);
  });

  mostrarProductos();
});