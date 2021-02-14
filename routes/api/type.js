var express = require('express');
var router = express.Router();
const typeControllers = require("../../controllers/TypeControllers")

router.get('/', typeControllers.index);
router.post('/AddType', typeControllers.AddType);
router.post('/EditType', typeControllers.UpdateType);
router.post('/DeleteType', typeControllers.DeleteType);

module.exports = router;