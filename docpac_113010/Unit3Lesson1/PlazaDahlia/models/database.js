const path = require('path');
const dbPath = path.join(__dirname, '..', 'data', 'app.db');
const db = require('better-sqlite3');
const connection = db(dbPath).verbose();
module.exports = connection;