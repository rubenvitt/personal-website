import { ProgrammingLanguageSkill, Skill } from '../../types/skill-items.types';
import { DefaultSkillElement, SkillElement } from './skill.component';
import React, { useState } from 'react';
import { SlideOver } from '../shared/slideover.component';
import { SlideListElement } from '../shared/slidelist.component';
import { SkillList } from '../shared/skill-list.component';

const maxElementsVisible = 6;

interface CvLanguageSkillsProps {
    languages: ProgrammingLanguageSkill[];
}

export const CvLanguageSkills = ({ languages }: CvLanguageSkillsProps): JSX.Element => {
    const [slideOverState, setSlideOverState] = useState(false);
    const toggleSlideOverState = () => {
        setSlideOverState(!slideOverState);
    };

    return (
        <div className={`${languages.length > 0 ? '' : 'hidden'} pt-2 relative px-4 sm:px-6 lg:px-8`}>
            <h2 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-200">
                I speak following (computer) languages
            </h2>
            <SkillList
                languages={languages}
                maxElementsVisible={maxElementsVisible}
                onMoreElementsClick={toggleSlideOverState}
            />
            <SlideOver
                title="My programming languages"
                setSlideOverState={setSlideOverState}
                slideOverState={slideOverState}
                contentFunction={slideOverContent}
                content={languages}
            />
        </div>
    );
};

const slideOverContent = (skillList: Skill[]) => {
    return (
        <ul className="md:masonry md:block grid grid-cols-1 md:grid-cols-2">
            {skillList
                .sort((a, b) => b.level - a.level)
                .map((skill) => {
                    return <SlideListElement key={skill.title} skill={skill} />;
                })}
        </ul>
    );
};
