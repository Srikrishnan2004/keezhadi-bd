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


export const getArtifactById = async (req, res) => {
  const { id } = req.params; 

  try {
    const result = await pool.query("SELECT * FROM artifacts WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Artifact with ID ${id} not found`,
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0], // Return the first result (since it should be unique)
    });
  } catch (err) {
    console.error("Error fetching artifact by id", err.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};