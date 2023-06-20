const { API_KEY, API_URL } = process.env;
const { Genre } = require('../db.js');
const axios = require('axios').default;

async function getGenresFromApi() {
  const url = `${API_URL}/genres?key=${API_KEY}`;
  const response = await axios.get(url, { timeout: 50000, signal: AbortSignal.timeout(50000)});

  return response.data;
}

async function seedGenresFromApi() {
  const genresFromDb = await Genre.findAll({ limit: 1 })
  if (genresFromDb.length <= 0) {
    const genresFromApi = await getGenresFromApi();
    try {
      await Genre.bulkCreate(genresFromApi.results.map(x => ({
        name: x.name
      })))
      console.log('Genres saved successfully from API.')
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = {
  getGenresFromApi,
  seedGenresFromApi
}