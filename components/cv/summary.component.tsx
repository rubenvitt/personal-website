import React from 'react';
import { calculateDaysBetween } from '../../helper/DateCalculator';
import { useTranslation } from 'react-i18next';
import { skillList, SkillType } from '../../data/skill-items.list';

export const CvSummary = (): JSX.Element => {
    const { t } = useTranslation('cv');
    const workdays = calculateDaysBetween(new Date('2019-08-01').getTime(), Date.now());
    const certCount = skillList(t)
        .filter((x) => x.type === SkillType.ProgrammingLanguage)
        .map((x) => x.certificates?.length ?? 0)
        .reduce((a, b) => a + b);

    return (
        <div className="py-12 bg-white border-b border-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="text-base leading-6 text-orange-600 font-semibold tracking-wide uppercase">
                        {t('developer')}
                    </p>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        {t('my_name')}
                    </h3>
                    <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                        {t('small_description')}
                    </p>
                </div>

                <div className="mt-10">
                    <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
                        <li>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                                        {t('summary.work_experience')}
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        {t('summary.work_experience_detail').replace('$workdays', String(workdays))}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10 md:mt-0">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                                        {t('summary.education')}
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        {t('summary.education_detail').replace('$certNum', String(certCount))}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10 md:mt-0">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                                        {t('summary.mindset')}
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        {t('summary.mindset_detail')}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10 md:mt-0">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">{t('summary.more')}</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">{t('summary.more_detail')}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
