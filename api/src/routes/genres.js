const { Router } = require('express');
const { Genre } = require('../db.js');

const router = Router();

router.get('/', async (req, res) => {
  res.json(await Genre.findAll());
})

module.exports = router;