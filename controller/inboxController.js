function getMessages(req, res,next) {
    res.render('inbox');
}

module.exports = {
    getMessages,
}