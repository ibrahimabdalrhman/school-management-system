const Subject = require("../models/subjectModel");
const Factory = require('./handersFactory');



exports.addSubject = Factory.insertOne(Subject);

exports.getSubjects = Factory.getAll(Subject);

exports.getSubjectById = Factory.getOne(Subject);

exports.updateSubject = Factory.updateOne(Subject);

exports.deleteSubject = Factory.deleteOne(Subject);