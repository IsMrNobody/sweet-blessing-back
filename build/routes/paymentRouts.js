"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _paymemtController = require("../controllers/paymemtController");

var router = (0, _express.Router)();
router.post('/create-order', _paymemtController.creatOrder);
router.get('/capture-order', _paymemtController.captureOrder);
router.get('/cancel-order', _paymemtController.cancelOrder);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=paymentRouts.js.map