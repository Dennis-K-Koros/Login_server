require('dotenv').config();
const mongoose = require('mongoose');

mongoose
 .connect(process.env.MONGODB_URI, {
   useNewUrlParser: true,
   serverSelectionTimeoutMS: 30000,
 })
 .then(() =>{
    console.log("DB Connected");
 })
 .catch((err)=>console.log(err));
