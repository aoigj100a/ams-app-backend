const express = require('express'); 
const router  = express.Router(); 

// NOTE import controllers 
const data = require('../controllers'); 

// routers
router.get('/',data.getTestMockup)

module.exports = router;