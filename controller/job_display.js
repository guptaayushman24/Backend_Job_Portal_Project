const jobpost = require('../models/job_description')
async function getalljobsdetail (req,res){
    try{
        const data = await jobpost.find({});
        return res.json({data})
    }
    catch(err){
        console.log(err);
    }
    
}
module.exports={
    getalljobsdetail
}