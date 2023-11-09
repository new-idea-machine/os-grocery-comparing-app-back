import pgp from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env'});


// Initialization options, if any
const initOptions = {};

// Create a database connection using the connection string from your .env file.
const db = pgp(initOptions)(process.env.DATABASE_URL);

db.any('SELECT * FROM items.items')
  .then(data => {
    console.log('DATA:', data);
  })
  .catch(error => {
    console.log('ERROR:', error);
  });
