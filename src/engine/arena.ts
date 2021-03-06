import { Character, Player, Skill } from "./classes"
import { iCharacter, iSkillQueue } from "./interfaces"
import { triggerClauseType, activationType } from "./enums"



export class Arena {
    private players: Array<Player>
    private characters: Array<Character>
    private turnCount: number
    private skillQueue: Array<Skill>
    private tempQueue: Array<iSkillQueue>
    private hasUsedSKill: { [key: number]: boolean }

    constructor() {
        this.players = []
        this.characters = []
        this.turnCount = -1
        this.skillQueue = []
        this.tempQueue = []
        this.hasUsedSKill = {}
    }

    public addPlayer(player:any, team: Array<iCharacter>): void {
        this.players.push(new Player(player))
        
        if (this.players.length === 1) {
            const i = Math.floor(Math.random() * (3 + 1));
            this.players[0].increaseEnergyPool(i)
            this.players[0].setMyCharsIndex([0, 1, 2])
        } else if (this.players.length === 2) this.players[1].setMyCharsIndex([3, 4, 5])

        for (let c of team) {
            this.characters.push(new Character(c, player.id))
            const index = this.characters.length - 1

            if (index < 3) {
                this.characters[index].setEnemies([3, 4, 5])
                switch (index) {
                    case 0: { this.characters[index].setAllies([1, 2]) } break;
                    case 1: { this.characters[index].setAllies([0, 2]) } break;
                    case 2: { this.characters[index].setAllies([0, 1]) } break;
                }

            } else {
                this.characters[index].setEnemies([0, 1, 2])
                switch (index) {
                    case 3: { this.characters[index].setAllies([4, 5]) } break;
                    case 4: { this.characters[index].setAllies([3, 5]) } break;
                    case 5: { this.characters[index].setAllies([3, 4]) } break;
                }
            }
        }
    }

    public processTurn(energySpent: Array<number>) {
        const player = this.players[this.turnCount % 2]
        this.clearSkillMods(player)
        if (!energySpent) return 
        
        player.consumeEnergy(energySpent)
        player.resetPayupCart()
    }

    public startGame(complete?: boolean) {
        this.turnCount++
        const player1 = this.players[this.turnCount % 2]
        const player2 = this.players[((this.turnCount % 2) + 1) % 2]

        player1.setTurn(true)
        player2.setTurn(false)

        //console.log("Executing skill Queue")
        if (!complete) this.emptyTempQueue()

        this.clearCharactersNotifications()
                    
        this.executeSkills(activationType.Immediate, triggerClauseType.None)  
        this.executeNewSkills()        
        this.tickSkillsInQueue()  
        this.hasUsedSKill = {}

        //console.log("End player phase for: " + player2.getId())
        const bCount1 = this.endPlayerPhase(player2)
        if (bCount1 === 3) return {
            isOver: true,
            winner: player1,
            loser: player2
        }


        this.validateSkillQueue()
        //console.log("Start player phase for: " + player1.getId())
        const bCount2 = this.startPlayerPhase(player1)
        //console.log("\n")
        if (bCount2 === 3) return {
            isOver: true,
            winner: player2,
            loser: player1
        }

        return {
            gameData: this.getClientData(),
            isOver: false,
            winner: player1,
            loser: player2
        }
    }

    public executeNewSkills() {
        
        const list = this.tempQueue;
        this.tempQueue = []
        
        for (const cordinates of list) {
            const char = this.characters[cordinates.caster]
            const skill = char.getCopySkillByIndex(cordinates.skill)

            char.setSkillCooldownByIndex(cordinates.skill)
            skill.setTargets(cordinates.targets)
            skill.executeEffects(this, activationType.Immediate, triggerClauseType.None)
            this.skillQueue.push(skill)
        }

        
    }

    public tickSkillsInQueue() {
        for (let i = this.skillQueue.length - 1; i >= 0; i--) {
            const skill = this.skillQueue[i]
            const terminate = skill.tickEffectsDuration(this, skill)
            if (terminate) this.skillQueue.splice(i, 1)
        }
    }

    public executeSkills(aType: activationType, tClause: triggerClauseType) {
        for (const skill of this.skillQueue) {
            //.log("---> Executing: " + skill.name)
            skill.executeEffects(this, aType, tClause)
        }
    }

    public getCharactersByIndex(indexes: Array<number>): Array<Character> {
        const chars: Array<Character> = [];
        for (const index of indexes) {
            chars.push(this.characters[index])
        }
        return chars
    }

    public removeSkillFromTempQueue(cordinates: { caster: number, target?: number, skill: number }) {
        const char = this.characters[cordinates.caster]
        const id = char.getOwner()
        const s = char.getCopySkillByIndex(cordinates.skill)
        const { player, index } = this.findPlayerById(id)

        player.returnEnergy(s.getCost())
        player.removeFromPayupCart(s.getCost())
        this.hasUsedSKill[cordinates.caster] = false
        this.validateTeamCosts(index)

        const r = this.tempQueue.findIndex(s => {
            return (s.caster === cordinates.caster && s.skill === cordinates.skill)
        })

        this.tempQueue.splice(r, 1)

        return {
            tempQueue: this.tempQueue,
            characters: this.characters,
            energyPool: player.getEnergyPool(),
            payupCart: player.getPayupCart(),
            playerIndex: index
        }
    }

