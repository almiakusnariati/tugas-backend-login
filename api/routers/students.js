import express  from "express";

import {
    getAllStudents,
    addStudent,
    getStudentByID,
    editStudentByID,
    setPresentByID,
    deleteStudentByID
}from "../controlles/student.js";

import {
    veryfytoken
}from "../middleware/veryfyToken.js";

const router = express.Router();

 
router.get("/api/v1/getAllStudents",veryfytoken,getAllStudents);
router.post("/api/v1/addStudent",veryfytoken, addStudent);
router.get("/api/v1/getStudentByID/:id",veryfytoken,getStudentByID);
router.put("/api/v1/editStudentByID/:id",veryfytoken,editStudentByID);
router.put("/api/v1/setPresentByID/:id",veryfytoken,setPresentByID);
router.delete("/api/v1/deleteStudentByID/:id",veryfytoken,deleteStudentByID);

export default router;