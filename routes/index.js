var express = require('express');
var router = express.Router();


// var user = require('../controller/usercontroller');

// router.post('/register',user.register_user);

// router.post('/login',user.login_user);
// router.post('/logout',user.logout_user);


var user = require('../controller/usercontroller');

router.post('/register',user.user_modal);

router.get('/user',user.select_recored);


module.exports = router;
