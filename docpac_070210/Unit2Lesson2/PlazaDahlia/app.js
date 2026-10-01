require('dotenv').config();
const express = require('express')
const app = express();
const path = require('path');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('<h2 id="title">This is Forms and Stuff</h2><p>This where all the forms and stuff will be</p><a href="/form">The Project Interest Form</a>')
});
app.listen(process.env.PORT, 'localhost', () => {
    console.log(`${process.env.APP_NAME} is running at http://localhost:${process.env.PORT}/`);
});