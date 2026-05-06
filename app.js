const express=require('express');
const app=express()
const cookieParser = require('cookie-parser');
const path=require('path');
const db=require("./config/mongooseConnection");
const expressSession=require("express-session");
const flash=require("connect-flash");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const logger = require('./logger');
require("dotenv").config();

const ownersRouter=require("./routes/ownersRouter");
const usersRouter=require("./routes/usersRouter");
const brandsRouter=require("./routes/brandsRouter");
const bikesRouter=require("./routes/bikesRouter");


//Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
    expressSession({
        secret: process.env.EXPRESS_SESSION_SECRET,
        resave:false,
        saveUninitialized:false,
    })
);
app.use(flash());
app.set('view engine','ejs');
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

//routers
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/brands",brandsRouter);
app.use("/bikes",bikesRouter);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(3000, () => logger.info("Server listening on Port 3000"));