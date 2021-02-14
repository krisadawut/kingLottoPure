var express = require('express');
var router = express.Router();
const UserControllers = require("../../controllers/UserControllers")

router.get('/', UserControllers.index);

module.exports = router;