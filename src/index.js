import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config";

import payment from "./routes/paymentRouts";
// import webPushRouts from "./routes/webPushRouts";

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use(payment);
// app.use(webPushRouts);

app.listen(PORT);
console.log("server on port", PORT)