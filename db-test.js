const db = require('./models')



const addSong = async()=>{
    const newSong = await db.Music.create({
            song: 'I hate U, I love you',
            artist: 'Olivia Obrien',
            album: 'Us',

    })
    console.log(newSong)
}

 addSong()

const addReview = async ()=> {
    const foundSong = await db.Music.findOne({artist:'Olivia Obrien'})
    console.log(foundSong)

    foundSong.review.push({
        content:'This song really hits home. It helped me so much after my breakup',
        date: new Date()
    })
    
    await foundSong.save()
    
    console.log(foundSong)
}

addReview()

const findSongById = async(songId)=>{
    const foundSong = await db.Music.findOne({_id: songId})
    console.log(foundSong)
}
findSongById('603f0936aec24f3195eacd4c')

const findSongDeleteAReview = async (songId, reviewId)=>{
    const foundSong = await db.Music.findOne({_id: songId})

    await foundSong.review.id(reviewId).remove()
    console.log(foundSong)
}

findSongDeleteAReview('603f0936aec24f3195eacd4c','603f1410bfe6aa3589463dbb')
