const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String, unique: true },
    active:{ type: Boolean, default: false },
    description: String,
    price: String,
    category: String,
    img: String,
    ingredients: String
}, 
{
    versionKey: false,
    timestamps: true
})

const localSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true },
    active:{ type: Boolean, default: false },
    description: { type: String, required: true }
},
{
    versionKey: false
})

const Local = mongoose.model('restaurant', localSchema)

module.exports = Local