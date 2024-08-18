const job_seeker_dashbord = require('../models/job_seeker_dashbord')
async function job_applied_by_user (req,res){
    try{
        const data = await job_seeker_dashbord.find({'userdetail.Email':req.params.id});
       const response = data.map(item=>{
        return {
        companyname:item.companyname,
          role:item.role
        }
       })
    if (response.length==0){
        return res.json({'msg':'User has not applied in any company'});
    }
       console.log(typeof response);
       return res.json({'Applied Company':response});
    }
    
    catch(err){
        console.log(err);
    
    }
}

module.exports = {
    job_applied_by_user
}