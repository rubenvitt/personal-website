import { workList } from '../../data/work-items.list';
import React, { useState } from 'react';
import { SlideOver } from '../shared/slideover.component';
import { WorkModel } from '../../data/work-items.list';
import { zeroPad } from '../../helper/NumberHelper';
import { calcDurationBetween } from '../../helper/DateCalculator';
import { useTranslation } from 'react-i18next';

export const CvWork: () => JSX.Element = () => {
    const { t } = useTranslation('cv');
    const works = workList(t);

    return (
        <div className="relative pt-16 px-4 sm:px-6 lg:pt-24 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <h2 className="text-xl leading-6 font-medium text-gray-900">{t('work.title')}</h2>
                <div className="mt-12 grid gap-5 max-w-lg mx-auto md:grid-cols-2 md:max-w-none lg:grid-cols-3">
                    {works.map((work, i) => {
                        return (
                            <>
                                <WorkItem work={work} key={i} />
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

class WorkItemProps {
    work: WorkModel;
}

const WorkItem = ({ work }: WorkItemProps) => {
    const [slideOverState, setSlideOverState] = useState(false);
    const toggleSlideOverState = () => {
        setSlideOverState(!slideOverState);
    };

    const { t } = useTranslation('cv');

    return (
        <>
            <SlideOver
                content={work}
                contentFunction={workSlideOverContent}
                setSlideOverState={setSlideOverState}
                slideOverState={slideOverState}
                title={t('work.slideover.title')}
            />
            <button
                onClick={toggleSlideOverState}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden text-left bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
            >
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={work.image} alt={work.company} />
                </div>
                <div className="block flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800 mr-2">
                                {work.duration.start.getFullYear().toString().slice(2) +
                                    '-' +
                                    zeroPad(work.duration.start.getMonth(), 2)}
                                {work.duration.end
                                    ? ` ${t('until')} ${work.duration.end.getFullYear().toString().slice(2)}-${zeroPad(
                                          work.duration.end.getMonth(),
                                          2,
                                      )}`
                                    : ` ${t('until_now')}`}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-blue-100 text-blue-800 mr-2">
                                {work.position}
                            </span>
                        </p>
                        <div className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">{work.company}</h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">{work.summary}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="ml-3">
                            <p className="text-sm leading-5 font-medium text-gray-900">{t('work.some_specs')}</p>
                            <div className="flex text-sm leading-5 text-gray-500">
                                <span>{calcDurationBetween(work.duration, t)}</span>
                                <span className="mx-1">&middot;</span>
                                <span>
                                    {work.responsibilities.length} {t('responsibilities')}
                                </span>
                                <span className="mx-1">&middot;</span>
                                <span>
                                    {work.technologies.length} {t('technologies')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </>
    );
};

const workSlideOverContent = (work: WorkModel) => {
    const { t } = useTranslation('cv');

    return (
        <div className="bg-white">
            <div className="shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{work.position}</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">{work.company}</p>
                </div>

                <div className="p-0">
                    <img alt={work.company} src={work.image} />
                </div>

                <div className="px-4 border-b border-gray-100 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm leading-5 font-medium text-gray-500">{t('work.employed_for')}</dt>
                        </div>
                    </dl>
                    <dd className="mt-1 text-sm leading-5 text-gray-900">{calcDurationBetween(work.duration, t)}</dd>
                </div>

                <div className="px-4 py-5 sm:px-6 border-b border-gray-100">
                    <dl className="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                {t('work.slideover.responsibilities')}
                            </dt>
                        </div>
                    </dl>
                    <dd className="mt-1 text-sm leading-5 text-gray-900">
                        <ul>
                            {work.responsibilities.map((element, i) => {
                                return (
                                    <li className="list-disc" key={i}>
                                        {element}
                                    </li>
                                );
                            })}
                        </ul>
                    </dd>
                </div>

                <div className="px-4 py-5 sm:px-6 border-b border-gray-100">
                    <dl className="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                {t('work.slideover.technologies')}
                            </dt>
                        </div>
                    </dl>
                    <dd className="mt-1 text-sm leading-5 text-gray-900">
                        <ul>
                            {work.technologies.map((element, i) => {
                                return (
                                    <li className="list-disc" key={i}>
                                        {element}
                                    </li>
                                );
                            })}
                        </ul>
                    </dd>
                </div>

                <div className="px-4 py-5 sm:px-6 border-b border-gray-100">
                    <dd className="mt-1 text-sm leading-5 text-gray-900">
                        <ul>{work.summary}</ul>
                    </dd>
                </div>
            </div>
        </div>
    );
};
