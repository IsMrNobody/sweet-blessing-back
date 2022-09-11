const { Router } = require('express')
const router = Router()

const webpush = require('./webpush')

router.post('/subscription', (req, res) => {
    console.log(req.body);
    res.status(200).json();
})