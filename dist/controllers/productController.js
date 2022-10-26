const Product = require("../models/product")
const { imgProduct } = require('../database/cloudinary')


const createProduct = async (data, req) => {  
  try {
      const product = new Product(data)

      console.log(data)
      console.log(req)
      if (data.file) {
        console.log('si hay')
        const image = await imgProduct(data.file.file.tempFilePath)
        product.img = {
          public_id: image.public_id,
          url: image.secure_url
        }
      }

      const pro = await product.save()
      return pro
  } catch (error) {
      return error.message
  }
}

const getProducts = () => {
  const product = Product.find()
  return product
}

const getProductById = (id) => {
  const product = Product.find({ _id: id })
  return product
}

const getProductByUserId = (id) => {
  const product = Product.find({ userId: id })
  return product
}

const editProduct = async (id, data, req) => {
  try {
    console.log(req)
    if (req) {
      const image = await imgProduct(req.file.tempFilePath)
      const product = {
        ...data,
        img: {
          public_id: image.public_id,
          url: image.secure_url
        }
      }
      const productAct = await Product.findByIdAndUpdate(id, product)      
      return productAct

    } else {
      await Product.findByIdAndUpdate(id, data)
      const productAct = Product.findById({ _id: id })
      return productAct
    }

  } catch (error) {
    console.log('no encontrado', error)
  }
}

const deleteProduct = async (id) => {
  try {
    const product = await Product.findByIdAndDelete(id)
    if (!product) throw new Error('no existe')
    return product
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProductByUserId,
  editProduct,
  deleteProduct,
  getProductById
}