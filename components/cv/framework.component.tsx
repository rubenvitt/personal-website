import React from 'react';
import { BooksIcon } from '../../assets/icons';
import { SkillDirection } from '../../types/skill-items.types';

class SkillElementProps {
    masonry?: boolean;
    title: string;
    key: string;
}

export const FrameworkElement = ({ title, key, masonry }: SkillElementProps): JSX.Element => {
    return (
        <div key={key} className={masonry ? 'my-4 break-inside' : ''}>
            <div className="group bg-white dark:bg-trueGray-800 dark:text-gray-200 overflow-hidden shadow rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-150 ease-in-out">
                <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 bg-gray-200 dark:bg-gray-900 rounded-md p-3">
                            <BooksIcon className="h-10 w-10 text-blue-900 dark:text-blue-300" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                            <dl>
                                <dt className="text-sm text-left leading-5 font-medium text-gray-900 dark:text-gray-200 truncate">
                                    {title}
                                </dt>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function calcCols(certs): number {
    return 1;
}

export const calcColor: (direction: SkillDirection) => string = (direction) => {
    switch (direction) {
        case SkillDirection.UP:
            return 'text-green-700 dark:text-green-400';
        case SkillDirection.DOWN:
            return 'text-red-700 dark:text-red-400';
        case SkillDirection.UNCHANGED:
            return 'text-yellow-700 dark:text-yellow-400';
        case SkillDirection.NA:
            return 'text-gray-700 dark:text-gray-400';
    }
};

export const calcArrowDirection: (direction: SkillDirection) => string = (direction) => {
    switch (direction) {
        case SkillDirection.UP:
            return 'rotate-180';
        case SkillDirection.DOWN:
            return '';
        case SkillDirection.UNCHANGED:
            return '-rotate-90';
    }
};
