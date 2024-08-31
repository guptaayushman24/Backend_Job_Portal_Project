const jwt = require('jsonwebtoken');
const JWT_SECRET = 'job_portal_$%^^78**';
const job_hiring_user_detail_schema = require('../models/job_hiring_user_detail_schema')
async function hiring_user_signin(req,res,next){
    try{
        const {email,password} = req.body;
        const checkemail = await job_hiring_user_detail_schema.findOne({Email:email});
        if (!checkemail){
            return res.json({'msg':'Please do the signup'});
        }
        if (password!=checkemail.password){
            return res.json({'msg':'Please check your password'});
        }
        // Creating the token with the userid
        const token = jwt.sign(checkemail.toJSON(),JWT_SECRET);
        res.cookie("token",token);
        
        next();
        return res.json({'msg':'Login Successfully',token});
    }
    catch(err){
        console.log(err);
    
    }
}
module.exports = {
    hiring_user_signin
}
// Now generate the toekn 