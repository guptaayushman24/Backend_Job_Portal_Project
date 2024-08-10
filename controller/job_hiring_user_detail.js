const job_seeker_schema = require('../models/job_hiring_user_detail_schema');
async function job_hiring_user_detail (req,res){
   try{
    const body = req.body;
    console.log(body);
    const data = await job_seeker_schema.create({
        FirstName:body.FirstName,
        LastName:body.LastName,
        Email:body.Email,
        password:body.password,
        companyname:body.companyname
    })
    console.log(data)
    return res.json(data);
   }
   catch(err){
    
    console.log(err);
   
}

}
module.exports={
    job_hiring_user_detail
}