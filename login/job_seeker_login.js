const jwt = require('jsonwebtoken');
const JWT_SECRET = 'job_portal_$%78**';
const job_seeker = require('../models/job_seeker')
 async function checkemailpassword(req,res){
     try{
         const {email,password} = req.body
        const databasedetail = await job_seeker.findOne({Email:email});
        // console.log(password)
        if (!databasedetail){
            return res.json({'msg':'Email not found please do signup'})
         }
         if (databasedetail.password !=password){
             return res.json({'msg':'Incorrect password please check your password'});
          }
        if (databasedetail.Email!=email || databasedetail.password!=password){
            return res.json({'msg':'Email and Password is not matching'});  
        
        }
        // Create a token with the userid
        const token = jwt.sign(databasedetail.toJSON(), JWT_SECRET);
        res.cookie("token",token);
        // console.log('Token:', token);
        // console.log(databasedetail._id.toString());

        // console.log(req.user);
        // console.log("The token is ",req.user);
        return res.json({ 'msg': 'Credential Matched',token});
    
    }
    
    catch(err){
        console.log(err);
    
    }


}

module.exports = {

    checkemailpassword,
}


