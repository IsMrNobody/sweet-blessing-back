// const Product = require("../models/product")
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
    category: String,
    selectedPortion: [portion],
    img: String,
    ingredients: String,
    cantidad: String,
    totalProduct: Number
})

const OrderSchema = new Schema({
    nameUser: { type: String, required: true },
    merchantId: String, 
    active:{ type: Boolean, default: false },
    email: { required: true, type: String },
    address: String,
    comments: String,
    deliveryDate: String,
    paymentMethod: String,
    floor: String,
    house: String,
    phone: String,
    products: [ProductSchema],
    total: String
}, 
{
    versionKey: false,
    timestamps: true
})

const Order = mongoose.model('order', OrderSchema)

module.exports = Order