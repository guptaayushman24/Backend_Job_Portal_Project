const job_seeker_details = require('../models/job_seeker_details');
const mongoose = require('mongoose');
async function checkandpostjobseekerdetail(req,res){
    const body = req.body;
    const userId = req.user;
    try{
    if (!body.skills){
        return res.json({'msg':'Please enter the skills'});
    }
    if (!body.yearofexperience){
        return res.json({'msg':'Please enter the year of experience'});
    }
    if (body.yearofexperience<0){
        return res.json({'msg':'Year of experience cannot be negative'});
    
    }
    
    if (!body.qualification){
       
        return res.json({'msg':'Please enter the qualification'});
    
    }
   
    if (!body.collegename){
        return res.json({'msg':'Please enter the college name'});
    }
    
    if (!body.CGPA){
       return res.json({'msg':'Please enter the CGPA'});
    }
    if (body.CGPA<0){
        return res.json({'msg':'CGPA cannot be negative'});
    }
    if (body.CGPA>10){
        return res.json({'msg':'CGPA cannot be more than 10'});
    }

    const data = await job_seeker_details.create({
        skills:body.skills,
        yearofexperience:body.yearofexperience,
        qualification:body.qualification,
        collegename:body.collegename,
        CGPA:body.CGPA,
        userdetail:userId.Email
    })
        return res.json({data});
   }
   catch(err){
    console.log(err);
   }
}
module.exports={
    checkandpostjobseekerdetail
}