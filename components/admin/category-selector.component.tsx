import React from 'react';

const elementList = [
    {
        abbr: 'WORK',
        name: 'Work items',
        details: 'xx elements',
        primary: 'bg-orange-600',
    },
    {
        abbr: 'SKILL',
        name: 'Skill items',
        details: 'xx elements',
        primary: 'bg-blue-600',
    },
    {
        abbr: 'EDU',
        name: 'Education items',
        details: 'xx elements',
        primary: 'bg-pink-600',
    },
];

export const CategorySelector = () => {
    return (
        <div className="px-4 mt-6 sm:px-6 lg:px-8">
            <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>
            <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
                {elementList.map((it) => {
                    return (
                        <li key={it.abbr} className="relative col-span-1 flex shadow-sm rounded-md">
                            <div
                                className={`flex-shrink-0 flex items-center justify-center w-16 ${it.primary} text-white text-sm leading-5 font-medium rounded-l-md`}
                            >
                                {it.abbr}
                            </div>

                            <div
                                onClick={() => {
                                    alert('click on ' + it);
                                }}
                                className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate cursor-pointer hover:bg-gray-100 hover:border-gray-500"
                            >
                                <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <h5 className="text-gray-900 font-medium transition ease-in-out duration-150">
                                        {it.name}
                                    </h5>
                                    <p className="text-gray-500">{it.details}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
