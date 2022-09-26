const { Router } = require('express')
const { creatOrder, captureOrder, cancelOrder, paidOrder } = require('../controllers/paymemtController')

const router = Router()

// router.post('/create-order', creatOrder)

router.post('/create-order', async (req, res) => {
    await creatOrder(req.body, res)
})


router.get('/capture-order', captureOrder)

router.get('/create-order', async (req, res) => {
    await paidOrder(req.body, res)
})

router.get('/cancel-order', cancelOrder)

// export default router;
module.exports = router