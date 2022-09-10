"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _paymentRouts = _interopRequireDefault(require("./routes/paymentRouts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import webPushRouts from "./routes/webPushRouts";
var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use(_paymentRouts["default"]); // app.use(webPushRouts);

app.listen(process.env.PORT || 3001);
console.log("server activo");
//# sourceMappingURL=index.js.map