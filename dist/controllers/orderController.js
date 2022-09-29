const Order = require("../models/order")
const { mensaje } = require('../whatsapp/msg')
const { getMerchantById } = require("./merchantController")

const createOrder = async (data) => {
    try {
        // enviar orden
        const order = new Order(data)
        await order.save()
        
        // enviar mensaje
        const textMsg = {
            userName: data.nameUser,
            userPhone: data.phone,
            merchantPhone: data.merchantPhone
        }
        await mensaje(textMsg)
        return order
    } catch (error) {
        return error.message
    }
}

const getOrders = () => {
    // obtener todas las ordenes
    const orders = Order.find()
    return orders
}

const getByMerchantId = (id) => {
    // obtener orden por merchant-ID
    const order = Order.find({ merchantId: id })
    return order
}

const getOrderById = (id) => {
    // obtener orden por ID
    const order = Order.findById(id)
    return order
}

// const editProduct = async (id, data) => {
//     try {
//         await Product.findByIdAndUpdate(id, data)
//         const productAct = Product.findById({_id: id})
//         return productAct
//     } catch (error) {
//         console.log('no encontrado');
//     }
// }

const deleteOrder = async (id) => {
    try {
        const order = await Order.findByIdAndDelete(id)
        if (!order) throw new Error('no existe')
        return order
    } catch (error) {
        console.log(error.message)
        return error.message
    }
}

module.exports = {
    createOrder,
    getOrders,
    getByMerchantId,
    deleteOrder,
    getOrderById
}