    public addSkillToTempQueue(cordinates: { caster: number, target?: number, skill: number }) {
        const char = this.characters[cordinates.caster]
        if (char === undefined) {
            console.log("invalid request [arena.ts])")
            return
        }

        const id = char.getOwner()
        const s = char.getCopySkillByIndex(cordinates.skill)
        const { player, index } = this.findPlayerById(id)

        player.consumeEnergy(s.getCost())
        player.addToPayupCart(s.getCost())

        char.disableSkills()
        this.hasUsedSKill[cordinates.caster] = true
        this.validateTeamCosts(index)

        this.tempQueue.push({
            caster: cordinates.caster,
            skill: cordinates.skill,
            targets: s.getValidatedTargets(cordinates.target)
        })

        return {
            tempQueue: this.tempQueue,
            energyPool: player.getEnergyPool(),
            characters: this.characters,
            payupCart: player.getPayupCart(),
            playerIndex: index
        }
    }

    public findCharacterById(id: number): {char:Character, index:any} {

        for (let i in this.characters) {
            const char = this.characters[i]
            if (char.getId() === id) return {
                char, 
                index:Number(i)
            }
        }
    }

    public validateSkillQueue() {
        for (let i = this.skillQueue.length - 1; i >= 0; i--) {
            const s = this.skillQueue[i]
            if (!s.areTargetsValidated(this)) {
                this.skillQueue.splice(i, 1)
            }
        }
    }

    public findPlayerByCharacterIndex(index: number) {
        const {char} = this.findCharacterById(index)
        for (const player of this.players) {
            if (char.belongsTo(player.getId())) return player
        }
    }

    public findPlayerByChar(char:Character){
        for (const player of this.players) {
            if (char.belongsTo(player.getId())) return player
        }
    }

    public clearSkillMods(p: Player) {
        //console.log("CLEARED SKILL MODS")
        const arr = p.getMyCharsIndex()
        for (const i of arr) {
            this.characters[i].clearSkillMods()
        }
    }

    private emptyTempQueue() {
        if (this.tempQueue.length > 0) {
            while (this.tempQueue.length > 0) {
                const s = this.tempQueue.pop()
                this.removeSkillFromTempQueue(s)
            }
        }
    }

    private endPlayerPhase(player: Player): number {
        let bodyCount = 0
        //console.log("-> clearing debuff, lowering cooldowns and increas energy pool")
        for (const i of player.getMyCharsIndex()) {
            const c = this.characters[i]

            if (!c.isKnockedOut()) {
                c.lowerCooldowns(c)
                c.clearDebuffs()
                const energyIndex = c.generateEnergy()
                player.increaseEnergyPool(energyIndex)
            } else bodyCount++
        }
        return bodyCount
    }

    private startPlayerPhase(player: Player): number {
        player.setTotalEnergyPool()
        const pool = player.getEnergyPool()
        const myChar = player.getMyCharsIndex()
        let bodyCount = 0
        //console.log("-> validating skils and clearing buffs")

        for (const i of myChar) {
            const c = this.characters[i]
            if (!c.isKnockedOut()) {
                c.clearBuffs()
            }
            else bodyCount++
        }

        for (const i of myChar) {
            const c = this.characters[i]
            if (!c.isKnockedOut()) c.validadeSkillsCompletely(pool, this.characters, player.getId(), i)
        }

        return bodyCount
    }

    private validateTeamCosts(index: number) {
        const playerId = this.players[index].getId()
        const pool = this.players[index].getEnergyPool()
        this.characters.forEach((c, i) => {
            if (c.belongsTo(playerId) && !this.hasUsedSKill[i] && !c.isKnockedOut()) {
                c.validateSkillsCost(pool)
            }
        })
    }

    private getClientData() {
        return {
            players: this.players,
            characters: this.characters,
            skillQueue: this.skillQueue
        }
    }

    private findPlayerById(id: number) {
        for (let i = 0; i < 2; i++) {
            if (this.players[i].getId() === id) {
                return {
                    player: this.players[i],
                    index: i
                }
            }
        }
    }

    public getTempSkills(){
        return this.tempQueue
    }

    private clearCharactersNotifications(){
        for(const char of this.characters){
            char.clearNotifications()
        }
    }

    public getClientsLength(){
        return this.players.length
    } 

    public surrender(surrenderer:number){
        let winner, loser;
        const player1 = this.players[this.turnCount % 2]
        const player2 = this.players[((this.turnCount % 2) + 1) % 2]
        
        if(player2.getId() === surrenderer) {
            winner = player1
            loser = player2
        } else {
            winner = player2
            loser = player1
        }

        return {winner, loser}
    }

    public getActiveSkills():Array<Skill>{
        return this.skillQueue
    }
}


