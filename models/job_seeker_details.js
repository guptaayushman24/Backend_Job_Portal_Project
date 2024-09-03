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
      type:String,
     
      require:true
   },
   CGPA:{
      require:true,
    type:Number
   },
   resume:{
   data:Buffer,
   contentType:String
   },
   userdetail:[{type:mongoose.Schema.Types.Object,'ref':'job_seeker_schema'}]
})
const Jobseekerdetail = mongoose.model('Jobseekerdetail',job_seeker_detail);
module.exports = Jobseekerdetail;