// const Product = require("../models/product")
const mongoose = require('mongoose');
const { Schema } = mongoose;

const portion = new Schema({
    title: String,
    description: String,
    price: { type: Number }
})

const ProductSchema = new Schema({
    name: String,
    active:{ type: Boolean, default: false },
    userId: String,
    description: String,
    price: Number,
    category: String,
    selectedPortion: [portion],
    img: {
        url: String
    },
    ingredients: String,
    cantidad: String,
    totalProduct: Number
})

const OrderSchema = new Schema({
    nameUser: { type: String, required: true },
    merchantId: String, 
    active:{ type: Boolean, default: true },
    status: { type: String, default: 'Pendiente' },
    paid: { type: Boolean, default: false },
    numberRef: String,
    userEmail: { required: true, type: String },
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