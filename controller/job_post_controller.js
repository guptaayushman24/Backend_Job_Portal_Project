const job_post = require('../models/job_description')
async function jobpostfunction(req,res){
    try{
        const body = req.body;
        const {companyname,role} = req.body;
        // role frontend
        const databasedata = await job_post.findOne({companyname:companyname});
        console.log(databasedata.role);
        if (databasedata.role==role){
            return res.json({'msg':'Company Alerady posted that role'});
        }
        console.log(databasedata.role);
        const data = await job_post.create({
         role:body.role,
         companyname:body.companyname,
         duration:body.duration,
      
         jobtype:body.jobtype,
         location:body.location,
         userrole:body.userrole,
         stipend:body.stipend,
        })
        return res.json({data});
    }
    catch(err){
      
        console.log(err);
    
    }
}
module.exports = {
    jobpostfunction
}