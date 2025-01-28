import pool from "../db/db.js";

export const getArtifacts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM artifacts");
    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (err) {
    console.error("Error fetching artifacts", err.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
