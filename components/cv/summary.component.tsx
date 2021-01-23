import React from 'react';
import { calcDurationBetween, calculateDaysBetween } from '../../helper/date-calculator';
import { WorkModel } from '../../types/work-items.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faMicrochip, faEllipsisH } from '@fortawesome/pro-light-svg-icons';

interface CvSummaryProps {
    certCount: number;
    lastWork: WorkModel;
}

export const CvSummary = ({ certCount, lastWork }: CvSummaryProps): JSX.Element => {
    const workdays = calculateDaysBetween(new Date('2019-08-01').getTime(), Date.now());

    return (
        <div className="py-12 bg-white border-b border-gray-100 dark:bg-trueGray-800 dark:border-gray-900">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center group">
                    <p className="text-base leading-6 text-orange-600 font-semibold tracking-wide uppercase group-hover:text-orange-900 dark:text-orange-500 dark:group-hover:text-orange-700">
                        Developer
                    </p>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 dark:text-gray-200">
                        Ruben Vitt
                    </h3>
                    <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto dark:text-gray-400">
                        Hey, I'm a {calcDurationBetween({ start: new Date('1997-04-07') })} old bachelor graduated
                        computer scientist. I'm working since {calcDurationBetween(lastWork.duration)} at{' '}
                        {lastWork.company.name}.
                    </p>
                </div>

                <div className="mt-10">
                    <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <li className="md:mr-2">
                            <div className="flex group">
                                <div className="flex-shrink-0 group">
                                    <div className="flex items-center justify-center h-12 w-12 p-2 rounded-md bg-orange-500 dark:bg-orange-800 group-hover:bg-orange-700 dark:group-hover:bg-orange-900 text-white transition">
                                        <FontAwesomeIcon height={24} width={24} icon={faBriefcase} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                                        Work Experience
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                                        I have professional experience (after university) since {workdays + ' '} days.
                                        Currently I'm working as {lastWork.position} at{' '}
                                        <a href={lastWork.company.url}>{lastWork.company.name}</a> in {lastWork.place}.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10 md:mt-0 md:ml-2">
                            <div className="flex group">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 p-2 rounded-md bg-orange-500 dark:bg-orange-800 group-hover:bg-orange-700 dark:group-hover:bg-orange-900 text-white transition">
                                        <FontAwesomeIcon height={24} width={24} icon={faGraduationCap} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                                        Education
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                                        After the university degree I can't stop to learn. Currently I finished
                                        {' ' + certCount + ' '} online course-certificates already and I'm open for new
                                        ones.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10 md:mt-5 md:mr-2">
                            <div className="flex group">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 p-2 rounded-md bg-orange-500 dark:bg-orange-800 group-hover:bg-orange-700 dark:group-hover:bg-orange-900 text-white transition">
                                        <FontAwesomeIcon height={24} width={24} icon={faMicrochip} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                                        Technologies & Mindset
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                                        I love new programming languages, modern tools and modern work. I love to work
                                        from home & testing out new things.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10 md:mt-5 md:ml-2">
                            <div className="flex group">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 p-2 rounded-md bg-orange-500 dark:bg-orange-800 group-hover:bg-orange-700 dark:group-hover:bg-orange-900 text-white transition">
                                        <FontAwesomeIcon height={24} width={24} icon={faEllipsisH} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                                        Some more words
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                                        I really like cycling in the woods or near the sea, programming of course and to
                                        listen or make music. Another wonderful thing is kayaking on rivers.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
