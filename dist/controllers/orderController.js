const Order = require("../models/order")

const createOrder = async (data) => {
    try {
        const order = new Order(data)
        await order.save()
        return order
    } catch (error) {
        return error.message
    }
}

const getOrders = () => {
    const orders = Order.find()
    return orders
}

const getByMerchantId = (id) => {
    const order = Order.find({ merchantId: id })
    return order
}

// const getProductByUserId = (id) => {
//     const product = Product.find({ userId: id })
//     return product
// }

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
    deleteOrder
}