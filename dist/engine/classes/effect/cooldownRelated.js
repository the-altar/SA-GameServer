"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetCooldown = exports.CooldownReduction = exports.CooldownIncreasal = void 0;
const base_1 = require("./base");
const enums_1 = require("../../enums");
class CooldownIncreasal extends base_1.Effect {
    constructor(data, caster) {
        super(data, caster);
        this.specific = data.specific;
    }
    functionality(char, origin) {
        this.triggered = true;
        char.setDebuff({
            debuffType: enums_1.DebuffTypes.CooldownIncreasal,
            value: this.value,
            specific: this.specific
        });
    }
    generateToolTip() {
        if (this.delay > 0) {
            this.message = `Cooldown will be increased by ${this.value} if this character uses a skill in ${this.delay}`;
        }
        else {
            this.message = `If this character uses a skill its cooldown will be increased by ${this.value}`;
        }
    }
}
exports.CooldownIncreasal = CooldownIncreasal;
class CooldownReduction extends base_1.Effect {
    constructor(data, caster) {
        super(data, caster);
        this.specific = data.specific;
    }
    functionality(char, origin) {
        this.triggered = true;
        char.setBuff({
            buffType: enums_1.BuffTypes.CooldownReduction,
            value: this.value,
            specific: this.specific
        });
    }
    generateToolTip() {
        if (this.delay > 0) {
            this.message = `Cooldown will be decreased by ${this.value} if this character uses a skill in ${this.delay}`;
        }
        else {
            this.message = `If this character uses a skill its cooldown will be decreased by ${this.value}`;
        }
    }
}
exports.CooldownReduction = CooldownReduction;
class ResetCooldown extends base_1.Effect {
    constructor(data, caster) {
        super(data, caster);
        this.specificSkill = data.specificSkill || false;
        this.skillId = data.skillId;
    }
    functionality(char, origin) {
        for (const skill of char.getSkills()) {
            if (this.specificSkill && this.skillId !== skill.getId())
                continue;
            skill.resetCooldown();
        }
    }
    generateToolTip() {
        this.message = "Active cooldowns will be reset";
    }
}
exports.ResetCooldown = ResetCooldown;
//# sourceMappingURL=cooldownRelated.js.map