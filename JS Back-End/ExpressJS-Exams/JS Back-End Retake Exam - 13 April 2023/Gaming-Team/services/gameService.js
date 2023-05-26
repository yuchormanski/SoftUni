const Game = require("../models/Game.js");

exports.allGames = async () => await Game.find().lean();

exports.oneGame = async (id) => await Game.findById(id);

exports.createGame = async (game) => await Game.create(game);