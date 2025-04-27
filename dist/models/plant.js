const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlantSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    fruta: { type: String },
    flor: { type: String },
    raiz: { type: String },
    variedades: [{ type: String }],
    familia: { type: String },
    especie: { type: String },
    semilla: { type: String },
    tallo: { type: String },
    hojas: { type: String },
    nombreCientifico: { type: String },
    propiedadesMedicinales: { type: String },
    usosTradicionales: { type: String },
    comoUsarla: { type: String },
    img: {
        public_id: String,
        url: String
    },
    active: { type: Boolean, default: true },
    userId: { type: String }
}, 
{
    versionKey: false,
    timestamps: true
})

const Plant = mongoose.model('plant', PlantSchema)

module.exports = Plant 