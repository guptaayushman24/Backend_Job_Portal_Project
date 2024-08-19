const jobpost = require('../models/job_description');
async function jobfilter (req,res){
    const body = req.body.jobtype; // Internship or Full Time
    const data = await jobpost.find({'jobtype':body});
    return res.json({'Job Type':data});
}
async function jobfilterlocation(req,res){
    const body = req.body.location;
    const data = await jobpost.find({'location':body});
    if (data.length==0){
        return res.json({'msg':`There is no job posting in ${body}`});
    }
    return res.json({'Job Location':data});
}
async function jobfiltercompanyname(req,res){
    const body = req.body.companyname;
   
    const data = await jobpost.find({'companyname':body});
    if (data.length==0){
        return res.json({'msg':`There is no job posting in ${body}`});
    }
    return res.json({'Job Location':data});
}
async function specificrole(req,res){  // CompanyName and Job Type
    const body = req.body.role;
   
    const data = await jobpost.find({'role':body});
    if (data.length==0){
        return res.json({'msg':`No job posting for ${body}`});
    }
    return res.json({'Job Location':data});
}
async function companynamewithspecificrole(req,res){  // CompanyName and Job Type
    const body1 = req.body.role;
    const body2 = req.body.companyname
   
    const data = await jobpost.find({'role':body1,'companyname':body2});
    if (data.length==0){
        return res.json({'msg': `Currently ${body2} is not hiring for the ${body1} role`});
    }
    return res.json({'Job Location':data});
}
async function experiencelevel(req,res){
    const body = req.body.experiencelevel;
    const data = await jobpost.find({'Experiencelevel':body});
    if (data.length==0){
        return res.json({'msg':`There is no job posting for ${body}`});
    }
    return res.json({'Job Location':data});
}
async function duration (req,res){
    const body = req.body.duration;
    console.log(body);
    let query = {};
    if (body<16){
        query = { 'duration': { $lt: body } };
    }
    else if (body>16 && body<24){
        query={
            $and:[
                {'duration':{$gt:body}},
                {'duration':{$lt:body}}
            ]
        }
    }
    else if (duration>24){
        query={'duration':{$gt:body}};
    }
    const data = await jobpost.find(query);
    if  (data.length==0){
        return res.json({'msg':`Currently there are no job or internship for ${body} weeks`});
    }
    return res.json({data});
}
module.exports = {
    jobfilter,
    jobfilterlocation,
    jobfiltercompanyname,
    specificrole,
    companynamewithspecificrole,
    experiencelevel,
    duration
}