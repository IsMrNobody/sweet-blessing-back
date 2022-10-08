const Order = require("../models/order")
const { mensaje, homeMsg } = require('../whatsapp/msg')

const createOrder = async (data) => {
  try {
    // enviar orden
    const order = new Order(data)
    await order.save()

    // enviar mensaje
    const textMsg = {
      userName: data.nameUser,
      userPhone: data.phone,
      total: data.total,
      merchantPhone: data.merchantPhone
    }
    await mensaje(textMsg)
    return order
  } catch (error) {
    return error.message
  }
}

const sendMsg = async (data) => {
  try {
    // enviar mensaje
    const textMsg = {
      userName: data.userName,
      email: data.email,
      merchantPhone: data.merchantPhone,
      comment: data.comment
    }
    const msg = await homeMsg(textMsg)
    console.log(msg.data)
    return msg.data
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

const getOrderById = async (id) => {
  // obtener orden por ID
  try {
    const order = await Order.findById(id)
    return order
  } catch (error) {
    return error.message
  }
}

const editOrder = async (data, id, res) => {
    try {
      await Order.findByIdAndUpdate(id, {
        status: data.status,
        paid: data.paid
      })
      const orderEdit = Order.findById({_id: id})
        return orderEdit
    } catch (error) {
        return error.message
    }
}

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
  getOrderById,
  sendMsg,
  editOrder
}