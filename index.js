const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')

require('dotenv/config')
app.use(bodyParser.json())

const wisataRoutes = require("./routes/wisata")
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'images');
  },
  filename: (req, file, cb)=>{
    cb(null, new Date().getTime() + '-' + file.originalname)
  }
})

const fileFilterImg = (req, file, cb) =>{
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/webp') {
    cb(null, true)
  }else{
    cb(null, false)
  }
}

// app.use('/images', express.static(path.join(__dirname, 'images')));
// app.use(multer({storage: fileStorage}).single('image'));
app.use(multer({storage: fileStorage, fileFilter: fileFilterImg}).fields([{name: 'image', maxCount:1}, {name: 'galeries'}]));
app.use('/wisata', wisataRoutes)

app.get('/images/:filename', (req, res) => {
  res.sendFile(path.join(__dirname + '/images' + req.params.filename));
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect error'))
db.once('open', () => { console.log('Database is connected') })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})