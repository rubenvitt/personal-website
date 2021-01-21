import React from 'react';
import { Status, StudyModel } from '../../data/study-items.list';
import { ShapeAnimation } from '../../data/icons/animation-data/icons';
import { faUniversity, faBrain, faCalendar } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from 'react-lottie';

interface CvEducationProps {
    studyList: StudyModel[];
}

export const CvEducation = ({ studyList }: CvEducationProps): JSX.Element => {
    const studies = studyList.sort((a, b) => {
        return b.duration.end.getTime() - a.duration.end.getTime();
    });

    return (
        <div className={`${studies.length > 0 ? '' : 'hidden'} relative pt-16 px-4 sm:px-6 lg:pt-24 lg:px-8`}>
            <div className="relative max-w-7xl mx-auto">
                <h2 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-200">Education</h2>
                <div className="bg-white dark:bg-trueGray-800 shadow overflow-hidden sm:rounded-md mt-3 lg:mt-6">
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
    study: StudyModel;
}

const EducationItem = ({ i, study }: EducationItemProps) => {
    return (
        <ul>
            <li className={i === 0 ? '' : 'border-t border-gray-200 dark:border-gray-900'}>
                <a
                    href={study.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 transition duration-150 ease-in-out"
                >
                    <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                            <div className="text-sm leading-5 font-medium text-orange-600 break-words">
                                <span>{study.subject} </span>
                                <span
                                    className={
                                        study.studyStatus === Status.COMPLETED
                                            ? 'text-gray-500 dark:text-gray-300'
                                            : 'text-gray-300 dark:text-gray-500'
                                    }
                                >
                                    | {study.degree}
                                </span>
                            </div>
                            <div className="ml-2 flex-shrink-0 flex">
                                <span
                                    className={
                                        'px-2 inline-flex text-xs leading-5 font-semibold rounded-full ' +
                                        (study.studyStatus === Status.INCOMPLETE
                                            ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200'
                                            : study.studyStatus === Status.SWITCHED
                                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                                            : 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200')
                                    }
                                >
                                    {study.studyStatus}
                                </span>
                            </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between text-gray-500 dark:text-gray-400">
                            <div className="sm:flex">
                                <div className="flex items-center text-sm leading-5">
                                    <span>
                                        <FontAwesomeIcon className={'text-orange-500 w-5 mr-2'} icon={faUniversity} />
                                    </span>
                                    {study.university}
                                </div>
                                <div className="mt-2 flex items-center text-sm leading-5 sm:mt-0">
                                    <span>
                                        <FontAwesomeIcon className={'text-orange-500 w-5 mx-2'} icon={faBrain} />
                                    </span>
                                    {study.courses.join(', ')}
                                </div>
                            </div>
                            <div className="mt-2 flex items-center text-sm leading-5 sm:mt-0">
                                <span>
                                    <FontAwesomeIcon className={'text-orange-500 w-5 mr-2'} icon={faCalendar} />
                                </span>
                                <span>
                                    {study.duration.start.toLocaleDateString('en-gb')} until{' '}
                                    {study.duration.end?.toLocaleDateString('en-gb') ?? 'until now'}
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    );
};
