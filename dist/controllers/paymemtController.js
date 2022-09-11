const axios = require('axios')
const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET, HOST } = require('../config')

const creatOrder = async (req, res) => {
    const order = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: 1
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
        return_url: `${HOST}/capture-order`,
        cancel_url: `${HOST}/cancel-order`
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
        // console.log(response.data)

        res.json(response.data)
    } catch (error) {
        console.log('algo paso')
        return res.status(500).send('Somenthing wrong')
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
  console.log(response.data)
  res.send('capturando orden')
}

const cancelOrder = (req, res) => {
    res.send('canceling order')
}

module.exports = {
  creatOrder,
  captureOrder,
  cancelOrder
}