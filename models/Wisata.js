const mongoose = require("mongoose")

const WisataSchema = mongoose.Schema({
    nama: String,
    alamat: {
        desa: String,
        kec: String,
        latitude: Number,
        longitude: Number
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
    "tempClosed": Boolean,
    "distance": Number
})

module.exports = mongoose.model("Wisata", WisataSchema)