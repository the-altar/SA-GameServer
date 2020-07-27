import { Character } from "../character"
import { iSkill } from "../../interfaces"
import { targetType, activationType, effectType } from "../../enums"
import { effectFactory } from "../effect"
import { targetSetter } from "./targetValidationFactory"
import { Effect } from "../effect/baseEffect"
import { Arena } from "../../arena"

export class Skill {

    public tick: number;
    private cost: Array<number>
    public disabled?: boolean
    private skillpic: string
    public name: string
    private description: string
    private class: string
    private cooldown: number
    private baseCooldown: number
    private type: { [key: string]: number }
    private limit: number
    private target: targetType
    private targets: Array<Character>
    private effects: Array<Effect>
    private targetChoices: Array<number>

    constructor(data: iSkill) {
        this.tick = 0
        this.type = data.type
        this.cooldown = 0 || data.startCooldown
        this.skillpic = data.skillpic
        this.name = data.name
        this.limit = data.limit
        this.disabled = data.disabled || false
        this.description = data.description
        this.cost = data.cost
        this.class = data.class
        this.baseCooldown = data.baseCooldown
        this.target = data.target
        this.targetChoices = data.targetChoices || []
        this.effects = []

        for (const e of data.effects) {
            const built = effectFactory(e)
            this.effects.push(built)
        }
    }

    public isDisabled(): boolean {
        return this.disabled;
    }

    public validateCost(energyPool: Array<number>) {

        energyPool[4] = energyPool.slice(0, 4).reduce((ca, cv) => ca + cv)
        let totalCost = this.cost.reduce((ca, cv) => ca + cv)

        for (let i = 0; i <= 4; i++) {
            if (this.cost[i] > energyPool[i]) {
                this.disabled = true
                return
            }
        }


        if (totalCost > energyPool[4]) {
            this.disabled = true
            return
        }
    }

    public enable(){
        this.disabled = false
    }

    public lowerCooldown() {
        if (this.cooldown > 0) this.cooldown -= 1
    }

    public startCooldown() {
        this.cooldown = this.baseCooldown
    }

    public getValidadedTargets(choice: number): Array<number> {
        let t: Array<number> = []
        switch (this.target) {
            case targetType.Self: {
                t.push(choice)
            } break
            case targetType.OneEnemy: {
                t.push(choice)
            } break;
            case targetType.AllEnemies: {
                t.push(choice)
                for (const opt of this.targetChoices) {
                    if (opt !== choice) {
                        t.push(opt)
                    }
                }
            } break;
        }
        return t
    }

    public validateCoolDown() {
        if (this.cooldown > 0) {
            this.disabled = true
            return
        }
    }

    public setTargetChoices(characters: Array<Character>, playerId: string, self?: number) {
        this.targetChoices = targetSetter(this, this.target, characters, playerId, self)
    }

    public getTargetChoices(): Array<number> {
        return this.targetChoices
    }

    public setTargets(targets: Array<Character>) {
        this.targets = targets
    }

    public getTargets(): Array<Character> {
        return this.targets
    }

    public getTypes():Array<string>{
        return Object.keys(this.type)
    }

    public executeEffects(world:Arena): boolean {
        let notExecuted = 0
        let onExpiration = 0

        for (let i = this.effects.length - 1; i >= 0; i--) {
            const effect = this.effects[i]
            if (effect.getActivationType() !== activationType.Immediate) {
                notExecuted++
                if (effect.getActivationType() === activationType.Expired) {
                    onExpiration++
                }
                continue
            }
            const isDone = this.effects[i].execute(this.targets, world, this.type)
            if (isDone) {
                this.effects.splice(i, 1)
            }
        }

        if (this.effects.length === onExpiration) {
            for (let i = this.effects.length - 1; i >= 0; i--) {
                const isDone = this.effects[i].execute(this.targets, world, this.type)
                if (isDone) {
                    this.effects.splice(i, 1)
                }
            }
        }
        if (this.effects.length === 0) return true
        return false
    }

    public getCost(): Array<number> {
        return this.cost
    }

    public getSkillEffectsActivation():{[x:string]:number}{
        let checker:{[x:string]:number} = {}

        for(const effect of this.effects){
            checker[effect.getActivationType()] = effect.getActivationType()
        }

        return checker
    }

    public areTargetsValidated(){
        for(let i = this.targets.length - 1; i>=0; i--){
            const c = this.targets[i]
            if(c.isKnockedOut()){
                this.targets.splice(i, 1)
            }
        }

        if(this.targets.length === 0) return false
        return true
    }
}