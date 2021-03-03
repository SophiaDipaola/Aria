const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
    content: String,
    date: Date
});


const musicSchema = new mongoose.Schema({
    song: String,
    artist: String,
    album: String,
    //embedded
    review: [reviewSchema]
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music