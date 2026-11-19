const express = require('express')
const router = express.Router();
let navLinks = [
    { pageName: "Homepage", pageDestination: "/", pageDescription: "This is the Homepage" },
    { pageName: "Form Page", pageDestination: "/form", pageDescription: "This is the Form Page" },
    { pageName: "Parameter", pageDestination: "/urlparams/test", pageDescription: "This is the Parameter Page" },
    { pageName: "Query", pageDestination: "/query?message=test", pageDescription: "This is the Query Page" }];
router.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Form', appName: process.env.APP_NAME, message: 'This is where all the forms and stuff will be', pageMessage: 'Welcome to the site', navLinks });
});
module.exports = router;