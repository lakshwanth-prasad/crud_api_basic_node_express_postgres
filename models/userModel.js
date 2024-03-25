const db = require('../config/database');

class User {
  static async findAll() {
    const query = 'SELECT * FROM accounts';
    const { rows } = await db.query(query);
    return rows;
  }

  static async findById(id) {
    const query = 'SELECT * FROM accounts WHERE id = $1';
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }

  static async create(user) {
    const { username, email, password } = user;
    const query = 'INSERT INTO accounts (username, email, password) VALUES ($1, $2, $3) RETURNING *';
    const { rows } = await db.query(query, [username, email, password]);
    return rows[0];
  }

  static async update(id, user) {
    const { username, email } = user;
    const query = 'UPDATE accounts SET username = $1, email = $2 WHERE id = $3 RETURNING *';
    const { rows } = await db.query(query, [username, email, id]);
    return rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM accounts WHERE id = $1';
    await db.query(query, [id]);
  }
}

module.exports = User;
