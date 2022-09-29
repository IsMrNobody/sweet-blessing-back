const axios = require('axios')

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
    const data = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": `${payload.merchantPhone}`,
        "type": "text",
        "text": {
          "preview_url": false,
          "body": `${"🙌 Nuevo pedido de: " + `${payload.userName}` + "  " +
            " Contacto: "  + payload.userPhone}`
        }
      }
    // const data = {
    //     "messaging_product": "whatsapp",
    //     "to": "584128352365",
    //     "type": "template",
    //     "template": 
    //         { 
    //         "name": "hello_world",
    //         "language": 
    //             { "code": "en_US" } 
    //         } 
    //     }
    try {
        const enviar = await axios.post('https://graph.facebook.com/v14.0/105724882310760/messages', data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer EAAFCoKVgWGIBAKns4bp3PcGD6ZCAjZBCxCKhcqjA6B3HOd4hk4ZCCgcWP3dzEDXYTsLqz1uJnjJhwfR012grKxEUVTJOVwBdWcWz29YlSRaAZCU2lMNpyrC4InNPJWFxi4wrDM3llcntZCWH5Iid9jtsbV9U8ouTLZACoPuNcvMZAPpxTpESxKC`
                // Authorization: `Bearer EAAFCoKVgWGIBAIW0xLZCgtczr14XLuT3xLX8F2DxdL8QaJN6d51kPKZANZCmqMcCnKYt55YR3CN1aX1iOtPrb8Kd8EDVcqmgFPIofbbCDoifVnXmPUnutZBt3uksA4YUDMQitpWv3st3uJqRgOhm0ZBX1q6yRP4k0DnutfOWeShjwKe5yefv9EaLZB9ZBoi00PjiyOzklz0QQZDZD`
            }
        })
        console.log(enviar.data)
    } catch (error) {
        console.log('algo paso', error.message)
    }
}



module.exports = { mensaje }
