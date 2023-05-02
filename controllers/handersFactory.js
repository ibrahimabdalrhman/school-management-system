const asyncHander = require("express-async-handler");

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

exports.deleteOne = (Model) =>
  asyncHander(async (req, res) => {
    const model = await Model.findByIdAndDelete(req.params.id);
    res.json({ status: 'success' });
  });

