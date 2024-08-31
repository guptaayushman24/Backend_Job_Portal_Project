const mongoose = require('mongoose');
const job_post = new mongoose.Schema({
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
    
})
const job_post_schema = mongoose.model('job_post_schema',job_post);
module.exports = job_post_schema;