const { Router } = require('express')
const { createMerchant, 
    getMerchants, 
    editMerchant, 
    deleteMerchant,
    getMerchantById
} = require('../controllers/merchantController')
const router = Router()

router.get('/', async (req, res) => {
    const merchants = await getMerchants()
    res.status(201).json(merchants)
    console.log('obteniendo inf....')
})

router.get('/:id', async (req, res) => {
    const merchant = await getMerchantById(req.params.id)
    res.status(201).json(merchant)
    console.log('obteniendo inf....>')
})

router.post("/create-local", async (req, res) => {
    // console.log(req.body);
    const merchant = await createMerchant(req.body)
    if(merchant){
        res.status(201).json({data: merchant})
    } else {
        res.status(403).json('algo ocurre > ' + merchant)
    }
})

router.put('/:id', async (req, res) => {
    const edit = await editMerchant(req.params.id, req.body)
    res.status(201).json(edit)
})

router.delete("/:id", async (req, res) => {
    const merchant = await deleteMerchant(req.params.id)
    if(merchant === 'no existe') {
        res.status(403).json('algo ocurre > ' + merchant)
    } else {
        res.status(201).json('eliminado')
    }
})

module.exports = router