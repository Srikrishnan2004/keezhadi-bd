import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./db/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(PORT, async () => {
  console.log(`Server is running on port:${PORT}`);
  try {
    const client = await pool.connect(); // Test the database connection
    console.log('Database connection initialized successfully.');
    client.release(); // Release the client back to the pool
  } catch (err) {
    console.error('Error connecting to the database:', err.stack);
  }
});
