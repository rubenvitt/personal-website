import React from 'react';
import { SVG } from '../../assets/icons';

export interface CvSummaryElement {
    Icon: SVG;
    title: string;
    description: JSX.Element | string;
}

export const CvSummaryElements: React.FC<{
    elements: CvSummaryElement[];
}> = ({ elements }) => {
    return (
        <ul className="md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-12">
            {elements.map((element) => {
                return (
                    <li key={element.title}>
                        <div className={'flex group'}>
                            <div className={'flex-shrink-0 group'}>
                                <div className="flex shadow-inner items-center justify-center h-12 w-12 p-2 rounded-md bg-orange-600 dark:bg-orange-800 group-hover:bg-orange-700 dark:group-hover:bg-orange-900 text-white transition">
                                    {<element.Icon className="w-6" />}
                                </div>
                            </div>
                            <div className={'ml-4'}>
                                <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                                    {element.title}
                                </h4>
                                <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                                    {element.description}
                                </p>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
