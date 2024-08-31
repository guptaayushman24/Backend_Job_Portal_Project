const mongoose = require('mongoose');
const job_seeker_detail = new mongoose.Schema({
   skills:[{
        type:String,
        require:true
   }],
   yearofexperience:{
    type:Number,
    require:true,
   },
   qualification:[{
    type:String,
    require:true
   }],
   collegename:{
    require:true,

    type:String
   },
   CGPA:{
    requrie:true,
    type:Number
   },
   userdetail:[{type:mongoose.Schema.Types.Object,'ref':'job_seeker_schema'}]
})
const Jobseekerdetail = mongoose.model('Jobseekerdetail',job_seeker_detail);
module.exports = Jobseekerdetail;