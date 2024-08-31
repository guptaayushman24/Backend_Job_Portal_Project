const job_seeker_schema = require('../models/job_hiring_user_detail_schema');
async function job_hiring_user_detail (req,res,error){
    const body = req.body;
    const {FirstName,LastName,Email,password,companyname} = req.body;
   try{
    if (!FirstName){
        return res.json({'msg':'Please enter the First Name'});
    }
    if (!LastName){
        return res.json({'msg':'Please enter the Last Name'});
    }
    if (!Email){
        return res.json({'msg':'Please enter the Email'});
    }
    if (!password){  
        return res.json({'msg':'Please enter the password'})
    
    }
    const data = await job_seeker_schema.create({
        FirstName:body.FirstName,
        LastName:body.LastName,
        Email:body.Email,
        password:body.password,
    
    
    })
   

    return res.json(data);
   

}
   catch(err){ 
    if (err.code===11000){
        return res.json({'msg':'User already exist please do the signin'});
    }
    console.log(err);
   
}

}
module.exports={
    job_hiring_user_detail
}