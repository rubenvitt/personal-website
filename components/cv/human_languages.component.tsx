import React from 'react';
import { skillList, SkillType } from '../../data/skill-items.list';

export const CvHumanLanguages = (): JSX.Element => {
    const languages = skillList.filter((skill) => skill.type === SkillType.HumanLanguage);
    return (
        <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <h2 className="text-xl leading-6 font-medium text-gray-900">Human languages</h2>
                <div className="bg-white overflow-hidden sm:rounded-md mt-3 lg:mt-6">
                    {languages.map((elem, i) => {
                        return (
                            <span key={i}>
                                {elem.title + ' (' + elem.value + '%)' + (i + 1 === languages.length ? '' : ', ')}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
