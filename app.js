const express = require('express');
const path = require("path");
const dotenv = require('dotenv');
dotenv.config({ path: "config.env" });
const ApiError = require("./utils/ApiError");
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
require('./config/database')();

app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));
console.log("mode : ", process.env.NODE_ENV);

const mountRoute = require('./routes');
mountRoute(app);

//404 error if not found page
app.all('*', (req,res,next) => {
    next(new ApiError("can't find this page",404));
});

//Global error middleware
app.use(errorMiddleware);

const port = process.env.PORT;
app.listen(3000, () => {
  console.log('app runnung on port 3000...');
});

// handle rejection errors outside  express
process.on("unhandledRejection", (err) => {
  console.error(`unhandledRejection : ${err.name} | ${err.message}`);
  app.close(() => {
    console.error("shutting down ... ");
    process.exit(1);
  });
});