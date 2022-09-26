const { Router } = require('express')
const { creatOrder, captureOrder, cancelOrder } = require('../controllers/paymemtController')

const router = Router()

// router.post('/create-order', creatOrder)

router.post('/create-order', async (req, res) => {
    await creatOrder(req.body, res)
})


router.get('/capture-order', captureOrder)

router.get('/cancel-order', cancelOrder)

// export default router;
module.exports = router