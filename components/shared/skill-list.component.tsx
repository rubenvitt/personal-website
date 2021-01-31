import { DefaultSkillElement, SkillElement } from '../cv/skill.component';
import React from 'react';
import { Skill } from '../../types/skill-items.types';
import { FrameworkElement } from '../cv/framework.component';

export const SkillList: React.FC<{
    languages: Skill[];
    onMoreElementsClick: () => void;
    maxElementsVisible?: number;
    masonry?: boolean;
}> = ({ languages, maxElementsVisible, onMoreElementsClick, masonry = false }) => {
    const maxElementsToDisplay = maxElementsVisible ? maxElementsVisible : languages.length + 1;

    return (
        <div className={`mt-5 ${masonry ? 'masonry' : 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'}`}>
            {languages.slice(0, maxElementsToDisplay).map((skill, i) => {
                return skill.level ? (
                    <SkillElement skill={skill} key={skill.id} listIndex={i} masonry={masonry} />
                ) : (
                    <FrameworkElement key={skill.id} title={skill.title} masonry={masonry} />
                );
            })}
            <DefaultSkillElement max={maxElementsToDisplay} skills={languages} buttonHandler={onMoreElementsClick} />
        </div>
    );
};
