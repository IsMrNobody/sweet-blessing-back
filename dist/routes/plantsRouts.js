const { Router } = require('express')
const { 
    createPlant,
    getAllPlants,
    getPlantById,
    getPlantsByUserId,
    editPlant,
    deletePlant
} = require('../controllers/plantController')
const router = Router()

router.get('/', async (req, res) => {
    try {
        const plants = await getAllPlants()
        res.status(200).json(plants)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const plant = await getPlantById(req.params.id)
        if (!plant) {
            return res.status(404).json({ message: 'Planta no encontrada' })
        }
        res.status(200).json(plant)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/user/:id', async (req, res) => {
    try {
        const plants = await getPlantsByUserId(req.params.id)
        res.status(200).json(plants)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/create", async (req, res) => {
    try {
        const plant = await createPlant(req.body, req)
        res.status(201).json(plant)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedPlant = await editPlant(req.params.id, req.body, req)
        res.status(200).json(updatedPlant)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const result = await deletePlant(req.params.id)
        res.status(200).json({ message: 'Planta eliminada correctamente', data: result })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router 