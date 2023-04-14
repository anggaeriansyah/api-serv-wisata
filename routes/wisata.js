const express = require("express")
const Wisata = require("../models/Wisata")
const respons = require('../routes/respons')
const router = express.Router()

// Get all posts
router.get("/api", async (req, res) => {
    try {
        const wisata = await Wisata.find()
        // res.send(wisata)
        respons(200, wisata, "OK", res)
    } catch (err) {
        res.json({ message: err })
    }
})

router.post("/", async (req, res) => {
    const wisataPost = new Wisata({
        nama: req.body.nama,
        alamat: {
            desa: req.body.desa,
            kec: req.body.kec,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        },
        info: {
            tiket: req.body.tiket,
            deskripsi: req.body.deskripsi
        },
        hariOp: {
            senin: req.body.senin,
            selasa: req.body.selasa,
            rabu: req.body.rabu,
            kamis: req.body.kamis,
            jumat: req.body.jumat,
            sabtu: req.body.sabtu,
            minggu: req.body.minggu,
        },
        jamOp: {
            senin: req.body.jSenin,
            selasa: req.body.jSelasa,
            rabu: req.body.jRabu,
            kamis: req.body.jkamis,
            jumat: req.body.jJumat,
            sabtu: req.body.jSabtu,
            minggu: req.body.jMinggu,
        },
        tempClosed: req.body.tempClosed,
        distance: req.body.distance
    })
    try {
        const wisata = await wisataPost.save()
        res.send(wisata)
    } catch (err) {
        res.json({ message: err })
    }
})

router.put("/:wisataId", async (req, res) => {
    try {
        const wisataUpdate = await Wisata.updateOne({ _id: req.params.wisataId }, {
            nama: req.body.nama,
            alamat: {
                desa: req.body.desa,
                kec: req.body.kec,
                latitude: req.body.latitude,
                longitude: req.body.longitude
            },
            info: {
                tiket: req.body.tiket,
                deskripsi: req.body.deskripsi
            },
            hariOp: {
                senin: req.body.senin,
                selasa: req.body.selasa,
                rabu: req.body.rabu,
                kamis: req.body.kamis,
                jumat: req.body.jumat,
                sabtu: req.body.sabtu,
                minggu: req.body.minggu,
            },
            jamOp: {
                senin: req.body.jSenin,
                selasa: req.body.jSelasa,
                rabu: req.body.jRabu,
                kamis: req.body.jkamis,
                jumat: req.body.jJumat,
                sabtu: req.body.jSabtu,
                minggu: req.body.jMinggu,
            },
            tempClosed: req.body.tempClosed,
            distance: req.body.distance
        })
        res.send(wisataUpdate)
    } catch (err) {
        res.json({ message: err })
    }
})

router.delete("/:wisataId", async (req, res) => {
    try {
        const wisataUpdate = await Wisata.deleteOne({ _id: req.params.wisataId })
        res.send(wisataUpdate)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router