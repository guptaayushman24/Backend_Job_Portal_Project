const job_seeker_schema = require('../models/job_seeker');
function validdetail(req,res,next){
    const validNameRegex = /^[A-Za-z\s]+$/;
    const regexemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexpassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const {FirstName,LastName,Email,password,yearofexperience,resume} = req.body;
    const body = req.body;
    console.log(body);
    try{
        if (!FirstName){
            return res.json({'msg':'Please enter the name'})
        }
        if (!validNameRegex.test(FirstName)) {
            return res.status(400).json({ 'msg': 'Enter a valid First Name' });
        }
        if (!LastName){
          
            return res.send({'msg':'Please enter the Last Name'});
        
        }
        
        if (!validNameRegex.test(LastName)){
            return res.status(400).json({ 'msg': 'Enter a valid Last  Name' });
        }
        if (!Email){
            return res.send({'msg':'Please enter the Email'});
        }
        if (!regexemail.test(Email)){
            return res.json({'msg':'Plsease enter the correct email'});
        }
       
        if (!password){
            return res.send({'msg':'Please enter the password'});
        }
        if (password.length<5){
            return res.send({'msg':'Password length is too short'});
        }
        if (!regexpassword.test(password)){
            return res.send({'msg':'Password should contain number and the special character'});
        }
        if (!yearofexperience){
            return res.send({'msg':'Please enter the year of experience'});
        }
        if (yearofexperience<0){
            return res.send({'msg':'Please enter the valid year of experience'});
        }
        // if (!resume){
        //     return res.json({'msg':'Pleae upload the resume'})
        // }
        next();
    }
    catch(err){
        return res.send({'msg':err});
    }
}
module.exports={
    validdetail
}