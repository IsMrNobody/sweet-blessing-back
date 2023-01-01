const Product = require("../models/product")
const { imgProduct, deleteImg } = require('../database/cloudinary')
const fs = require('fs-extra')


const createProduct = async (data, req) => {  
  try {
      const parse = JSON.parse(data)
      const product = new Product(parse)

      if (req.file) {
        const image = await imgProduct(req.file.tempFilePath)
        product.img = {
          public_id: image.public_id,
          url: image.secure_url
        }

        await fs.unlink(req.file.tempFilePath)
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

const getProductById = async (id) => {
  const product = await Product.find({_id: id})
  return product
}

const getProductByUserId = async (id) => {
  const product = await Product.find({ userId: id })
  return product
}

const editProduct = async (id, data, req) => {
  try {    
    if (req) {
      const foto = await Product.findById(id)
      await deleteImg(foto.img.public_id)

      const image = await imgProduct(req.file.tempFilePath)
      const product = {
        ...data,
        img: {
          public_id: image.public_id,
          url: image.secure_url
        }
      }
      await fs.unlink(req.file.tempFilePath)
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

    await deleteImg(product.img.public_id)
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