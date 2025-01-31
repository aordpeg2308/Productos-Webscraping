# Comparador de Precios de Videojuegos

¡Bienvenido a **Comparador de Precios de Gane**! Esta aplicación te permite comparar el precio de un videojuego en Amazon con solo pasar el enlace del juego. Además, los precios se guardan en el `localStorage` para que puedas consultarlos más tarde.

## Características

- **Comparación de precios**: Ingresa el enlace de un videojuego de Game.es y obtén su precio en Amazon.
- **Almacenamiento local**: Los precios se guardan en el `localStorage` para que puedas consultarlos en cualquier momento.
- **Web Scraping**: La aplicación utiliza técnicas de scraping para extraer información de precios de Amazon, para eso he utilizado la biblioteca Puppeteer
- **Integración con API**: Se hizo un backend con Node.js para poder hacer el Web Scraping.
- **FrontEnd utilizando Jquery**: Los datos se insertan usando Jquery. 

## Cómo usar

1. **Ingresa el enlace del videojuego**: Copia y pega el enlace del videojuego que deseas comparar.
2. **Compara el precio**: La aplicación te mostrará el precio actual del juego en Amazon.
3. **Guarda el precio**: El precio se guardará automáticamente en el `localStorage` para que puedas consultarlo más tarde.

## Tecnologías utilizadas

- **HTML/CSS/JavaScript/Node**: Para la interfaz de usuario y la lógica de la aplicación.


## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/comparador-precios-videojuegos.git
   ```
2. Instalar todas las dependencia del package.json: para ello suaremos el comando npm install
3. Para que funcione el backend deberemos ejecutar npm start,
2. Abre el archivo `index.html` en tu navegador.



¡Esperamos que disfrutes usando **Comparador de Precios de Videojuegos**! 🎮
