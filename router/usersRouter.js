const express = require('express');
const router = express.Router();

const {getUsers} = require('../controller/getUsersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtml');

// Users page
router.get('/',decorateHtmlResponse("User List"),getUsers);

module.exports = router;