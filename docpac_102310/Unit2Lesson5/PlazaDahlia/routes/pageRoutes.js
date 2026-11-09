const express = require('express')
const router = express.Router();
let navLinks = [];
router.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Form', appName: process.env.APP_NAME, message: 'This is where all the forms and stuff will be', pageMessage: 'Welcome to the site', navLinks });
});
module.exports = router;