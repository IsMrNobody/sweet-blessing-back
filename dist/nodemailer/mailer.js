// Importar la biblioteca nodemailer
const nodemailer = require('nodemailer');

// Configurar el transporte de correo electrónico
const sendEmail = (data) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'webicultores@gmail.com',
          pass: 'mysuefnjdgsdwpcz',
        },
      });

      // Definir el contenido del correo electrónico
      const str = data.id.toString()
      const id = str.substring(str.length - 6)
      console.log('este es id', id)

      const mailOptions = {
        from: 'webicultores@gmail.com',
        to: `${data.merchantEmail}`,
        subject: 'Nuevo pedido en la tienda',
        // text: `Se ha recibido un nuevo pedido en la tienda de: ${data.userName} Por favor, revisa la aplicación para más detalles.`,
        html: `<p>Se ha recibido un nuevo pedido por ${data.userName} Ref: ${id} </p>
        <p>Visita la aplicación para mas detalle: https://pizzaroma.netlify.app/admin</p>
        <img width="250" src="https://res.cloudinary.com/dku13l2ep/image/upload/v1681322363/JARTATE/Ciudad/Anaco/pizza%20roma/moto_roma_vrflo9.png"/>
        `
      };
      
      // Enviar el correo electrónico
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(`Error al enviar el correo electrónico: ${error}`);
          return error
        } else {
        console.log(`Correo electrónico enviado: ${info.response}`);
        return info.response
        }
      });
}


module.exports = { sendEmail }
