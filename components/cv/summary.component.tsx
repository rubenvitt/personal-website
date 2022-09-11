import React from 'react';
import { BriefcaseIcon, GraduationCapIcon, HobbyIcon, MicrochipIcon } from '../../assets/icons';
import { calcDurationBetween, calculateDaysBetween } from '../../helper/date-calculator';
import { WorkModel } from '../../types/work-items.types';
import { CvSummaryElement, CvSummaryElements } from './summary-elements.components';

interface CvSummaryProps {
    certCount: number;
    lastWork: WorkModel;
}

export const CvSummary = ({ certCount, lastWork }: CvSummaryProps): JSX.Element => {
    const workdays = calculateDaysBetween(new Date('2019-08-01').getTime(), Date.now());
    const summaryElements: CvSummaryElement[] = [
        {
            description: (
                <>
                    I have professional experience (after university) since {workdays} days. Currently I'm working as{' '}
                    {lastWork.position} at{' '}
                    <a className="underline" href={lastWork.company.url}>
                        {lastWork.company.name}
                    </a>{' '}
                    in {lastWork.place}.
                </>
            ),
            Icon: BriefcaseIcon,
            title: 'Work Experience',
        },
        {
            description: `After the university degree I can't stop to learn. Currently I finished ${certCount} online course-certificates already and I'm open for new ones.`,
            Icon: GraduationCapIcon,
            title: 'Education',
        },
        {
            description:
                'I love new programming languages, modern tools and modern work. I love to work from home & testing out new things.',
            Icon: MicrochipIcon,
            title: 'Technologies & Mindset',
        },
        {
            description:
                'I really like cycling in the woods or near the sea, programming of course and to listen or make music. Another wonderful thing is kayaking on rivers.',
            Icon: HobbyIcon,
            title: 'Some more words',
        },
    ];

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
                    <CvSummaryElements elements={summaryElements} />
                </div>
            </div>
        </div>
    );
};
