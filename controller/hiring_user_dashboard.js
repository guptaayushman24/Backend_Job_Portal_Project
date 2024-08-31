const hiring_schema = require('../models/job_description');
async function job_hiring_dashboard (req,res){
    try{
        const findjob = await hiring_schema.find({'hiringuserdetail.Email':req.params.id});
        console.log(findjob);
        const response = findjob.map(item=>{
            return{
                role:item.role,
                duration:item.duration,
                jobtype:item.jobtype,
                location:item.location,
                Experiencelevel:item.Experiencelevel,
                stipend:item.stipend

            }
        })
    
        if (response.length==0){
            return res.json({'msg':'No job posted by the company'});
        }
        return res.json({'msg':response});
    }
   
    catch(err){
        console.log(err);
    }
}
module.exports = {
    job_hiring_dashboard
}