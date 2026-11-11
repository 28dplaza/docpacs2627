const sql = `
    CREATE TABLE IF NOT EXISTS entries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        submitted_value TEXT NOT NULL,
        source TEXT NOT NULL,
        timestamp TEXT DEFAULT CURRENT_TIMESTAMP
        connection.exec(sql);
    )
`;