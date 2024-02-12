const mongoose = require('mongoose');
const { Schema } = mongoose;

const method = new Schema({
  type: String,
  email: String,
  phone: String,
  cedula: String,
  bankName: String,
  bankNumber: Number,
  icon: String,
  img: String
})

const promo = new Schema({
  img: String,
  title: String,
  description: String
})

const history = new Schema({
  img: String
})

const colors = new Schema({
  primary: String,
  secondary: String,
  tercero: String,
  cuarto: String
})

const localSchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
  tag: { type: String, required: true, unique: true, trim: true },
  active: { type: Boolean, default: false },
  description: { type: String, required: true },
  email: String,
  phone: Number,
  pass: String,
  payment: [method],
  promos: [promo],
  history: [history],
  address: String,
  city: String,
  logo: String,
  banner: String,
  slogan: String,
  palette: colors
},
  {
    versionKey: false
  })

const Local = mongoose.model('restaurant', localSchema)

module.exports = Local