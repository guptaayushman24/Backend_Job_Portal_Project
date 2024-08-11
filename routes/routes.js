const {Router} = require('express');
const router = Router();
const {jobseekerpost,jobseekerget} = require('../controller/job_seeker_controller')
const {jobpostfunction} = require('../controller/job_post_controller');
const {validdetail} = require('../middleware/job_seeker_auth');
const {job_hiring_auth} = require('../middleware/job_hiring_auth')
const {checkemailpassword} = require('../login/job_seeker_login');
const {checkemailpasswordhiring} = require('../login/job_hiring_login')
const {job_hiring_user_detail} = require('../controller/job_hiring_user_detail')
const {getalljobsdetail} = require('../controller/job_display');
router.post('/jobseekerpost',validdetail,jobseekerpost);
router.post('/jobpost',jobpostfunction)
router.post('/jobseekerlogin',checkemailpassword);
router.post('/jobhiringuserdetail',job_hiring_auth,job_hiring_user_detail);
router.post('/hiringlogin',checkemailpasswordhiring);
router.get('/jobseekerget',jobseekerget);

router.get('/getalljobdetail',getalljobsdetail);
module.exports = router;
