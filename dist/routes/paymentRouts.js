const { Router } = require('express')
const { creatOrder, captureOrder, cancelOrder, checkPayment } = require('../controllers/paymemtController')

const router = Router()

router.post('/create-order', async (req, res) => {
    await creatOrder(req.body, res)
})

router.get('/capture-order', captureOrder)

router.get('/cancel-order', cancelOrder)

router.post('/check/:id', async (req, res) => {
    const id = req.params.id
    const che = await checkPayment(req.body, id)
    res.send(che)
})

module.exports = router