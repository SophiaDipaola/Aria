const express = require('express')
const app = express()
const controllers = require('./controllers')
const cors = require('cors')
require('dotenv').config()


const port = process.env.PORT || 8000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors()); 

app.get('/v1', (req, res)=> {
  res.json({greeting: 'Welcome to Aria'})
})


 app.use('/v1/aria', controllers.music)

const server = app.listen(port, ()=> console.log('server is running on port ' + port))

module.exports = server;