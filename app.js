// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
const path = require ("path");
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');

// internal imports
const {notFoundHandler, errorHandler} = require('./middlewares/common/errorHandler');

const app = express();
dotenv.config();

// database connection

// database connection with mongoose
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("connection successful"))
.catch((err) => console.log(err));


// request process
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname,"public")));

// parse cookies

app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use('/',loginRouter)
app.use('/users',usersRouter)
app.use('/inbox',inboxRouter)


// 404 not found handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${process.env.PORT}`)
})