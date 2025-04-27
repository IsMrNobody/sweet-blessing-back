const Plant = require("../models/plant")
const { imgProduct, deleteImg } = require('../database/cloudinary')
const fs = require('fs-extra')

const createPlant = async (data, req) => {  
   
  try {
    // const parse = JSON.parse(data)
    const plant = new Plant(data)

    if (req && req.file) {
    const image = await imgProduct(req.file.tempFilePath)
    plant.img = {
    public_id: image.public_id,
    url: image.secure_url
    	}
          await fs.unlink(req.file.tempFilePath)
    	}      
    const savedPlant = await plant.save()
    return savedPlant
  } catch (error) {
    console.log('Error al crear planta:', error.message);
    return error.message
  }
}

const getAllPlants = async () => {
  const plants = await Plant.find()
  return plants
}

const getPlantById = async (id) => {
  const plant = await Plant.findById(id)
  return plant
}

const getPlantsByUserId = async (id) => {
  const plants = await Plant.find({ userId: id })
  return plants
}

const editPlant = async (id, data, req) => {
  try {    
    if (req && req.file) {
      const plantFound = await Plant.findById(id)
      if (plantFound.img && plantFound.img.public_id) {
        await deleteImg(plantFound.img.public_id)
      }

      const image = await imgProduct(req.file.tempFilePath)
      const plantData = {
        ...data,
        img: {
          public_id: image.public_id,
          url: image.secure_url
        }
      }
      await fs.unlink(req.file.tempFilePath)
      await Plant.findByIdAndUpdate(id, plantData)
      const updatedPlant = await Plant.findById(id)
      return updatedPlant
    } else {
      await Plant.findByIdAndUpdate(id, data)
      const updatedPlant = await Plant.findById(id)
      return updatedPlant
    }
  } catch (error) {
    console.log('Error al editar planta:', error.message)
    return error.message
  }
}

const deletePlant = async (id) => {
  try {
    const plant = await Plant.findByIdAndDelete(id)
    if (!plant) throw new Error('La planta no existe')

    if (plant.img && plant.img.public_id) {
      await deleteImg(plant.img.public_id)
    }
    return plant
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = {
  createPlant,
  getAllPlants,
  getPlantById,
  getPlantsByUserId,
  editPlant,
  deletePlant
} 