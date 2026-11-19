const path = require('path');
const dbPath = path.join(__dirname, '..', 'data', 'app.db');
const db = require('better-sqlite3');
const connection = db(dbPath)
const sql = `
    CREATE TABLE IF NOT EXISTS entries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        submitted_value TEXT NOT NULL,
        source TEXT NOT NULL,
        timestamp TEXT DEFAULT CURRENT_TIMESTAMP
    )
`;
connection.exec(sql);
console.log('Success');
connection.close();