"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRouter = void 0;
const game_controller_1 = require("./game.controller");
const express_1 = require("express");
const middlewares_1 = require("../../middlewares");
exports.gameRouter = express_1.Router();
exports.gameRouter.get('/', game_controller_1.file);
exports.gameRouter.get('/user', [middlewares_1.authUserGameSession], game_controller_1.user);
exports.gameRouter.get('/enums', game_controller_1.pokemonTypeEnums);
exports.gameRouter.get('/ingame', game_controller_1.file);
exports.gameRouter.get('/lobby', game_controller_1.file);
//# sourceMappingURL=game.router.js.map