const express = require('express');
const router = express.Router();
const subjectController = require("../controllers/subjectController");


router
  .route("/")
  .get(subjectController.getSubjects)
  .post(
    subjectController.addSubject
  );
  
router
  .route("/:id")
  .get(subjectController.getSubjectById)
  .put(
    subjectController.updateSubject
  )
  .delete(subjectController.deleteSubject);


module.exports=router