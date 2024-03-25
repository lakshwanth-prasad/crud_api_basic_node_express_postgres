const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "accounts",
    password: "1234567",
    port: 5432
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  setupDatabase: () => {
    console.log('Database connection established');
  }
};
