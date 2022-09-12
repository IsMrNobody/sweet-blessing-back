const { config } = require('dotenv')
config()

const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT
const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET
const PAYPAL_API = process.env.PAYPAL_API

const PUBLIC_VAPID_KEY = process.env.PUBLIC_VAPID_KEY
const PRIVATE_VAPID_KEY = process.env.PRIVATE_VAPID_KEY

const PORT = process.env.PORT || 3001
const HOST = process.env.HOST
const URI = process.env.URI

module.exports = {
    PAYPAL_API_CLIENT,
    PAYPAL_API_SECRET,
    PAYPAL_API,
    PUBLIC_VAPID_KEY,
    PRIVATE_VAPID_KEY,
    PORT,
    HOST,
    URI
  }