const express = require('express')
const router = express.Router();
router.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Homepage', appName: process.env.APP_NAME, message:'This is where all the forms and stuff will be'});
});
module.exports = router;