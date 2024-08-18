const jwt = require('jsonwebtoken');
const job_seeker_schema = require('../models/job_seeker');
const JWT_SECRET = 'job_portal_$%78**';
async function authenticateToken(req, res, next) {
    const token = req.cookies.token;
    console.log("The token is sfdfdfr",token);
    // console.log(token);

    if (!token) {
        return res.status(401).json({ 'msg': 'Access Denied: No Token Provided' });
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = await job_seeker_schema.findById(verified._id);
        // Extracted user id will be available in req.user.userid
      
        console.log(verified);
        console.log("The req.user is ",req.user);
        next();

    } catch (err) {
     
        return res.status(400).json({ 'msg':  err });
    }
}

module.exports = {
    authenticateToken
}


