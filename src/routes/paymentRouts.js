import { Router } from "express";
import { creatOrder, captureOrder, cancelOrder } from "../controllers/paymemtController";

const router = Router()

router.post('/create-order', creatOrder)

router.get('/capture-order', captureOrder)

router.get('/cancel-order', cancelOrder)

export default router;