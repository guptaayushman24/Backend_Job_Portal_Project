const job_seeker_details = require('../models/job_seeker_details');
const mongoose = require('mongoose');
async function checkandpostjobseekerdetail(req,res){
    const body = req.body;
        console.log(body);
        const userId = req.user;
        console.log(typeof body);
        console.log(body);
    try{
       
    if (!body.skills){
        return res.json({'msg':'Please enter the skills'});
    }

    if (!body.yearofexperience){ 
        return res.json({'msg':'Please enter the year of experience'});
    
    }
    if (body.yearofexperience<0){
        return res.json({'msg':'Year of experience cannot be negative'});
    
    }
    
    if (!body.qualification){
       
        return res.json({'msg':'Please enter the qualification'});
    
    }
   
    if (!body.collegename){
        return res.json({'msg':'Please enter the college name'});
    }
    
    if (!body.CGPA){
       return res.json({'msg':'Please enter the CGPA'});
    }
    if (body.CGPA<0){
        return res.json({'msg':'CGPA cannot be negative'});
    }
    if (body.CGPA>10){
        return res.json({'msg':'CGPA cannot be more than 10'});
    }

    const data = await job_seeker_details.create({
        skills:body.skills,
        yearofexperience:body.yearofexperience,
        qualification:body.qualification,
        collegename:body.collegename,
        CGPA:body.CGPA,
        resume:{
            data:req.file.filename,
            contentType:'filename/pdf'
        },
        userdetail:userId.Email                                    
    })
    console.log(data);
        return res.json({data});
   }
   catch(err){
    console.log(err);
   }
}
async function getresume (req,res){
    try {
        // Fetch the document by ID
        const file = await sampleschema.findById(req.params.id);

        if (!file || !file.z || !file.z.data) {
            return res.status(404).json({ msg: 'File not found' });
        }

        // Set the content type based on the file's MIME type
        res.set('Content-Type', file.contentType);

        // Set the content disposition to suggest a file download
        res.set('Content-Disposition', 'attachment; filename="downloaded-file.pdf"');

        res.send(file.data);
        // Send the file data as a response
        console.log(file.z.data);
        // fs.writeFile(file.z.data,"file.pdf").close();
        res.send(file.z.data);
    } catch (err) {
        console.error('Error retrieving file:', err);
        res.status(500).json({ msg: 'Error retrieving file', error: err.message });
    }
}
module.exports={
    checkandpostjobseekerdetail,
    getresume
}