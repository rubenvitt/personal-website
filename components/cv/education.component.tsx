import React from 'react';
import { Status, StudyModel, studyList } from '../../data/study-items.list';
import { ShapeAnimation } from '../../data/icons/animation-data/icons';
import Lottie from 'react-lottie';

interface CvEducationProps {
    studyList: StudyModel[];
}

export const CvEducation = ({ studyList }: CvEducationProps): JSX.Element => {
    const studies = studyList.sort((a, b) => {
        console.log(a.university + ': ' + a.duration.end);
        return b.duration.end.getTime() - a.duration.end.getTime();
    });

    return (
        <div className={`${studies.length > 0 ? '' : 'hidden'} relative pt-16 px-4 sm:px-6 lg:pt-24 lg:px-8`}>
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
    study: StudyModel;
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
                            <div className="text-sm leading-5 font-medium text-orange-600 break-words">
                                <span>{study.subject} </span>
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
                                <div className="flex items-center text-sm leading-5 text-gray-500">
                                    <span>
                                        <Lottie
                                            options={{
                                                loop: true,
                                                autoplay: true,
                                                animationData: ShapeAnimation.PinWithEclipseUnder,
                                                rendererSettings: {
                                                    preserveAspectRatio: 'xMidYMid slice',
                                                },
                                            }}
                                            height={48}
                                            width={48}
                                        />
                                    </span>
                                    {study.university}
                                </div>
                                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                    <span>
                                        <Lottie
                                            options={{
                                                loop: true,
                                                autoplay: true,
                                                animationData: ShapeAnimation.LightOn,
                                                rendererSettings: {
                                                    preserveAspectRatio: 'xMidYMid slice',
                                                },
                                            }}
                                            height={48}
                                            width={48}
                                        />
                                    </span>
                                    {study.courses.join(', ')}
                                </div>
                            </div>
                            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                <span>
                                    <Lottie
                                        options={{
                                            loop: true,
                                            autoplay: true,
                                            animationData: ShapeAnimation.Hourglass,
                                            rendererSettings: {
                                                preserveAspectRatio: 'xMidYMid slice',
                                            },
                                        }}
                                        height={48}
                                        width={48}
                                    />
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
