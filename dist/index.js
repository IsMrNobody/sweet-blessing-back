const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const payment = require('./routes/paymentRouts')
// import webPushRouts from "./routes/webPushRouts";

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use(payment);
// app.use(webPushRouts);

app.listen(process.env.PORT || 3001);
console.log("server activo")