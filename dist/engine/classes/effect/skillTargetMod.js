"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillTargetMod = void 0;
const base_1 = require("./base");
const enums_1 = require("../../enums");
class SkillTargetMod extends base_1.Effect {
    constructor(data, caster) {
        super(data, caster);
        this.tick = 0;
        this.newTarget = data.newTarget;
        this.targetSpecificSkill = data.targetSpecificSkill || false;
        this.specificSkillIndex = data.specificSkillIndex || -1;
    }
    functionality(char, origin, world) {
        const s = char.getRealSkillById(this.specificSkillIndex);
        if (this.targetSpecificSkill) {
            s.setTargetMod(this.newTarget);
        }
        else {
            const skills = char.getSkills();
            for (const skill of skills) {
                skill.setTargetMod(this.newTarget);
            }
        }
        this.affectedSkillName = s.name;
        /*char.addNotification({
            msg: generateMessage(this.specificSkillIndex, this.newTarget, s),
            id: origin.getId(),
            skillpic: origin.skillpic,
            skillName: origin.name
        })*/
    }
    generateToolTip() {
        this.message = generateMessage(this.specificSkillIndex, this.newTarget, this.affectedSkillName);
    }
}
exports.SkillTargetMod = SkillTargetMod;
function generateMessage(specificIndex, tType, skill) {
    let m = '';
    switch (tType) {
        case enums_1.targetType.AllAllies:
            {
                m = "all allies";
            }
            break;
        case enums_1.targetType.OneEnemy:
            {
                m = "one enemy";
            }
            break;
        case enums_1.targetType.AllEnemies: {
            m = "all enemies";
        }
    }
    if (!specificIndex)
        return `This character's skills will now target ${m}'`;
    else
        return `This character will now target ${m} with ${skill}`;
}
//# sourceMappingURL=skillTargetMod.js.map