const job_seeker = require('../models/job_hiring_user_detail_schema')
async function checkemailpasswordhiring(req,res){
    try{
        const {email,password} = req.body
        const databasedetail = await job_seeker.findOne({Email:email});
        console.log(password)
        if (!databasedetail){
            return res.json({'msg':'Email not found please do signup'})
         }
         if (databasedetail.password !=password){
             return res.json({'msg':'Incorrect password please check your password'});
          }
        

        if (databasedetail.Email!=email || databasedetail.password!=password){
            return res.json({'msg':'Email and Password is not matching'});
        }
        return res.json({'msg':'Credential Matched'});
    
    }
    
    catch(err){
        console.log(err);
    
    }


}

module.exports = {

    checkemailpasswordhiring
}