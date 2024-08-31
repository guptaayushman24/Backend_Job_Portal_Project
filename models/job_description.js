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
    Experiencelevel:{
        type:String,
        enum:["Fresher","Mid-level","Experience","Executive"]
    },
    stipend:{
        require:true,
        type:Number
    },
    hiringuserdetail:[{type:mongoose.Schema.Types.Object,'ref':'job_post'}]
},{timestamps:true})
const jobpost = mongoose.model('jobpost',job_post);
module.exports = jobpost;


