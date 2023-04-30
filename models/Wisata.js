const mongoose = require("mongoose");
const mongooseDouble = require("mongoose-double");
require('mongoose-double')(mongoose);


const WisataSchema = mongoose.Schema({
    nama: String,
    image: String,
    alamat: {
        desa: String,
        kec: String,
        latitude: mongoose.Schema.Types.Double,
        longitude: mongoose.Schema.Types.Double
    },
    info: {
        tiket: String,
        deskripsi: String
    },
    hariOp: {
        senin: Boolean,
        selasa: Boolean,
        rabu: Boolean,
        kamis: Boolean,
        jumat: Boolean,
        sabtu: Boolean,
        minggu: Boolean,
    },
    jamOp: {
        senin: String,
        selasa: String,
        rabu: String,
        kamis: String,
        jumat: String,
        sabtu: String,
        minggu: String
    },
    imageGaleries: {
        image1: String,
        image2: String,
        image3: String,
        image4: String
    },
    "tempClosed": Boolean,
    "kategori": String,
    "distance": mongoose.Schema.Types.Double
})

module.exports = mongoose.model("Wisata", WisataSchema)