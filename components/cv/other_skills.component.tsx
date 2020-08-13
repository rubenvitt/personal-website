import { ProgrammingLanguageSkill, Skill, skillList, SkillType } from '../../data/skill-items.list';
import { DefaultSkillElement, SkillElement } from './skill.component';
import React, { useState } from 'react';
import { SlideOver } from '../shared/slideover.component';
import { SlideListElement } from '../shared/slidelist.component';

export const CvOtherSkills = (): JSX.Element => {
    const [slideOverState, setSlideOverState] = useState(false);
    const toggleSlideOverState = () => {
        setSlideOverState(!slideOverState);
    };

    const skills: Skill[] = skillList.filter(
        (it) => it.type !== SkillType.ProgrammingLanguage && it.type !== SkillType.HumanLanguage,
    );

    return (
        <div className="px-2 py-2">
            <h2 className="text-xl leading-6 font-medium text-gray-900">I speak following languages</h2>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {skills
                    .sort((a, b) => b.value - a.value)
                    .slice(0, 5)
                    .map((skill, i) => (
                        <SkillElement skill={skill} key={i} listIndex={i} />
                    ))}
                <DefaultSkillElement skills={skills} buttonHandler={toggleSlideOverState} />
            </div>
            <SlideOver
                title="My programming languages"
                setSlideOverState={setSlideOverState}
                slideOverState={slideOverState}
                contentFunction={slideOverContent}
                content={skills}
            />
        </div>
    );
};

const slideOverContent = (skillList: Skill[]) => {
    return (
        <ul className="grid grid-cols-1 gap-2">
            {skillList
                .sort((a, b) => b.value - a.value)
                .map((skill) => {
                    return <SlideListElement key={skill.title} skill={skill} />;
                })}
        </ul>
    );
};
