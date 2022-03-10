const mongoose = require('mongoose')
const { Schema } = mongoose

const Product = mongoose.model(
  'products',
  new Schema({
    name: { type: String, require: true },
    image: { type: String, require: false },  
    price: { type: Number, require: true },
    description: { type: String, require: false },
  })
)
module.exports = Product
