
console.log('this is loaded');
module.exports = {
  spotify: {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  },
  omdb: {
    api_key: process.env.OMDB_API_KEY
  }
};