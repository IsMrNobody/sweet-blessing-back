const mongoose = require('mongoose');
const { Schema } = mongoose;

const localSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true },
    active:{ type: Boolean, default: false },
    description: { type: String, required: true },
    phone: Number
},
{
    versionKey: false
})

const Local = mongoose.model('restaurant', localSchema)

module.exports = Local