$(document).ready(function () {
  $('#formulario').on('submit', function (e) {
    e.preventDefault();

    const url = $('#url').val();
    const mensaje = $('#mensaje');

    if (!url) {
      mensaje.text('Por favor, ingresa una URL válida.').css('color', 'red');
      return;
    }

    $.ajax({
      url: `http://localhost:3000/buscar?url=${encodeURIComponent(url)}`,
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        if (data.error) {
          mensaje.text(`Error: ${data.error}`).css('color', 'red');
          return;
        }

        let productos = JSON.parse(localStorage.getItem('productos')) || [];

        const existe = productos.some((producto) => producto.juego.titulo === data.juego.titulo);
        if (existe) {
          mensaje.text('Este producto ya está en tu lista.').css('color', 'red');
          return;
        }

        productos.push(data);
        localStorage.setItem('productos', JSON.stringify(productos));

        mensaje.text('Producto agregado correctamente.').css('color', 'green');
      },
      error: function (error) {
        mensaje.text(`Error: ${error.message}`).css('color', 'red');
      }
    });
  });
});
