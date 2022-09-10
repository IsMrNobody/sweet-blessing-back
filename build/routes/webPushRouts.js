"use strict";

var _express = require("express");

var router = (0, _express.Router)();

var webpush = require('./webpush');

router.post('/subscription', function (req, res) {
  console.log(req.body);
  res.status(200).json();
});
//# sourceMappingURL=webPushRouts.js.map