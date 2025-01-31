const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());



async function scrapearAmazon(nombreProducto) {
    try {
     
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        
        await page.setUserAgent(
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        );

        
        const url = `https://www.amazon.es/s?k=${encodeURIComponent(nombreProducto)}`;
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        
        await page.waitForSelector('[role="listitem"]');

        
        const precio = await page.evaluate(() => {
            const primerItem = document.querySelector('[role="listitem"]');
            if (!primerItem) return 'No disponible';

            const priceWhole = primerItem.querySelector('.a-price-whole');
            const priceFraction = primerItem.querySelector('.a-price-fraction');

            let price = priceWhole ? priceWhole.innerText : 'No disponible';
            price += priceFraction ? priceFraction.innerText : '';
            return price.replace(/\n/g, '') + '€';
        });

     
        await browser.close();

        
        return precio;
    } catch (error) {
        console.error("Error al obtener el precio de Amazon:", error);
        return 'Error';
    }
}





module.exports = scrapearAmazon;