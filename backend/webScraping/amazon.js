const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

const scrapearAmazon = async (producto) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
   
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    );

    
    await page.goto(`https://www.amazon.es/s?k=${producto}`, {
      waitUntil: 'networkidle2',
    });

   
    await page.waitForSelector('.s-result-item', { timeout: 5000 });

   
    const precioAmazon = await page.evaluate(() => {
      
      const primerProducto = document.querySelector('.s-result-item');
      if (!primerProducto) return 'Producto no encontrado en Amazon';

      
      const precioElemento = primerProducto.querySelector('.a-price .a-offscreen');
      if (!precioElemento) return 'Precio no disponible';

      return precioElemento.innerText;
    });

    await browser.close();
    return precioAmazon;
  } catch (error) {
    await browser.close();
    throw new Error(`Error al buscar el producto en Amazon: ${error.message}`);
  }
};

module.exports = scrapearAmazon;