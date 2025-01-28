import pkg from "pg";
import dbConfig from "../config/db.config.js";

const { Pool } = pkg;

const pool = new Pool({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

// Test the connection
pool
  .connect()
  .then((client) => {
    console.log("Connected to the database successfully!");
    client.release();
  })
  .catch((err) => {
    console.error("Database connection error:", err.stack);
  });

export default pool;
