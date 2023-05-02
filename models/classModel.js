const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({



}, { timestamps: true });

module.exports=mongoose.model("Class",classSchema)