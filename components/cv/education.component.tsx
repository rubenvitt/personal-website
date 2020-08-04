import React from 'react';
import { Status, Study, studyList } from '../../data/study-items.list';

export const CvEducation = (): JSX.Element => {
    const studies = studyList().sort((a, b) => {
        return b.duration.end.getTime() - a.duration.end.getTime();
    });

    return (
        <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <h2 className="text-xl leading-6 font-medium text-gray-900">Education</h2>
                <div className="bg-white shadow overflow-hidden sm:rounded-md mt-3 lg:mt-6">
                    {studies.map((elem, i) => {
                        return <EducationItem key={i} study={elem} i={i} />;
                    })}
                </div>
            </div>
        </div>
    );
};

class EducationItemProps {
    i: number;
    study: Study;
}

const EducationItem = ({ i, study }: EducationItemProps) => {
    return (
        <ul>
            <li className={i != 0 ? 'border-t border-gray-200' : ''}>
                <div className="block hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                    <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                            <div className="text-sm leading-5 font-medium text-orange-600 truncate">
                                {study.subject}{' '}
                                <span className={study.status === Status.COMPLETED ? 'text-gray-500' : 'text-gray-300'}>
                                    | {study.degree}
                                </span>
                            </div>
                            <div className="ml-2 flex-shrink-0 flex">
                                <span
                                    className={
                                        'px-2 inline-flex text-xs leading-5 font-semibold rounded-full ' +
                                        (study.status === Status.INCOMPLETE
                                            ? 'bg-red-100 text-red-800'
                                            : study.status === Status.SWITCHED
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : 'bg-green-100 text-green-800')
                                    }
                                >
                                    {study.status}
                                </span>
                            </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                                <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
                                    <svg
                                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {study.university}
                                </div>
                                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                    <svg
                                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                    {study.courses.join(', ')}
                                </div>
                            </div>
                            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                <svg
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>
                                    {study.duration.start.toLocaleDateString()} until{' '}
                                    {study.duration.end?.toLocaleDateString() ?? 'now'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
};
