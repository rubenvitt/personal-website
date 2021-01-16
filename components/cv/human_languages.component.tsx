import React from 'react';
import { GenericSkill } from '../../types/skill-items.types';

class CvHumanLanguagesProps {
    languages: GenericSkill[];
}

export const CvHumanLanguages = ({ languages }: CvHumanLanguagesProps): JSX.Element => {
    return (
        <div
            className={`${
                languages.length > 0 ? '' : 'hidden'
            } relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8`}
        >
            <div className="relative max-w-7xl mx-auto">
                <h2 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-200">Human languages</h2>
                <div className="bg-white dark:bg-trueGray-800 dark:text-gray-200 overflow-hidden sm:rounded-md mt-3 lg:mt-6">
                    {languages.map((elem, i) => {
                        return (
                            <span key={i}>
                                {elem.title} (<span className="font-bold">{elem.level}%</span>)
                                {i + 1 === languages.length ? '' : ', '}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
