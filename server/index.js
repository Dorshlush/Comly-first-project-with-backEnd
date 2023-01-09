const express = require('express')
const Joi = require('joi')
const users=require("./routes/users")
const auth=require("./routes/auth")
const comments=require("./routes/comments")
const app = express();
const log = require("./middlewares/logger")
const morgan=  require('morgan')
const connectDB = require("./config/db");
const colors = require("colors");
const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const cors = require('cors');

connectDB();
console.log(` this is the node env ${process.env.NODE_ENV}`) //und
console.log(app.get('env'))
app.use(cors({
  origin: ['http://localhost:3000']
}));


app.use(express.json()); // conver json to javascript and javascript to json
app.use(log)
app.use(express.static('public'))
if (app.get('env') === 'development')
  app.use(morgan('tiny'))


app.use('/api/comments',comments);
app.use('/api/users',users);
app.use('/api/login',auth)


const PORT = process.env.PORT || 5000; 

app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);




