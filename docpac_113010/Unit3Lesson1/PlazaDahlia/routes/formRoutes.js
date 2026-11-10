const express = require('express')
const router = express.Router();
const path = require('path')
router.get('/form', (req, res) => {
    res.render('form', {formTitle: 'Project Interest Form', instructions: "Please fill out all the fields provided"});
});
router.post('/form', (req, res) => {
    const name = req.body.studentName?.trim();
    if (!name) {
        res.status(400).render('error', {statusCode: 400, error: 'Invalid Input', message: 'Please input a name'});
    } else {
        res.status(200).render('formResponse', {name: name, error: null});
    }
});
module.exports = router;