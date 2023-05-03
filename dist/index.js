const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload');
const { conectDB } = require('./database/db')

// const payment = require('./routes/paymentRouts')
// import webPushRouts from "./routes/webPushRouts";

const app = express();
conectDB()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
    origin: '*'
}))

// subida de archivos
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads',
    limits: {
        fileSize: 1000000,
    }
}));


app.use("/payment", require('./routes/paymentRouts'))
app.use("/merchant", require('./routes/merchantRouts'))
app.use("/product", require('./routes/productRouts'))
app.use("/order", require('./routes/orderRouts'))
// app.use(webPushRouts);

app.listen(process.env.PORT || 3002);
console.log("server activo")