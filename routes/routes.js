const {Router} = require('express');
const router = Router();
const {jobseekerpost,jobseekerget} = require('../controller/job_seeker_controller')
const {jobpostfunction} = require('../controller/job_post_controller');
const {validdetail} = require('../middleware/job_seeker_auth');
const {checkemailpassword} = require('../login/job_seeker_login');
const {job_hiring_user_detail} = require('../controller/job_hiring_user_detail')
const {getalljobsdetail} = require('../controller/job_display');
const {jobseekerdashboard} = require('../controller/job_seeker_dashboard_controller');
const {authenticateToken} = require('../middleware/job_seeker_login_auth');
const {job_applied_by_user} = require('../controller/job_applied_by_user');
const {checkandpostjobseekerdetail} = require('../controller/job_seeker_detail');
const {jobfilter, jobfilterlocation, jobfiltercompanyname, specificrole, companynamewithspecificrole,experiencelevel,duration} = require('../controller/job_filter');
const {job_hiring_auth} = require('../middleware/job_hiring_auth')
const {hiring_user_signin} = require('../login/job_hiring_login')
const {authenticateTokenhiring} = require('../middleware/job_hiring_login_auth')

const { job_hiring_dashboard } = require('../controller/hiring_user_dashboard');
router.post('/jobseekerpost',validdetail,jobseekerpost);
router.post('/jobpost',authenticateTokenhiring,jobpostfunction);
router.post('/jobseekerlogin',checkemailpassword);
router.post('/jobhiringuserdetail',job_hiring_auth,job_hiring_user_detail); // Sign up page for the hiring people // job_hiring_auth->middleware
router.post('/jobhiringsignin',hiring_user_signin); // Signin page for the job hiring user
router.post('/jobseekerdashboard',authenticateToken,jobseekerdashboard);
router.post('/jobfilter',jobfilter);
router.post('/jobfilterlocation',jobfilterlocation);
router.post('/jobfiltercompanyname',jobfiltercompanyname);
router.post('/specificrole',specificrole);
router.post('/companynamewithspecificrole',companynamewithspecificrole);
router.post('/experiencelevel',experiencelevel);
router.post('/duration',duration);
router.post('/jobseekerdetail',authenticateToken,checkandpostjobseekerdetail);

router.get('/jobseekerget',jobseekerget);
router.get('/getalljobdetail',getalljobsdetail);
router.get('/jobappliedbyuser/:id',job_applied_by_user);
router.get('/hiringdashboard/:id',job_hiring_dashboard);
module.exports = router;


// checkemailpasswordhiring