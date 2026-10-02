require('dotenv').config();
const express = require('express')
const app = express();
const path = require('path');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('<h2 id="title">This is Forms and Stuff</h2><p>This where all the forms and stuff will be</p><a href="/form">The Project Interest Form</a>')
});
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});
app.post('/form', (req, res) => {
    const name = req.body.studentName?.trim();

    if (!name) {
        res.status(400).send('Invalid Name');
    } else {
        res.status(200).send(`Thanks, ${name}!`);
    }
});
app.get('/query')
app.listen(process.env.PORT, 'localhost', () => {
    console.log(`${process.env.APP_NAME} is running at http://localhost:${process.env.PORT}/`);
});