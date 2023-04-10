const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const respons = require('./respons')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    db.query("SELECT * FROM mahasiswa", (error, result) => {
        // console.log(result)
        respons(200, result, "get all data from mahasiswa", res)
    })
//   res.send('Hello World')
})

app.get('/find', (req, res) => {
    const sql = `SELECT * FROM mahasiswa WHERE nim = ${req.query.nim}`
    db.query(sql, (error, result) => {
        // console.log(result)
        respons(200, result, "get data mahasiswa berdasarkan nim", res)
    })
//   res.send('Hello World')
})

app.post('/login', (req, res) => {
    console.log(req.body) 
  res.send('Login berhasil!')
})

app.put('/username', (req, res) => {
    console.log(req.body)
  res.send('Update berhasil!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})