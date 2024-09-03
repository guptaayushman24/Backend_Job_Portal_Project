const mongoose = require('mongoose');
const jobseeker = new mongoose.Schema({
    FirstName:{
        type:String,
        require:true,
    },
    LastName:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
    
    
    password:{
        type:String,
        require:true
    },
    yearofexperience:{
        type:Number,
        require:true,
    },
})
const job_seeker_schema = mongoose.model('job_seeker_schema',jobseeker);
module.exports = job_seeker_schema;