const studentRoute = require("../routes/studentRoute");
const teacherRoute = require("../routes/teacherRoute");
const subjectRoute = require("../routes/subjectRoute");
const classRoute = require("../routes/classRoute");
const authRoute = require("../routes/authRoute");

const mountRoute = (app) => {
  
  app.use("/students", studentRoute);
  app.use("/teachers", teacherRoute);
  app.use("/subjects", subjectRoute);
  app.use("/classes", classRoute);
  app.use("/auth", authRoute);
};


module.exports = mountRoute;


