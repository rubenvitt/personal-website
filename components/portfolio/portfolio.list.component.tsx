import React, { useState } from 'react';
import { PortfolioItem as DataItem, PortfolioItemType, portfolioList } from '../../data/portfolio-items.list';

export const PortfolioList = (): JSX.Element => {
    const [linesOfCode, setLinesOfCode] = useState('...');
    const [mainLanguages, setMainLanguages] = useState([]);

    return (
        <div className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioList().map((item) => {
                return <PortfolioItem item={item} />;
            })}
        </div>
    );
};

class PortfolioItemProps {
    item: DataItem;
}

const PortfolioItem = ({ item }: PortfolioItemProps): JSX.Element => {
    const linesOfCode = '...';
    const mainLanguages = [];
    let color: string;
    switch (item.portfolioItemType) {
        case PortfolioItemType.ONLINE:
            color = 'green';
            break;
        case PortfolioItemType.ARCHIVE:
            color = 'gray';
            break;
        case PortfolioItemType.FAVORITE:
            color = 'orange';
            break;
        default:
            color = 'blue';
    }

    return (
        <div onClick={() => alert('OK')} className="col-span-1 flex shadow-sm rounded-md group cursor-pointer">
            <div
                className={`flex-shrink-0 flex items-center justify-center w-16 bg-${color}-600 group-hover:bg-${color}-900 text-white text-sm leading-5 font-medium rounded-l-md`}
            >
                {item.abbr}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white group-hover:bg-gray-100 rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                    <div
                        onClick={() => alert('TEST')}
                        className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150"
                    >
                        Test
                    </div>
                    <p className="text-gray-500">
                        <svg
                            className={`h-4 inline text-${color}-600 mr-1`}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        {linesOfCode} lines of code
                    </p>
                    <p className="text-gray-500 whitespace-normal flex">
                        <svg
                            className={`h-4 inline text-${color}-600 mr-1 flex-wrap`}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="flex-1">languages: {mainLanguages.join(', ')}</p>
                    </p>
                </div>
            </div>
        </div>
    );
};
