import { DefaultSkillElement, SkillElement } from '../cv/skill.component';
import React from 'react';
import { Skill } from '../../types/skill-items.types';

export const SkillList: React.FC<{
    languages: Skill[];
    onMoreElementsClick: () => void;
    maxElementsVisible: number;
    masonry?: boolean;
}> = ({ languages, maxElementsVisible, onMoreElementsClick, masonry = false }) => {
    return (
        <div className={`mt-5 ${masonry ? 'masonry' : 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'}`}>
            {languages.slice(0, maxElementsVisible - 1).map((skill, i) => (
                <SkillElement skill={skill} key={i} listIndex={i} masonry={masonry} />
            ))}
            <DefaultSkillElement max={maxElementsVisible} skills={languages} buttonHandler={onMoreElementsClick} />
        </div>
    );
};
