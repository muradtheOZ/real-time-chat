const express = require('express');
const router = express.Router();

const {getMessages} = require('../controller/inboxController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtml');

// Inbox page
router.get('/',decorateHtmlResponse("Inbox"),getMessages);

module.exports = router;