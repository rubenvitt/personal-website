import React from 'react';
import { SocialButtons } from '../navbar/soial-buttons.component';
import { MenuList } from '../../data/menu-items.list';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const PageFooter = () => {
    const path = useRouter().pathname;

    return (
        <div className="bg-white dark:bg-trueGray-800 border-t-2 border-gray-100 dark:border-trueGray-900">
            <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                    {MenuList.map((item) => {
                        return (
                            <div key={item.url} className="px-5 py-2">
                                <Link href={item.url}>
                                    <a
                                        className={
                                            (item.url === path
                                                ? 'text-orange-900 dark:text-orange-500 '
                                                : 'text-gray-500 dark:text-gray-400 ') +
                                            'text-base leading-6 hover:text-orange-900 dark:hover:text-orange-500'
                                        }
                                    >
                                        {item.title}
                                    </a>
                                </Link>
                            </div>
                        );
                    })}
                </nav>
                <div className="mt-8 flex justify-center">
                    <SocialButtons marginLeft={false} />
                </div>
                <div className="mt-8">
                    <p className="text-center text-base leading-6 text-gray-400 dark:text-gray-600">
                        &copy; {new Date().getFullYear()} Rubeen. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};
