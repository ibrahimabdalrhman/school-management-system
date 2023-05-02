const asyncHander = require("express-async-handler");
const fs = require('fs');
const path = require('path');
const ApiError = require('../utils/ApiError');

exports.getAll = (Model) => 
  asyncHander(async (req, res) => {
    const model = await Model.find();
    res.json({ length: model.length, data: model });
  });

exports.insertOne = (Model) => 
  asyncHander(async (req, res) => {
      const model = await Model.create(req.body);
      res.json(model);
  });

exports.getOne = (Model) =>
  asyncHander(async (req, res) => {
    const model = await Model.findById(req.params.id);
    res.json(model);
  });

exports.updateOne = (Model) =>
  asyncHander(async (req, res) => {
    const model = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(model);
  });

const deleteImg = (imageName) => {
  const imageurl = path.join(__dirname, "uploads", "students", imageName);
  console.log("=> ", imageurl);

  fs.unlink(imageurl, (err, next) => {
    if (err) {
      console.error();
      return next(
        new ApiError(`Error deleting image ${imageName}: ${err}`, 500)
      );
    }
  });
};

exports.deleteOne = (Model) =>
  asyncHander(async (req, res) => {
    const modelToGetImg = await Model.findById(req.params.id);
    console.log("=> ", modelToGetImg.image);
    if (modelToGetImg.image) {
      deleteImg(modelToGetImg.image)
    }

    const model = await Model.findByIdAndDelete(req.params.id);
    res.json({ status: 'success' });
  });

