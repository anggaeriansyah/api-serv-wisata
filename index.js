const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const respons = require('./respons')
const mongoose = require('mongoose')
require('dotenv/config')
app.use(bodyParser.json())

const wisataRoutes = require("./routes/wisata")

app.use('/wisata', wisataRoutes)

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect error'))
db.once('open', () => { console.log('Database is connected') })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})