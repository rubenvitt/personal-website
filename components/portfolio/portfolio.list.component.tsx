import React from 'react';
import { PortfolioModel as DataItem, PortfolioItemType } from '../../types/portfolio-items.types';

interface PortfolioListProps {
    list: DataItem[];
}

export const PortfolioList = ({ list }: PortfolioListProps): JSX.Element => {
    return (
        <div className="mx-3 mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((item, i) => {
                return <PortfolioItem key={i} item={item} />;
            })}
        </div>
    );
};

class PortfolioItemProps {
    item: DataItem;
}

const PortfolioItem = ({ item }: PortfolioItemProps): JSX.Element => {
    let color: string;
    console.log('portfolioItem-TYPE', item.portfolioItemType);
    switch (item.portfolioItemType) {
        case PortfolioItemType.ONLINE:
            color = 'bg-green-600 group-hover:bg-green-900';
            break;
        case PortfolioItemType.ARCHIVE:
            color = 'bg-gray-600 group-hover:bg-gray-900';
            break;
        case PortfolioItemType.FAVORITE:
            color = 'bg-orange-600 group-hover:bg-orange-900';
            break;
        default:
            color = 'bg-blue-600 group-hover:bg-blue-900';
    }

    return (
        <a href={item.url} target="_blank" rel="noreferrer" className="col-span-1 flex shadow-sm rounded-md group">
            <div
                className={`flex-shrink-0 flex items-center justify-center w-16 ${color} text-white text-sm leading-5 font-medium rounded-l-md`}
            >
                {item.abbr}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white group-hover:bg-gray-100 rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                    <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">
                        {item.title}
                    </div>
                    {item.linesOfCode ? (
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
                            {item.linesOfCode} lines of code
                        </p>
                    ) : null}
                    {item.langs ? (
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
                            <p className="flex-1">{item.langs.map((i) => i.title).join(', ')}</p>
                        </p>
                    ) : null}
                </div>
            </div>
        </a>
    );
};
