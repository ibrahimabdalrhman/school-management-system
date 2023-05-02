const mongoose = require('mongoose');

const DB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected..."));
}

module.exports = DB;