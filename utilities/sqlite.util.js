// Modules imports
const path = require('path');
const sqlite = require('sqlite3').verbose();

/** 
* Allows you to connect at DB
* @returns {Promise<sqlite.Database>}
*/
const getConnection = () => {
  return new Promise((resolve, reject) => {
    const dbPath = path.resolve(process.cwd(), 'db/chinook.db');
    const db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, (err) => {
      if (err) {
        console.error('Error on DB connection');
        return reject(err);
      }

      console.log('Connection on DB succedeed');
      resolve(db);
    });
  });
}