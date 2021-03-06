"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const enums_1 = require("../../enums");
const skill_1 = require("../skill");
// IMPORTANT TO THIS CLASS ONLY
const buffs_1 = require("./buffs");
const notifications_1 = require("./notifications");
const debuffs_1 = require("./debuffs");
class Character {
    constructor(data, playerId) {
        this.buffs = new buffs_1.Buffs();
        this.debuffs = new debuffs_1.Debuffs();
        this.notifications = [];
        this.isTarget = false;
        this.banner = data.banner;
        this.name = data.name;
        this.id = Math.floor(Math.random() * (0 - 99999) + 99999);
        this.facepic = data.facepic;
        this.description = data.description;
        this.hitPoints = 100;
        this.type = data.type;
        this.energyGain = data.energyGain;
        this.belongs = {};
        this.belongs[playerId] = true;
        this.skills = [];
        this.allies = [];
        this.enemies = [];
        this.knockedOut = false;
        for (const skill of data.skills) {
            this.skills.push(new skill_1.Skill(skill, this.id));
        }
    }
    setAllies(allies) {
        this.allies = allies;
    }
    getAllies() {
        return this.allies;
    }
    getEnemies() {
        return this.enemies;
    }
    setEnemies(enemies) {
        this.enemies = enemies;
    }
    geHitPoints() {
        return this.hitPoints;
    }
    setHitPoints(hp) {
        this.hitPoints = hp;
        if (this.hitPoints <= 0) {
            this.hitPoints = 0;
            this.knockOut();
        }
        else if (this.hitPoints > 100)
            this.hitPoints = 100;
    }
    belongsTo(id) {
        return this.belongs[id];
    }
    lowerCooldowns(char) {
        for (const skill of this.skills) {
            skill.lowerCooldown(0);
        }
    }
    generateEnergy() {
        let index = this.energyGain[Math.floor(Math.random() * this.energyGain.length)];
        if (index === 4) {
            index = Math.floor(Math.random() * 3);
        }
        return index;
    }
    getEnergyGain() {
        return this.energyGain;
    }
    getOwner() {
        return Number(Object.keys(this.belongs)[0]);
    }
    validadeSkillsCompletely(pool, chars, playerId, self) {
        for (const skill of this.skills) {
            if (this.isStunned()) {
                skill.disable();
            }
            else {
                skill.enable();
                skill.validateCoolDown();
                skill.validateCost(pool);
                skill.setTargetChoices(chars, playerId, self);
            }
        }
    }
    validateSkillsCost(pool) {
        for (const skill of this.skills) {
            if (this.isStunned()) {
                skill.disable();
            }
            else {
                skill.enable();
                skill.validateCoolDown();
                skill.validateCost(pool);
            }
        }
    }
    getCopySkillByIndex(index) {
        const newObj = JSON.parse(JSON.stringify(this.skills[index]));
        return new skill_1.Skill(newObj, this.id);
    }
    getRealSkillByIndex(index) {
        return this.skills[index];
    }
    getRealSkillById(id) {
        for (const skill of this.skills) {
            if (skill.getId() === id)
                return skill;
        }
    }
    setSkillCooldownByIndex(index) {
        const n = this.buffs.getCooldownReduction() + this.debuffs.getCooldownIncreasal();
        this.skills[index].startCooldown(n);
    }
    enableSkills() {
        this.skills.forEach(s => {
            s.disabled = false;
        });
    }
    knockOut() {
        this.knockedOut = true;
        this.disableSkills();
    }
    isKnockedOut() {
        return this.knockedOut;
    }
    disableSkills() {
        this.skills.forEach(s => {
            s.disable();
        });
    }
    setBuff(params) {
        const { buffType } = params;
        switch (buffType) {
            case enums_1.BuffTypes.Invulnerability:
                {
                    this.buffs.setInvulnerability(params);
                }
                break;
            case enums_1.BuffTypes.CooldownReduction:
                {
                    this.buffs.setCooldownReduction(params);
                }
                break;
            case enums_1.BuffTypes.DecreaseDamageTaken:
                {
                    this.buffs.setDecreaseDamageTaken(params);
                }
                break;
            case enums_1.BuffTypes.DamageIncreasal:
                {
                    this.buffs.setDamageIncreasal(params);
                }
                break;
            case enums_1.BuffTypes.AbsorbDamage:
                {
                    this.buffs.setAbsorbDamage(params);
                }
                break;
            case enums_1.BuffTypes.DestructibleDefense: {
                this.buffs.setDestructibleDefense(params.value);
            }
        }
    }
    setDebuff(params) {
        switch (params.debuffType) {
            case enums_1.DebuffTypes.DamageReduction:
                {
                    this.debuffs.setDamageReduction(params);
                }
                break;
            case enums_1.DebuffTypes.CooldownIncreasal:
                {
                    this.debuffs.setCooldownIncreasal(params);
                }
                break;
            case enums_1.DebuffTypes.Stun:
                {
                    this.debuffs.setStun(params);
                }
                break;
            case enums_1.DebuffTypes.IncreaseDamageTaken:
                {
                    this.debuffs.setIncreasedDamage(params);
                }
                break;
        }
    }
    isInvulnerable(types, eType) {
        return this.buffs.isInvulnerable(types, eType);
    }
    clearBuffs() {
        this.buffs.clearInvulnerability();
        this.buffs.clearCooldownReduction();
        this.buffs.clearDecreaseDamageTaken();
        this.buffs.clearAbsorbDamage();
        this.buffs.clearDamageIncreasal();
    }
    clearEnemyPhaseBuffs() {
        this.buffs.clearInvulnerability();
    }
    clearPlayerPhaseBuffs() {
        this.buffs.clearCooldownReduction();
    }
    getBuffs() {
        return this.buffs;
    }
    getDebuffs() {
        return this.debuffs;
    }
    clearDebuffs() {
        this.debuffs.clearDebuffs();
    }
    getId() {
        return this.id;
    }
    getTyping() {
        return this.type;
    }
    isStunned() {
        return this.debuffs.isStunned(enums_1.Types.Any);
    }
    getSkills() {
        return this.skills;
    }
    clearSkillMods() {
        for (const skill of this.skills) {
            skill.clearMods();
        }
    }
    addNotification(data) {
        this.notifications.push(new notifications_1.Notification(data));
    }
    clearNotifications() {
        this.notifications = [];
    }
}
exports.Character = Character;
//# sourceMappingURL=index.js.map