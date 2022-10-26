const { Router } = require('express')
const { 
    createProduct,
    getProducts,
    getProductByUserId,
    editProduct,
    deleteProduct,
    getProductById
} = require('../controllers/productController')
const router = Router()

router.get('/', async (req, res) => {
    const product = await getProducts()
    res.status(201).json(product)
    console.log('obteniendo inf....')
})

router.get('/:id', async (req, res) => {
    const product = await getProductById(req.params.id)
    res.status(201).json(product)
    console.log('obteniendo inf....')
})

router.get('/user/:id', async (req, res) => {
    const product = await getProductByUserId(req.params.id)
    res.status(201).json(product)
    console.log('obteniendo inf....>')
})

router.post("/create-product", async (req, res) => {
    const product = await createProduct(req.body, req.files)
    if(product._id){
        res.status(201).json(product)
    } else {
        res.status(403).json('algo ocurre > ' + product)
    }
})

router.put('/:id', async (req, res) => {
    const edit = await editProduct(req.params.id, req.body, req.files)
    res.status(201).json(edit)
})

router.delete("/:id", async (req, res) => {
    const product = await deleteProduct(req.params.id)
    if(product === 'no existe') {
        res.status(403).json('algo ocurre > ' + product)
    } else {
        res.status(201).json('eliminado')
    }
})

module.exports = router