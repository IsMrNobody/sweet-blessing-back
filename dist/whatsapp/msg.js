const axios = require('axios')
const { TOKEN_ADMIN } = require('../config')

const mensaje = async (payload) => {
  // reaccion mensaje
  // const data = {
  //     "messaging_product": "whatsapp",
  //     "recipient_type": "individual",
  //     "to": `${payload.merchantPhone}`,
  //     "type": "reaction",
  //     "reaction": {
  //       "message_id": "wamid.HBgMNTg0MTI4MzUyMzY1FQIAERgSNTc1QzFENUMyMDYxRDNCRTQ5AA==",
  //       "emoji": "🤩"
  //     }
  //   }

  // media mensaje
  // const data = {
  //     "messaging_product": "whatsapp",
  //     "recipient_type": "individual",
  //     "to": `${payload.merchantPhone}`,
  //     "type": "image",
  //     "image": {
  //         "link" : "https://phantom-marca.unidadeditorial.es/37375543cb60729f952bf47a9d5cddca/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/26/16220329540186.jpg"
  //     }
  //   }

  // mensaje simple
  // const data = {
  //     "messaging_product": "whatsapp",
  //     "recipient_type": "individual",
  //     "to": `${payload.merchantPhone}`,
  //     "type": "text",
  //     "text": {
  //       "preview_url": false,
  //       "body": `${"🙌 Nuevo pedido de: " + `${payload.userName}` + "  " +
  //         " Contacto: "  + payload.userPhone}`
  //     }
  //   }
  const data = {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": `${payload.merchantPhone}`,
    "type": "template",
    "template": {
      "name": "order_template",
      "language": {
        "code": "en"
      },
      "components": [
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": `${payload.userName}`
            },
            {
              "type": "text",
              "text": `${payload.total}  💸`
            },
            {
              "type": "text",
              "text": `${payload.userPhone}`
            }
          ]
        }
      ]
    }
  }
  try {
    const enviar = await axios.post('https://graph.facebook.com/v14.0/105724882310760/messages', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN_ADMIN}`
      }
    })
  } catch (error) {
    console.log('algo paso', error.message)
  }
}



module.exports = { mensaje }
