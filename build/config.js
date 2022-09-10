"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PUBLIC_VAPID_KEY = exports.PRIVATE_VAPID_KEY = exports.PORT = exports.PAYPAL_API_SECRET = exports.PAYPAL_API_CLIENT = exports.PAYPAL_API = exports.HOST = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
exports.PAYPAL_API_CLIENT = PAYPAL_API_CLIENT;
var PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;
exports.PAYPAL_API_SECRET = PAYPAL_API_SECRET;
var PAYPAL_API = process.env.PAYPAL_API;
exports.PAYPAL_API = PAYPAL_API;
var PUBLIC_VAPID_KEY = process.env.PUBLIC_VAPID_KEY;
exports.PUBLIC_VAPID_KEY = PUBLIC_VAPID_KEY;
var PRIVATE_VAPID_KEY = process.env.PRIVATE_VAPID_KEY;
exports.PRIVATE_VAPID_KEY = PRIVATE_VAPID_KEY;
var PORT = process.env.PORT || 3001;
exports.PORT = PORT;
var HOST = process.env.HOST;
exports.HOST = HOST;
//# sourceMappingURL=config.js.map