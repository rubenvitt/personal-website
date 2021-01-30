import React from 'react';
import { PortfolioModel } from '../../types/portfolio-items.types';
import { SkillList } from '../shared/skill-list.component';
import moment from 'moment';

interface Props {
    portfolioItem: PortfolioModel;
}

export const PortfolioDetailComponent: React.FC<Props> = ({ portfolioItem }) => {
    return (
        <>
            <div className="relative pt-16 overflow-hidden">
                <div className="px-4 text-left">
                    <div className="mx-auto lg:flex lg:justify-between lg:items-center">
                        <div className="inline">
                            <p className="text-base font-semibold tracking-wider text-orange-600 uppercase">
                                {moment(portfolioItem.startDate).format('MM/YYYY')}{' '}
                                {portfolioItem.endDate
                                    ? ' - ' + moment(portfolioItem.endDate).format('MM/YYYY')
                                    : 'until now'}
                            </p>
                            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-200 tracking-tight sm:text-4xl">
                                {portfolioItem.title}
                            </h2>
                            <p className="mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
                                {portfolioItem.description}
                            </p>
                        </div>
                        <div className="flex flex-shrink-0">
                            {portfolioItem.liveUrl && portfolioItem.githubUrl ? (
                                <>
                                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                        <div className="inline-flex rounded-md shadow">
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href={portfolioItem.liveUrl}
                                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white dark:text-gray-200 bg-orange-600 dark:bg-orange-700 hover:bg-orange-500 dark:hover:bg-orange-900 focus:outline-none focus:ring transition duration-150 ease-in-out"
                                            >
                                                View live version
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={portfolioItem.githubUrl}
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-orange-600 bg-white dark:bg-trueGray-800 hover:text-orange-500 hover:bg-gray-100 hover:border-orange-500 focus:outline-none focus:border-orange-300 focus:ring-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                                        >
                                            View source code
                                        </a>
                                    </div>
                                </>
                            ) : portfolioItem.githubUrl ? (
                                <>
                                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                        <div className="inline-flex rounded-md shadow">
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href={portfolioItem.githubUrl}
                                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white dark:text-gray-200 bg-orange-600 dark:bg-orange-700 hover:bg-orange-500 dark:hover:bg-orange-900 focus:outline-none focus:ring transition duration-150 ease-in-out"
                                            >
                                                View source code
                                            </a>
                                        </div>
                                    </div>
                                </>
                            ) : portfolioItem.liveUrl ? (
                                <>
                                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                        <div className="inline-flex rounded-md shadow">
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href={portfolioItem.liveUrl}
                                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white dark:text-gray-200 bg-orange-600 dark:bg-orange-700 hover:bg-orange-500 dark:hover:bg-orange-900 focus:outline-none focus:ring transition duration-150 ease-in-out"
                                            >
                                                View live version
                                            </a>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                    {portfolioItem.image && (
                        <div className="mt-12 mb-10">
                            <img className="rounded-lg" src={portfolioItem.image} alt="" />
                        </div>
                    )}
                    <div className="mt-12 mb-5">
                        <SkillList onMoreElementsClick={null} languages={portfolioItem.langs} />
                    </div>
                </div>
            </div>
        </>
    );
};
