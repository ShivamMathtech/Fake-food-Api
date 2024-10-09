const express = require("express");
const { order } = require("../Controller/controller");
const testRoute = express.Router();

testRoute.get("/orders", order);

module.exports = testRoute;
