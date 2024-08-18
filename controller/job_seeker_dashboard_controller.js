const mongoose = require('mongoose');
const job_seeker_dashboard_schema = require('../models/job_seeker_dashbord');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'job_portal_$%78**';
async function jobseekerdashboard(req,res){
    try{
        const body = req.body;
        const userId =  req.user;
        console.log(userId);
        const data = await job_seeker_dashboard_schema.create({
            companyname:body.companyname,
            role:body.role,
            userloginid:userId,
            userdetail:userId
        })
        return res.json({data});
    
    }
    catch(err){
        console.log(err);
    
    }

}
module.exports={

    jobseekerdashboard
}




