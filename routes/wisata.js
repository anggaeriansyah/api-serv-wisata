const express = require("express")
const Wisata = require("../models/Wisata")
// const Post = require("./models/post")
const router = express.Router()

// Get all posts
router.get("/", async (req, res) => {
    try {
        const wisata = await Wisata.find()
        res.send(wisata)
    } catch (err) {
        res.json({ message: err })
    }
})

router.post("/", async (req, res) => {
    const wisataPost = new Wisata({
        nama: req.body.nama,
        desa: req.body.desa,
        kec: req.body.kec,
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
            desa: req.body.desa,
            kec: req.body.kec,
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