const express = require('express');
const router = express.Router();

const {getLogin} = require('../controller/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtml');

// login page
router.get('/',decorateHtmlResponse("Login"),getLogin);

module.exports = router;