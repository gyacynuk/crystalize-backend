"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var portNumber = process.env.PORT || 5000;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
var uri = process.env.ATLAS_URI;

_mongoose["default"].connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

var connection = _mongoose["default"].connection;
connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
});
app.listen(portNumber, function () {
  console.log("Server is running on port: ".concat(portNumber));
});