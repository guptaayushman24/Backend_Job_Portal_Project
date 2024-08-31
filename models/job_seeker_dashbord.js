const {Schema} = require('mongoose');
const mongoose = require('mongoose');
const job_seeker_dashboard = new mongoose.Schema({
    role:{
        type:String,
        require:true,
    },
    companyname:{
        type:String,
        require:true
    },
    userloginid:{
        type:Schema.Types.ObjectId
    },
    userdetail:[{type:mongoose.Schema.Types.Object,'ref':'jobpost'}],


})

const job_seeker_dashboard_schema = mongoose.model('job_seeker_dashboard_schema',job_seeker_dashboard);
module.exports = job_seeker_dashboard_schema;