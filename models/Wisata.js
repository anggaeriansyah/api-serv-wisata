const mongoose = require("mongoose")

const WisataSchema = mongoose.Schema({
    nama: String,
    desa: String,
    kec: String,
})

module.exports = mongoose.model("Wisata", WisataSchema)