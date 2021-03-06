const { Pool } = require("pg");
require("dotenv").config();

const db = new Pool({
  user: process.env.user,
  host: process.env.host,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port_SQL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const createConnection = async (req, res, next) => {
  try {
    const SqlSelect = "SELECT * FROM userResume";
    const response = await db.query(SqlSelect);

    res.json({ status: "connected", result: response.rows });
  } catch (error) {
    return next(error);
  }
};

module.exports = { db, createConnection };

// const db = new Pool({
//   user: process.env.user,
//   host: process.env.host,
//   password: process.env.password,
//   database: process.env.database,
//   port: process.env.port_SQL,
// });
