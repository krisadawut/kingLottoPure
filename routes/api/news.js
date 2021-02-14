var express = require('express');
var router = express.Router();
const newsControllers = require("../../controllers/NewsControllers")

router.get('/', newsControllers.index);
router.post('/AddNews', newsControllers.AddNews);
router.post('/EditNews', newsControllers.UpdateNews);
router.post('/DeleteNews', newsControllers.DeleteNews);

module.exports = router;