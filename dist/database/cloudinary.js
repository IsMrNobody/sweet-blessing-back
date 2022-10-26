var cloudinary = require('cloudinary').v2

cloudinary.config({ 
  cloud_name: 'dku13l2ep', 
  api_key: '537132846434265', 
  api_secret: 'IqdSa9kIfqiva6ACqdf3cBvDPRU',
  secure: true
});

const imgProduct = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'products'
  })
}

const deleteImg = async (id) => {
  return await cloudinary.uploader.destroy(id)
}   

module.exports = {
  imgProduct,
  deleteImg
}