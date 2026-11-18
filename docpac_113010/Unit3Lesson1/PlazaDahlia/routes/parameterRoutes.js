const express = require('express')
const router = express.Router();
const model = require('../models/entryModel');
router.get('/query', (req, res) => {
    const message = req.query.message?.trim();
    if (!message) {
        res.status(400).render('error', {statusCode: 400, error: 'Invalid Message', message: 'Please provide a message: /query?message=YourMessage'});
    } else {
        const result = model.createEntry(message, 'urlparam');
        const entries = model.getAllEntries();
        res.status(200).render('queryResponse', {message: message, error: null, entries: entries});
    }
});
router.get('/urlparams/:paramname', (req, res) => {
    const message = req.params.paramname?.trim();
    if (!message) {
        res.status(400).render('error', {statusCode: 400, error: 'No param', message: 'Please provide a valid parameter'});
    } else {
        const result = model.createEntry(message, 'urlparam');
        const entries = model.getAllEntries();
        res.status(200).render('parameterResponse', {message: message, error: null, entries: entries});
}
});
module.exports = router;