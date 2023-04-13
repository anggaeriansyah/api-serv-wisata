const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
// const db = require('./connection')
const respons = require('./respons')
const mongoose = require('mongoose')
require('dotenv/config')
app.use(bodyParser.json())
app.use(cors())

const wisataRoutes = require("./routes/wisata")

app.use('/wisata', wisataRoutes)

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect error'))
db.once('open', () => { console.log('Database is connected') })

// app.get('/', (req, res) => {
//   connection.find({}).then(model => {   // <-- Update to your call of choice.
//     res.json({ model });
//   });
// });
// app.get('/', (req, res) => {
//   // db.query("SELECT * FROM mahasiswa", (error, result) => {
//   //     console.log(result)
//   //     respons(200, result, res)
//   // })
//   res.send('Hello World')
// })

// app.get('/find', (req, res) => {
//     const sql = `SELECT * FROM mahasiswa WHERE nim = ${req.query.nim}`
//     db.query(sql, (error, result) => {
//         // console.log(result)
//         respons(200, result, "get data mahasiswa berdasarkan nim", res)
//     })
// //   res.send('Hello World')
// })

app.post('/login', (req, res) => {
  console.log(req.body)
  res.send('Login berhasil!')
})

app.put('/username', (req, res) => {
  console.log(req.body)
  res.send('Update berhasil!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})