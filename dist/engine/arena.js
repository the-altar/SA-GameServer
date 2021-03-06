"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arena = void 0;
const classes_1 = require("./classes");
const enums_1 = require("./enums");
class Arena {
    constructor() {
        this.players = [];
        this.characters = [];
        this.turnCount = -1;
        this.skillQueue = [];
        this.tempQueue = [];
        this.hasUsedSKill = {};
    }
    addPlayer(player, team) {
        this.players.push(new classes_1.Player(player));
        if (this.players.length === 1) {
            const i = Math.floor(Math.random() * (3 + 1));
            this.players[0].increaseEnergyPool(i);
            this.players[0].setMyCharsIndex([0, 1, 2]);
        }
        else if (this.players.length === 2)
            this.players[1].setMyCharsIndex([3, 4, 5]);
        for (let c of team) {
            this.characters.push(new classes_1.Character(c, player.id));
            const index = this.characters.length - 1;
            if (index < 3) {
                this.characters[index].setEnemies([3, 4, 5]);
                switch (index) {
                    case 0:
                        {
                            this.characters[index].setAllies([1, 2]);
                        }
                        break;
                    case 1:
                        {
                            this.characters[index].setAllies([0, 2]);
                        }
                        break;
                    case 2:
                        {
                            this.characters[index].setAllies([0, 1]);
                        }
                        break;
                }
            }
            else {
                this.characters[index].setEnemies([0, 1, 2]);
                switch (index) {
                    case 3:
                        {
                            this.characters[index].setAllies([4, 5]);
                        }
                        break;
                    case 4:
                        {
                            this.characters[index].setAllies([3, 5]);
                        }
                        break;
                    case 5:
                        {
                            this.characters[index].setAllies([3, 4]);
                        }
                        break;
                }
            }
        }
    }
    processTurn(energySpent) {
        const player = this.players[this.turnCount % 2];
        this.clearSkillMods(player);
        if (!energySpent)
            return;
        player.consumeEnergy(energySpent);
        player.resetPayupCart();
    }
    startGame(complete) {
        this.turnCount++;
        const player1 = this.players[this.turnCount % 2];
        const player2 = this.players[((this.turnCount % 2) + 1) % 2];
        player1.setTurn(true);
        player2.setTurn(false);
        //console.log("Executing skill Queue")
        if (!complete)
            this.emptyTempQueue();
        this.clearCharactersNotifications();
        this.executeSkills(enums_1.activationType.Immediate, enums_1.triggerClauseType.None);
        this.executeNewSkills();
        this.tickSkillsInQueue();
        this.hasUsedSKill = {};
        //console.log("End player phase for: " + player2.getId())
        const bCount1 = this.endPlayerPhase(player2);
        if (bCount1 === 3)
            return {
                isOver: true,
                winner: player1,
                loser: player2
            };
        this.validateSkillQueue();
        //console.log("Start player phase for: " + player1.getId())
        const bCount2 = this.startPlayerPhase(player1);
        //console.log("\n")
        if (bCount2 === 3)
            return {
                isOver: true,
                winner: player2,
                loser: player1
            };
        return {
            gameData: this.getClientData(),
            isOver: false,
            winner: player1,
            loser: player2
        };
    }
    executeNewSkills() {
        const list = this.tempQueue;
        this.tempQueue = [];
        for (const cordinates of list) {
            const char = this.characters[cordinates.caster];
            const skill = char.getCopySkillByIndex(cordinates.skill);
            char.setSkillCooldownByIndex(cordinates.skill);
            skill.setTargets(cordinates.targets);
            skill.executeEffects(this, enums_1.activationType.Immediate, enums_1.triggerClauseType.None);
            this.skillQueue.push(skill);
        }
    }
    tickSkillsInQueue() {
        for (let i = this.skillQueue.length - 1; i >= 0; i--) {
            const skill = this.skillQueue[i];
            const terminate = skill.tickEffectsDuration(this, skill);
            if (terminate)
                this.skillQueue.splice(i, 1);
        }
    }
    executeSkills(aType, tClause) {
        for (const skill of this.skillQueue) {
            //.log("---> Executing: " + skill.name)
            skill.executeEffects(this, aType, tClause);
        }
    }
    getCharactersByIndex(indexes) {
        const chars = [];
        for (const index of indexes) {
            chars.push(this.characters[index]);
        }
        return chars;
    }
    removeSkillFromTempQueue(cordinates) {
        const char = this.characters[cordinates.caster];
        const id = char.getOwner();
        const s = char.getCopySkillByIndex(cordinates.skill);
        const { player, index } = this.findPlayerById(id);
        player.returnEnergy(s.getCost());
        player.removeFromPayupCart(s.getCost());
        this.hasUsedSKill[cordinates.caster] = false;
        this.validateTeamCosts(index);
        const r = this.tempQueue.findIndex(s => {
            return (s.caster === cordinates.caster && s.skill === cordinates.skill);
        });
        this.tempQueue.splice(r, 1);
        return {
            tempQueue: this.tempQueue,
            characters: this.characters,
            energyPool: player.getEnergyPool(),
            payupCart: player.getPayupCart(),
            playerIndex: index
        };
    }
    addSkillToTempQueue(cordinates) {
        const char = this.characters[cordinates.caster];
        if (char === undefined) {
            console.log("invalid request [arena.ts])");
            return;
        }
        const id = char.getOwner();
        const s = char.getCopySkillByIndex(cordinates.skill);
        const { player, index } = this.findPlayerById(id);
        player.consumeEnergy(s.getCost());
        player.addToPayupCart(s.getCost());
        char.disableSkills();
        this.hasUsedSKill[cordinates.caster] = true;
        this.validateTeamCosts(index);
        this.tempQueue.push({
            caster: cordinates.caster,
            skill: cordinates.skill,
            targets: s.getValidatedTargets(cordinates.target)
        });
        return {
            tempQueue: this.tempQueue,
            energyPool: player.getEnergyPool(),
            characters: this.characters,
            payupCart: player.getPayupCart(),
            playerIndex: index
        };
    }
    findCharacterById(id) {
        for (let i in this.characters) {
            const char = this.characters[i];
            if (char.getId() === id)
                return {
                    char,
                    index: Number(i)
                };
        }
    }
    validateSkillQueue() {
        for (let i = this.skillQueue.length - 1; i >= 0; i--) {
            const s = this.skillQueue[i];
            if (!s.areTargetsValidated(this)) {
                this.skillQueue.splice(i, 1);
            }
        }
    }
    findPlayerByCharacterIndex(index) {
        const { char } = this.findCharacterById(index);
        for (const player of this.players) {
            if (char.belongsTo(player.getId()))
                return player;
        }
    }
    findPlayerByChar(char) {
        for (const player of this.players) {
            if (char.belongsTo(player.getId()))
                return player;
        }
    }
    clearSkillMods(p) {
        //console.log("CLEARED SKILL MODS")
        const arr = p.getMyCharsIndex();
        for (const i of arr) {
            this.characters[i].clearSkillMods();
        }
    }
    emptyTempQueue() {
        if (this.tempQueue.length > 0) {
            while (this.tempQueue.length > 0) {
                const s = this.tempQueue.pop();
                this.removeSkillFromTempQueue(s);
            }
        }
    }
    endPlayerPhase(player) {
        let bodyCount = 0;
        //console.log("-> clearing debuff, lowering cooldowns and increas energy pool")
        for (const i of player.getMyCharsIndex()) {
            const c = this.characters[i];
            if (!c.isKnockedOut()) {
                c.lowerCooldowns(c);
                c.clearDebuffs();
                const energyIndex = c.generateEnergy();
                player.increaseEnergyPool(energyIndex);
            }
            else
                bodyCount++;
        }
        return bodyCount;
    }
    startPlayerPhase(player) {
        player.setTotalEnergyPool();
        const pool = player.getEnergyPool();
        const myChar = player.getMyCharsIndex();
        let bodyCount = 0;
        //console.log("-> validating skils and clearing buffs")
        for (const i of myChar) {
            const c = this.characters[i];
            if (!c.isKnockedOut()) {
                c.clearBuffs();
            }
            else
                bodyCount++;
        }
        for (const i of myChar) {
            const c = this.characters[i];
            if (!c.isKnockedOut())
                c.validadeSkillsCompletely(pool, this.characters, player.getId(), i);
        }
        return bodyCount;
    }
    validateTeamCosts(index) {
        const playerId = this.players[index].getId();
        const pool = this.players[index].getEnergyPool();
        this.characters.forEach((c, i) => {
            if (c.belongsTo(playerId) && !this.hasUsedSKill[i] && !c.isKnockedOut()) {
                c.validateSkillsCost(pool);
            }
        });
    }
    getClientData() {
        return {
            players: this.players,
            characters: this.characters,
            skillQueue: this.skillQueue
        };
    }
    findPlayerById(id) {
        for (let i = 0; i < 2; i++) {
            if (this.players[i].getId() === id) {
                return {
                    player: this.players[i],
                    index: i
                };
            }
        }
    }
    getTempSkills() {
        return this.tempQueue;
    }
    clearCharactersNotifications() {
        for (const char of this.characters) {
            char.clearNotifications();
        }
    }
    getClientsLength() {
        return this.players.length;
    }
    surrender(surrenderer) {
        let winner, loser;
        const player1 = this.players[this.turnCount % 2];
        const player2 = this.players[((this.turnCount % 2) + 1) % 2];
        if (player2.getId() === surrenderer) {
            winner = player1;
            loser = player2;
        }
        else {
            winner = player2;
            loser = player1;
        }
        return { winner, loser };
    }
    getActiveSkills() {
        return this.skillQueue;
    }
}
exports.Arena = Arena;
//# sourceMappingURL=arena.js.map