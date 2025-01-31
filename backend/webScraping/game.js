const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());
/**
 * 
 * @param {*} url La url que se le pasará por el formulario, la cual es un videojuego de Game.es
 * @returns  Devuelve un conjunto de datos del producto como lo es el titulo del videojuego, el precio, la  url de la imagen y la descripción
 */
const scrapearGame = async (url) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  const producto = await page.evaluate(() => {
    
    const titulo= document.querySelector('.product-title').innerText;

    
    const precio = document.querySelector('.buy--price').innerText;

    
    const imagen = document.querySelector('#product-cover').src || 'No image';

    
    const descripción = document.querySelector('#descripcion').innerText;

   

    return {
      titulo,
      precio,
      imagen,
      descripción,
    };
  });

  await browser.close();
  return producto;
};

module.exports = scrapearGame;