// 404 not found handler
const createError = require('http-errors');

function notFoundHandler(req,res,next){
    next(createError(404,"Your are lost! no page found"));
}

// default error handler

function errorHandler(err,req,res,next){
   res.locals.error = err;
   res.status(err.status || 500)

   if(!res.locals.html){
    res.render("error",{
        title:"Error Page"
    })
   }else{
    res.json(res.locals.error)
   }
}

module.exports ={
    notFoundHandler,
    errorHandler,
}