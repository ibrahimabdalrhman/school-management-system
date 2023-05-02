const studentRoute = require("../routes/studentRoute");
const teacherRoute = require("../routes/teacherRoute");
const subjectRoute = require("../routes/subjectRoute");
const classRoute = require("../routes/classRoute");

const mountRoute = (app) => {
  
  app.use("/students", studentRoute);
  app.use("/teachers", teacherRoute);
  app.use("/subjects", subjectRoute);
  app.use("/classes", classRoute);
};


module.exports = mountRoute;


