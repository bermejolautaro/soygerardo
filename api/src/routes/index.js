require('dotenv').config();
const { API_KEY, API_URL } = process.env;
const { Router } = require('express');
const { Videogame } = require('../db.js');

const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', async (req, res) => {
  try {
    let url = `${API_URL}/games?key=${API_KEY}`;

    if(req.query.name) {
      url = `${url}&search=${req.query.name.toLowerCase()}&page_size=15`
    }

    const response = await axios.get(url);
    res.json(response.data)
  } catch (e) {
    console.log(e);
  }
})

router.get('/videogames/:videogameId', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/games/${req.params.videogameId}?key=${API_KEY}`);
    res.json(response.data);
  } catch (e) {
    console.log(e);
  }
})

router.get('/videogames/name', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/games/${req.params.videogameId}?key=${API_KEY}`);
    res.json(response.data);
  } catch (e) {
    console.log(e);
  }
})

router.post('/videogames', async (req, res) => {
  const {
    name,
    description,
    rating,
    releaseDate,
    image
  } = req.body;


  try {
    const newVideoGame = await Videogame.create({
      name,
      description,
      rating,
      releaseDate,
      image
    })

    res.json(newVideoGame);
  } catch(e) {
    console.log(e);
  }
});

router.get('/genres', async (req, res) => {

})


module.exports = router;
