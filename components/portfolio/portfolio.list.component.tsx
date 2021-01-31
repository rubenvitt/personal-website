import React from 'react';
import { PortfolioModel as DataItem, PortfolioItemType } from '../../types/portfolio-items.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faLanguage } from '@fortawesome/pro-regular-svg-icons';
import Link from 'next/link';

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
        <Link href={`/portfolio/${item.abbr}`}>
            <a className="col-span-1 flex shadow-sm rounded-md group">
                <div
                    className={`flex-shrink-0 flex items-center justify-center w-16 ${color} text-white text-sm leading-5 font-medium rounded-l-md transition`}
                >
                    {item.abbr}
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 dark:border-coolGray-900 bg-white dark:bg-trueGray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-900 rounded-r-md truncate transition">
                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                        <div className="text-gray-900 dark:text-gray-200 font-medium hover:text-gray-600 hover:text-gray-200 transition ease-in-out duration-150">
                            {item.title}
                        </div>
                        {item.linesOfCode && (
                            <p className="text-gray-500 dark:text-gray-400">
                                <FontAwesomeIcon className={'h-4 inline mr-1'} icon={faLaptopCode} />
                                {item.linesOfCode} lines of code
                            </p>
                        )}
                        {item.langs && (
                            <p className="text-gray-500 dark:text-gray-400 whitespace-normal flex">
                                <FontAwesomeIcon className={'h-4 inline mr-1 flex-wrap mt-0.5'} icon={faLanguage} />
                                <p className="flex-1">{item.langs.map((i) => i.title).join(', ')}</p>
                            </p>
                        )}
                    </div>
                </div>
            </a>
        </Link>
    );
};
