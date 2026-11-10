const express = require('express')
const router = express.Router();
router.get('/query', (req, res) => {
    const message = req.query.message?.trim();
    if (!message) {
        res.status(400).render('error', {statusCode: 400, error: 'Invalid Message', message: 'Please provide a message: /query?message=YourMessage'});
    } else {
        res.status(200).render('queryResponse', {message: message, error: null});
    }
});
router.get('/urlparams/:paramname', (req, res) => {
    const message = req.params.paramname?.trim();
    if (!message) {
        res.status(400).render('error', {statusCode: 400, error: 'No param', message: 'Please provide a valid parameter'});
    } else {
        res.status(200).render('parameterResponse', {message: message, error: null});
    }
});
module.exports = router;