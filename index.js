const express = require('express');
const router = require('./routes/routes');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/job_portal').then(()=>{
    console.log("Mongodb Connected");
}).catch((err)=>{
    console.log(err);
})
const PORT = 5000;
app.use(express.json());
// app.use(validdetail);
app.use('/api',router);
app.listen(PORT,()=>{
  
    console.log(`Server is running on the PORT ${PORT}`);

});
