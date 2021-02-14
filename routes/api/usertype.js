var express = require('express');
var router = express.Router();
const usertypeControllers = require("../../controllers/userTypeControllers")

router.get('/', usertypeControllers.index);
router.post('/AddUserType', usertypeControllers.AddUserType);
router.post('/EditUserType', usertypeControllers.UpdateUserType);
router.post('/DeleteUserType', usertypeControllers.DeleteUserType);

module.exports = router;