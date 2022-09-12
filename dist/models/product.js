const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String, required: true, unique: true },
    active:{ type: Boolean, default: false },
    userId: { required: true, type: String },
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

const Product = mongoose.model('product', ProductSchema)

module.exports = Product