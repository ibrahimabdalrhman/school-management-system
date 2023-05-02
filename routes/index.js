const studentRoute = require("../routes/studentRoute");
const teacherRoute = require("../routes/teacherRoute");
const subjectRoute = require("../routes/subjectRoute");

const mountRoute = (app) => {
  
  app.use("/students", studentRoute);
  app.use("/teachers", teacherRoute);
  app.use("/subjects", subjectRoute);
};


module.exports = mountRoute;


