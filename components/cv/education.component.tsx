import React from 'react';
import { Status, Study, studyList } from '../../data/study-items.list';
import Shape from 'shape-library';

export const CvEducation = (): JSX.Element => {
    const studies = studyList.sort((a, b) => {
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
                <a
                    href={study.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
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
                                    <Shape
                                        type="icons"
                                        category="Filled"
                                        name="Location"
                                        primaryColor="currentColor"
                                        size={24}
                                        backgroundColor="none"
                                        borderRadius={0}
                                    />
                                    {study.university}
                                </div>
                                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                    <Shape
                                        type="icons"
                                        category="Office"
                                        name="Book"
                                        primaryColor="currentColor"
                                        size={24}
                                        backgroundColor="none"
                                        borderRadius={0}
                                    />
                                    {study.courses.join(', ')}
                                </div>
                            </div>
                            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                <Shape type="icons" category='Office' name='Calendar' primaryColor='currentColor' secondaryColor='#f5a623' size={24} backgroundColor="none" borderRadius={0} />
                                <span>
                                    {study.duration.start.toLocaleDateString()} until{' '}
                                    {study.duration.end?.toLocaleDateString() ?? 'until now'}
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    );
};
