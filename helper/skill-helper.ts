import { ProgrammingLanguageSkill, Skill, SkillType } from '../data/skill-items.list';

export const filterProgrammingLanguages = (skills: Skill[]) => {
    return skills
        .filter((it) => {
            return it.type === SkillType.ProgrammingLanguage;
        })
        .map((it) => {
            return it as ProgrammingLanguageSkill;
        });
};
