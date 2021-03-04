const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', async (req, res) => {
  const newSong = await db.Music.create({
    song: req.body.song,
    artist: req.body.artist,
    album: req.body.album,
  })

  console.log(newSong)
  res.json(newSong)

})

router.get('/:id', async (req, res) => {
  console.log(req.params.id)
  const foundSong = await db.Music.findOne({ _id: req.params.id })
  res.json(foundSong)
})

router.post('/', async (req, res) => {
  const newSong = await db.Music.create({
    song: req.body.song,
    artist: req.body.artist,
    album: req.body.album,
  })
  console.log('song added', newSong)
  res.json(newSong)

})


router.put('/:id', async (req, res) => {
  console.log(req.body)
  const updatedSong = await db.Music.updateOne({ _id: req.params.id },
    {
      song: req.body.song,
      artist: req.body.artist,
      album: req.body.album,
    })

  console.log('updated song', updatedSong)
  res.json(updatedSong)
})



router.delete('/:id', async (req, res, next) => {
  try {
    await db.Music.findByIdAndRemove(req.params.id)
      console.log('successfully deleted')
  } catch (err) {
    next(err)
  }
})
    


  module.exports = router





  