const connection = require('./database.js');
function createEntry(value, source) {
    const sql = `INSERT INTO entries (submitted_value, source) VALUES (?, ?)`
    const result = connection.prepare(sql).run(value, source);
    return result
}
function getAllEntries() {
   const sql = `SELECT * FROM entries ORDER BY timestamp DESC`
   const entries = connection.prepare(sql).all();
   return entries
}
module.exports = {
  createEntry,
  getAllEntries
};