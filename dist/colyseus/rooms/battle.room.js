"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
const colyseus_1 = require("colyseus");
const engine_1 = require("../engine");
class Battle extends colyseus_1.Room {
    constructor() {
        super(...arguments);
        this.arena = new engine_1.Arena();
        this.constructed = 0;
        this.evaluateGroupInterval = 60000;
    }
    // When room is initialized
    onCreate(options) {
        this.onMessage('start-game-data', (client, payload) => {
            this.arena.addPlayer(payload.player, payload.team);
            this.constructed++;
            if (this.constructed === 2) {
                const { gameData } = this.arena.startGame();
                this.broadcast("game-started", gameData);
                this.delay = this.clock.setInterval(() => {
                    const { isOver, gameData, winner, loser } = this.arena.startGame();
                    if (!isOver)
                        this.broadcast("start-new-turn", gameData);
                    else
                        this.broadcast("end-game", { winner, loser });
                }, this.evaluateGroupInterval);
            }
        });
        this.onMessage('end-game-turn', (client, payload) => {
            this.delay.reset();
            this.arena.processTurn(payload);
            const { isOver, gameData, winner, loser } = this.arena.startGame(true);
            if (!isOver)
                this.broadcast("start-new-turn", gameData);
            else
                this.broadcast("end-game", { winner, loser });
        });
        this.onMessage('add-skill-to-queue', (client, cordinates) => {
            const payload = this.arena.addSkillToTempQueue(cordinates);
            client.send('update-temp-queue', payload);
        });
        this.onMessage('remove-skill-from-queue', (client, cordinates) => {
            const payload = this.arena.removeSkillFromTempQueue(cordinates);
            client.send('update-temp-queue', payload);
        });
    }
    // Authorize client based on provided options before WebSocket handshake is complete
    onAuth(client, options, request) {
        return true;
    }
    // When client successfully join the room
    onJoin(client, options, auth) {
        this.broadcast('joined', this.clients.length);
    }
    // When a client leaves the room
    onLeave(client, consented) { }
    // Cleanup callback, called after there are no more clients in the room. (see `autoDispose`)
    onDispose() { }
}
exports.Battle = Battle;
//# sourceMappingURL=battle.room.js.map