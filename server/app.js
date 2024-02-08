// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

// Your code here
app.get('/artists', (req, res) => {
  res.json(getAllArtists())
})

app.post('/artists', (req, res) => {
  res.statusCode = 201
  res.json(addArtist(req.body))
})

app.get('/artists/latest', (req, res) => {
  res.json(getLatestArtist())
})

app.get('/artists/latest/albums', (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get('/artists/:artistId', (req, res) => {
  let id = req.url.split('/')[2]
  res.json(getArtistByArtistId(id))
})

app.put('/artists/:artistId', (req, res) => {
  let id = req.url.split('/')[2]
  res.json(editArtistByArtistId(id, req.body))
})

app.patch('/artists/:artistId', (req, res) => {
  let id = req.url.split('/')[2]
  res.json(editArtistByArtistId(id, req.body))
})

app.delete('/artists/:artistId', (req, res) => {
  let id = req.url.split('/')[2]
  deleteArtistByArtistId(id)
  res.json({message: 'Successfully deleted'})
})

app.get('/artists/:artistId/albums', (req, res) => {
  let id = req.url.split('/')[2]
  res.json(getAlbumsByArtistId(id))
})

app.get('/albums/:albumId', (req, res) => {
  
})





app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next()
})

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
