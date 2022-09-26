const axios = require('axios')
const Order = require("../models/order")
const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET, HOST } = require('../config')

let IdPago = ''

const creatOrder = async (req, res) => {
    console.log('creando orden >', req)
    const order = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: req.total || 1
          },
          description: "Venta de postres",
          //   items: [],
          //   shipping: {},
        }
      ],
      application_context: {
        brand_name: `sweet-jesus`,
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: `${HOST}/payment/capture-order`,
        cancel_url: `${HOST}/payment/cancel-order`
      }
    };

    const params = new URLSearchParams()
    params.append("grant_type", "client_credentials")
    
    try {
      // crear token para iniciar sesion
        const { data: {access_token} } = await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', params, {
            headers: {
                'Content-Type': 'application/x-www-form-unlencoded'
            },
            auth: {
              username: PAYPAL_API_CLIENT,
              password: PAYPAL_API_SECRET
            }
        })
        // console.log(access_token)

        // enviar orden de pago
        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        })
        console.log(response.data)
        IdPago = req.orderId
        res.send(response.data)
    } catch (error) {
        // console.log('algo paso', error)
        return error.message
    }
}

// procesando pago
const captureOrder = async (req, res) => {
  const {token} = req.query
  const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
    auth: {
      username: PAYPAL_API_CLIENT,
      password: PAYPAL_API_SECRET
    }
  })
  const id = response.data.id
  await Order.findByIdAndUpdate(id, data)
  console.log('este es el ide de pago')
  console.log(IdPago)
  res.redirect(`http://localhost:3000/paid/${id}`)
}

const cancelOrder = (req, res) => {
  return res.redirect('/')
}


const paidOrder = (req, res) => {
  const find = Order.find(o)
}

module.exports = {
  creatOrder,
  captureOrder,
  cancelOrder,
  paidOrder
}