const job_seeker_schema = require('../models/job_seeker');
async function jobseekerpost (req,res){
   try{
    const body = req.body;
    console.log(body);
    const data = await job_seeker_schema.create({
        FirstName:body.FirstName,
        LastName:body.LastName,
        Email:body.Email,
        password:body.password,
        yearofexperience:body.yearofexperience
    })
    console.log(data)
    return res.json(data);
   }
   catch(err){
    
    console.log(err);
   
}
}
async function jobseekerget (req,res){
    return res.json({'msg':'Get'}) 
}

module.exports={


    jobseekerpost,
    jobseekerget
}