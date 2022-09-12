const Product = require("../models/product")

const createProduct = async (data) => {
    try {
        console.log(data);
        const product = new Product(data)
        await product.save()
        return product
    } catch (error) {
        console.log(error.message);
    }
}

const getProducts = () => {
    const product = Product.find()
    return product
}

const getProductByUserId = (id) => {
    const product = Product.find({ userId: id })
    return product
}

const editProduct = async (id, data) => {
    try {
        await Product.findByIdAndUpdate(id, data)
        const productAct = Product.findById({_id: id})
        return productAct
    } catch (error) {
        console.log('no encontrado');
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
    deleteProduct
}