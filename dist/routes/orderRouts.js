const { Router } = require('express')
const {
  createOrder,
  getOrders,
  getByMerchantId,
  deleteOrder,
  getOrderById,
  sendMsg,
  editOrder
} = require('../controllers/orderController')
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

router.get('/user/:id', async (req, res) => {
  const order = await getOrderById(req.params.id)
  if (order._id) {
    res.status(201).json(order)
  } else {
    res.status(403).json('algo ocurre > ' + order)
  }
})

router.post("/create", async (req, res) => {
  const order = await createOrder(req.body)
  // console.log('ruta order', order);
  if (order) {
    res.status(201).json({ data: order })
  } else {
    res.status(403).json('algo ocurre ruta > ' + order)
  }
})

router.post("/contact", async (req, res) => {
  const order = await sendMsg(req.body)
  if (order) {
    res.status(201).json(order)
  } else {
    res.status(403).json('algo ocurre > ' + order)
  }
})

router.put('/:id', async (req, res) => {
    const edit = await editOrder(req.body, req.params.id)
    res.status(201).json(edit)
})

router.delete("/:id", async (req, res) => {
  const order = await deleteOrder(req.params.id)
  if (order === 'no existe') {
    res.status(403).json('algo ocurre > ' + order)
  } else {
    res.status(201).json('eliminado')
  }
})

module.exports = router