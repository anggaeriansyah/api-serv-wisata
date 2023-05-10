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
router.get("/api/asc", async (req, res) => {
    try {
        const wisata = await Wisata.find()
        const sortedWisata = wisata.sort((a, b)=> a.nama.localeCompare(b.nama))
        respons(200, sortedWisata, "OK", res)
    } catch (err) {
        res.json({ message: err })
    }
})
router.get("/api/desc", async (req, res) => {
    try {
        const wisata = await Wisata.find()
        const sortedWisata = wisata.sort((a, b)=> b.nama.localeCompare(a.nama))
        respons(200, sortedWisata, "OK", res)
    } catch (err) {
        res.json({ message: err })
    }
})
router.get("/api/rekreasi", async (req, res) => {
    const id = req.params.kategori;
    try {
        const wisata = await Wisata.find({kategori: 'rekreasi'})
        respons(200, wisata, "OK", res)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})
router.get("/api/air-terjun", async (req, res) => {
    const id = req.params.kategori;
    try {
        const wisata = await Wisata.find({kategori: 'air-terjun'})
        respons(200, wisata, "OK", res)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})
router.get("/api/situs", async (req, res) => {
    const id = req.params.kategori;
    try {
        const wisata = await Wisata.find({kategori: 'situs'})
        respons(200, wisata, "OK", res)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

router.post("/", async (req, res) => {
    // if (!req.file) {
    //     const err = new Error('image harus di Upload');
    //     err.errorStatus = 422;
    //     throw err;
    // }
    let gallery = req.files['galeries'];
    if (!gallery[0]) {
        // Jika tidak, tambahkan sebuah objek kosong dengan property filename = null
        gallery.splice(0, 1, { filename: null });
      }
    if (!gallery[1]) {
        // Jika tidak, tambahkan sebuah objek kosong dengan property filename = null
        gallery.splice(1, 1, { filename: null });
      }
    if (!gallery[2]) {
        // Jika tidak, tambahkan sebuah objek kosong dengan property filename = null
        gallery.splice(2, 1, { filename: null });
      }
    if (!gallery[3]) {
        // Jika tidak, tambahkan sebuah objek kosong dengan property filename = null
        gallery.splice(3, 1, { filename: null });
      }
    const wisataPost = new Wisata({
        nama: req.body.nama,
        image: req.files['image'][0].path,
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
        hariOp: [
            req.body.hSenin,
            req.body.hSelasa,
            req.body.hRabu,
            req.body.hKamis,
            req.body.hJumat,
            req.body.hSabtu,
            req.body.hMinggu,
        ],
        jamOp:[
            req.body.jSenin,
            req.body.jSelasa,
            req.body.jRabu,
            req.body.jKamis,
            req.body.jJumat,
            req.body.jSabtu,
            req.body.jMinggu,
        ],
        imageGaleries: [gallery[0].path,  gallery[1].path, gallery[2].path, gallery[3].path],
        tempClosed: req.body.tempClosed,
        kategori: req.body.kategori,
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
    let gallery = req.files['galeries'];
    if (!gallery[0]) {
        // Jika tidak, tambahkan sebuah objek kosong dengan property filename = null
        gallery.splice(0, 1, { filename: null });
      }
    if (!gallery[1]) {
        // Jika tidak, tambahkan sebuah objek kosong dengan property filename = null
        gallery.splice(1, 1, { filename: null });
      }
    if (!gallery[2]) {
        // Jika tidak, tambahkan sebuah objek kosong dengan property filename = null
        gallery.splice(2, 1, { filename: null });
      }
    if (!gallery[3]) {
        // Jika tidak, tambahkan sebuah objek kosong dengan property filename = null
        gallery.splice(3, 1, { filename: null });
      }
    try {
        const wisataUpdate = await Wisata.updateOne({ _id: req.params.wisataId }, {
            nama: req.body.nama,
            image: req.files['image'][0].path,
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
            imageGaleries: [gallery[0].path,  gallery[1].path, gallery[2].path, gallery[3].path],
            // imageGaleries: {
            //     image1: gallery[0].path,
            //     image2: gallery[1].path,
            //     image3: gallery[2].path,
            //     image4: gallery[3].path
            // },
            tempClosed: req.body.tempClosed,
            kategori: req.body.kategori,
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