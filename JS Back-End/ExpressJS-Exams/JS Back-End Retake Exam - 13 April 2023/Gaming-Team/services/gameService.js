const Game = require("../models/Game.js");

exports.allGames = async () => await Game.find().lean();

exports.oneGame = async (id) => await Game.findById(id).lean();

exports.buyGame = async (userId, gameId) => {
    const game = await Game.findById(gameId);
    game.boughtBy.push(userId);
    game.save();
    return;
};

exports.deleteGame = async (gameId) => await Game.findByIdAndDelete(gameId);

exports.updateGame = async (gameId, game) => await Game.findOneAndUpdate({ _id: gameId }, {
    $set: {
        name: game.name,
        imageUrl: game.imageUrl,
        price: game.price,
        description: game.description,
        genre: game.genre,
        platform: game.platform,
    }
});

exports.createGame = async (game) => await Game.create(game);
