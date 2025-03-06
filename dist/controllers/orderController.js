const Order = require("../models/order")
const { sendEmail } = require('../nodemailer/mailer')
const { mensaje, homeMsg } = require('../whatsapp/msg')

const createOrder = async (data) => {
  console.log(data)
  try {
    // enviar orden
    const order = new Order(data)
    await order.save()

    // enviar mensaje
    const textMsg = {
      userName: data.nameUser,
      userEmail: data.userEmail,
      phone: data.phone,
      total: data.total,
      merchantPhone: data.merchantPhone,
      merchantEmail: data.merchantEmail,
      delivery: data.delivery,
      // id: order._id
    }
    // if(order) {
    //   const email = sendEmail(textMsg)
    //   console.log(email)
    // }
    const wa = await mensaje(textMsg)
    console.log('controler', wa.data);
    return order
  } catch (error) {
    console.log('error controler', error);
    return error.message
  }
}

const sendMsg = async (data) => {
  try {
    // enviar mensaje
    const textMsg = {
      userName: data.userName,
      userEmail: data.userEmail,
      merchantPhone: data.merchantPhone,
      merchantEmail: data.merchantEmail,
      comment: data.comment
    }
    const msg = await homeMsg(textMsg)
    // sendEmail(data)
    // console.log(msg.data)
    return msg.data
  } catch (error) {
    console.log(error.message);
    return error
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