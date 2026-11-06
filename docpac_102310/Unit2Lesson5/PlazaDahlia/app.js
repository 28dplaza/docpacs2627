require('dotenv').config();
const requestLogger = require('./utils/requestLogger');
const express = require('express')
const app = express();
const path = require('path');
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
const pageRoutes = require('./routes/pageRoutes');
const formRoutes = require('./routes/formRoutes');
const parameterRoutes = require('./routes/parameterRoutes');
app.use(requestLogger);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(pageRoutes);
app.use(formRoutes);
app.use(parameterRoutes);
app.use((req, res) => {
    res.status(404).render('error', {statusCode: 404, error: 'Page Not Found', message: 'The page you requested does not exist'});
});
app.listen(process.env.PORT, 'localhost', () => {
    console.log(`${process.env.APP_NAME} is running at http://localhost:${process.env.PORT}/`);
});