const express = require("express");
const router = require("express-promise-router")();

const {
    validateBoby,
    validateParam,
    listSchema
} = require("../helpers/RouterHelper");

const brandController = require("../controllers/brand");

router.route("")
    .get(brandController.getAllAvai);

module.exports = router;