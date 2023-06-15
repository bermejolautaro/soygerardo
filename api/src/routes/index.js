const { Router } = require('express');

const router = Router();

// Importar todos los routers;
const videogamesRouter = require('./videogames.js');
const genresRouter = require('./genres.js');

// Configurar los routers
router.use('/videogames', videogamesRouter)
router.use('/genres', genresRouter);

module.exports = router;
