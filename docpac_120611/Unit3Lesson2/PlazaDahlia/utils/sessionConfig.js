const Database = require('better-sqlite3');
const session = require('express-session');
const SqliteStore = require('better-sqlite3-session-store')(session);
const path = require('path');
const dbPath = path.join(__dirname, '..', 'data', 'sessions.db');
const db = new Database(dbPath);
const store = new SqliteStore({
    database: db
});
const sessionMiddleware = session({
    secret: SESSION_SECRET,
    store: store,
    resave: false,
    saveUninitialized: false,
    cookie: {

    }
});
module.exports = store