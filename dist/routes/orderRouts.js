const { Router } = require('express')
const { createOrder, getOrders, getByMerchantId, deleteOrder } = require('../controllers/orderController')
const router = Router()

router.get('/', async (req, res) => {
    const orders = await getOrders()
    res.status(201).json(orders)
    console.log('obteniendo inf....')
})

router.get('/:id', async (req, res) => {
    const order = await getByMerchantId(req.params.id)
    res.status(201).json(order)
    console.log('obteniendo inf....')
})

router.post("/create", async (req, res) => {
    // console.log(req.body);
    const order = await createOrder(req.body)
    if(order){
        res.status(201).json({data: order})
    } else {
        res.status(403).json('algo ocurre > ' + order)
    }
})

// router.put('/:id', async (req, res) => {
//     const edit = await editProduct(req.params.id, req.body)
//     res.status(201).json(edit)
// })

router.delete("/:id", async (req, res) => {
    const order = await deleteOrder(req.params.id)
    if(order === 'no existe') {
        res.status(403).json('algo ocurre > ' + order)
    } else {
        res.status(201).json('eliminado')
    }
})

module.exports = router