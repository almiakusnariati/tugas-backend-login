import {
    pool
}from "../../db.js";

// Get all students
export const getAllStudents = async (_req, res) => {
    try {
      const result = await pool.query("SELECT * FROM students");
      res.json(result.rows);
    } catch (error) {
      console.error("Error in getAllStudents:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  
  // Add student
export const addStudent = async (req, res) => {
    try {
      const result = await pool.query(
        "INSERT INTO students (name, generation) VALUES ($1, $2) RETURNING *",
        [req.body.name, req.body.generation]
      );
      res.json({
        student: result.rows[0],
        message: "Mahasiswa berhasil ditambahkan.",
      });
    } catch (error) {
      console.error("Error in addStudent:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  
  // Get student by ID
  export const getStudentByID = async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM students WHERE id = $1", [
        req.params.id,
      ]);
      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error in getStudentByID:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  
  // Edit student by ID
  export const editStudentByID = async (req, res) => {
    try {
      await pool.query(
        "UPDATE students SET name = $1, generation = $2 WHERE id = $3",
        [req.body.name, req.body.generation, req.params.id]
      );
      res.send("Mahasiswa berhasil diedit.");
    } catch (error) {
      console.error("Error in editStudentByID:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  
  // Set present by ID
  export const setPresentByID = async (req, res) => {
    try {
      await pool.query("UPDATE students SET present = $1 WHERE id = $2", [
        req.body.present,
        req.params.id,
      ]);
      res.json(req.body.present);
    } catch (error) {
      console.error("Error in setPresentByID:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  
  // Delete student by ID
  export const deleteStudentByID = async (req, res) => {
    try {
      await pool.query("DELETE FROM students WHERE id = $1", [req.params.id]);
      res.send("Mahasiswa berhasil dihapus.");
    } catch (error) {
      console.error("Error in deleteStudentByID:", error);
      res.status(500).send("Internal Server Error");
    }
  };