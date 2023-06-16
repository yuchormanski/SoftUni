const Game = require("../models/Game.js");

exports.createGame = (game) => Game.create(game);

exports.getAll = () => Game.find();

exports.getOne = (id) => Game.findById(id);

exports.buyGame = (id, userId) => Game.findByIdAndUpdate(id, { $push: { boughtBy: userId } });

exports.deleteGame = (id) => Game.findByIdAndDelete(id);

exports.editGame = (id, edit) => Game.findByIdAndUpdate(id, edit);

exports.searchGames = (search, platform) => Game.find({ title: { $regex: search, $options: 'i' }, platform: { $regex: platform } })