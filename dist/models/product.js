const mongoose = require('mongoose');
const { Schema } = mongoose;

const portion = new Schema({
    title: String,
    description: String,
    price: { type: Number }
})

const ProductSchema = new Schema({
    name: { type: String, required: true },
    active:{ type: Boolean, default: false },
    userId: { required: true, type: String },
    description: String,
    price: Number,
    stock: Number,
    category: String,
    portion: [portion],
    img: {
        public_id: String,
        url: String
    },
    ingredients: String
}, 
{
    versionKey: false,
    timestamps: true
})

const Product = mongoose.model('product', ProductSchema)

module.exports = Product