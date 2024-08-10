const mongoose = require('mongoose');
const job_post = new mongoose.Schema({
    role:{
        type:String,
        require:true,
    },
    companyname:{
        type:String,
        require:true,
    },
    duration:{
        type:Number,
        require:true
    },
    jobtype:{
        type:String,
       
        enum:["Internship","Full Time"]
    },
    location:{
        type:String,

        default:"Remote"
    },
    userrole:{
        type:String,
        enum:["SDE","Data Science","Marketing","Finance"]
    },
    stipend:{
        require:true,
        type:Number
    }
},{timestamps:true})
const jobpost = mongoose.model('jobpost',job_post);
module.exports = jobpost;