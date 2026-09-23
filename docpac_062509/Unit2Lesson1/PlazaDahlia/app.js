require('dotenv').config();
const express = require('express')
const app = express();
app.listen(process.env.PORT, 'localhost', () => {
    console.log(`${process.env.APP_NAME} is running at http://localhost:${process.env.PORT}/`);
});