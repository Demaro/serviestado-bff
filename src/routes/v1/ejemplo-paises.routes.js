const express = require("express");
const paisController = require("../../app/controllers/v1/ejemplo-paises.cotntroller");
const router = express.Router();

router.get("/paises", paisController.getPaises);

module.exports = router;
