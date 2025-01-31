const express = require('express');
const cors = require('cors');
const scrapearGame = require('./webScraping/game'); 
const scrapearAmazon = require('./webScraping/amazon'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/buscar', async (req, res) => {
  const { url } = req.query;

  try {
    
    const datosJuego = await scrapearGame(url);

    
    const precioAmazon = await scrapearAmazon(datosJuego.titulo);

   
    res.json({
      juego: datosJuego,
      precioAmazon:  precioAmazon,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});