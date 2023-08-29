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
  const data = {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": `${payload.merchantPhone}`,
    "type": "interactive",
    "interactive": {
      "type": "button",
      "header": {
        "type": "text",
        "text": `Pedido nuevo`
      },
      "body": {
        "text": `Contacto: ${payload.userName} +${payload.phone}`
      },
      "footer": {
        "text": `Revisa tu historial http://google.com/`
      },
      "action": {
        "buttons": [
          {
            "type": "reply",
            "reply": {
              "id": "unique-postback-id",
              "title": "✔"
            }
          }
        ] 
      }
    }
  }
  try {
    const enviar = await axios.post('https://graph.facebook.com/v16.0/105724882310760/messages', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN_ADMIN}`
      }
    })
    // console.log('whatsap enviar', enviar.data);
    return enviar
  } catch (error) {
    console.log('algo paso al enviar wa', error.message)
    return error
  }
}

const homeMsg = async (payload) => {
  // mensaje simple
  const data = {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to" : `${payload.merchantPhone}`,
    "type": "interactive",
    "interactive": {
      "type": "button",
      "header": {
        "type": "text",
        "text": `${payload.userName}`
      },
      "body": {
        "text": `${payload.comment}`
      },
      "footer": {
        "text": `Email: ${payload.userEmail}`
      },
      "action": {
        "buttons": [
          {
            "type": "reply",
            "reply": {
              "id": "unique-postback-id",
              "title": "✔" 
            }
          }
        ] 
    }
  }
  }

  try {
    const enviar = await axios.post('https://graph.facebook.com/v16.0/105724882310760/messages', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN_ADMIN}`
      }
    })
    // console.log(enviar);
    return enviar
  } catch (error) {
    console.log('algo paso wasap', error.message)
    return error
  }
}



module.exports = { mensaje, homeMsg }
