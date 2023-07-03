const Creatures = require('../models/Creatures');

exports.create = (creaturesData) => Creatures.create(creaturesData);

exports.getAll = () => Creatures.find().lean();

exports.getOne = (creaturesId) => Creatures.findById(creaturesId).populate('liked');

exports.delete = (creaturesId) => Creatures.findByIdAndDelete(creaturesId);

exports.updateOne = (creaturesId, creaturesData) => Creatures.findByIdAndUpdate(creaturesId, creaturesData);
