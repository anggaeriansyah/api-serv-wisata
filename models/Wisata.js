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
    hariOp: [
        Boolean
    ],
    jamOp: [String],
    //     senin: String,
    //     selasa: String,
    //     rabu: String,
    //     kamis: String,
    //     jumat: String,
    //     sabtu: String,
    //     minggu: String
    // },
    imageGaleries: [String],
    "tempClosed": Boolean,
    "kategori": String,
    "distance": mongoose.Schema.Types.Double
})

module.exports = mongoose.model("Wisata", WisataSchema)