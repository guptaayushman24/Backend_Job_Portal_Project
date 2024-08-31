const job_post_schema = require('../models/job_hiring_user_detail_schema')
async function job_hiring_auth (req,res,error,next){
    const validNameRegex = /^[A-Za-z\s]+$/;
    const regexemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexpassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const body = req.body;
    const {FirstName,LastName,Email,password,companyname} = req.body;
   try{
    
    if (!FirstName){
        return res.json({'msg':'Please enter the First Name'});
    }
    if (!validNameRegex.test(FirstName)){
        
        return res.json({'msg':'Please enter the valid name'});
    }
    
    if (!LastName){
        return res.json({'msg':'Please enter the Last Name'});
    }
    
    if (!validNameRegex.test(LastName)){
        return res.status(400).json({ 'msg': 'Enter a valid Last  Name' });
    }
    if (!Email){
        return res.json({'msg':'Please enter the Email'});
    }
    if (!regexemail.test(Email)){
        return res.json({'msg':'Please enter the correct email'});
    }
    if (!password){  
        return res.json({'msg':'Please enter the password'})
    }
    if (password.length<5){
        return res.send({'msg':'Password length is too short'});
    }
    
    if (!companyname){
        return res.json({'msg':'Please enter the company name'});
    }

    next();
}
catch(err){
    console.log(err);
}

}
module.exports ={
    job_hiring_auth
}