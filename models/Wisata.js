const mongoose = require("mongoose")

var SchemaTypes = mongoose.Schema.Types;
const WisataSchema = mongoose.Schema({
    nama: String,
    desa: String,
    kec: String,
    tiket: String,
    latitude: String,
    longitude: String,
})

module.exports = mongoose.model("Wisata", WisataSchema)