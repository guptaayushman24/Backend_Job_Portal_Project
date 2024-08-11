const job_post = require('../models/job_description')
async function jobpostfunction(req,res){
    try{
        const body = req.body;
        const {companyname,role} = req.body;
        // role frontend
        const databasedata = await job_post.find({companyname:companyname});
        //  console.log(databasedata.length)
        if (!databasedata){
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
        else{
            for (let i=0;i<databasedata.length;i++){
                if (databasedata[i].role==role){
                    return res.json({'msg':'Company already posted that role'});
                }
            }
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
        
    }
    catch(err){
      
        console.log(err);
    
    }
}
module.exports = {
    jobpostfunction
}



 //     if (databasedata.companyname!=companyname || databasedata.role!=role){
    //         console.log("From db",databasedata.companyname);
    //         console.log("From db",databasedata.role);
    //         console.log("From user",companyname);
    //         console.log("From user",role);
    //     const data = await job_post.create({
    //      role:body.role,
    //      companyname:body.companyname,
    //      duration:body.duration,
      
    //      jobtype:body.jobtype,
    //      location:body.location,
        
    //      userrole:body.userrole,
         
    //      stipend:body.stipend,
    //     })
    //     return res.json({data});
    // }
    // else{
    //     return res.json({'msg':'Company Alerady posted that role'});
    // }