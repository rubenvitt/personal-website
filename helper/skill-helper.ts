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

export const filterOtherSkills = (skills: Skill[]) => {
    return skills.filter((it) => it.type !== SkillType.ProgrammingLanguage && it.type !== SkillType.HumanLanguage);
};

export const filterHumanLanguageSkills = (skills: Skill[]) => {
    return skills.filter((skill) => skill.type === SkillType.HumanLanguage);
};

export const calculateCertCount = (skills: Skill[]) => {
    return skills
        .filter((x) => x.type === SkillType.ProgrammingLanguage)
        .map((x) => x.certificates?.length ?? 0)
        .reduce((a, b) => a + b);
};
