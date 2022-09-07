import { config } from "dotenv";
config()

export const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT
export const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET
export const PAYPAL_API = process.env.PAYPAL_API

export const PUBLIC_VAPID_KEY = process.env.PUBLIC_VAPID_KEY
export const PRIVATE_VAPID_KEY = process.env.PRIVATE_VAPID_KEY

export const PORT = process.env.PORT || 3001
export const HOST = process.env.HOST