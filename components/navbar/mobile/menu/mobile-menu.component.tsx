import { MenuList } from '../../../../data/menu-items.list';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

class MobileMenuProps {
    isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps): JSX.Element => {
    const router = useRouter();

    return (
        <div className={'sm:hidden ' + (isOpen ? '' : 'hidden')}>
            <div className="pt-2 pb-3">
                {MenuList.map((element) => {
                    return (
                        <Link key={element.url} href={element.url}>
                            <a
                                className={
                                    (router.pathname === element.url
                                        ? 'border-orange-500 text-orange-700 bg-orange-50 focus:text-orange-800 focus:bg-orange-100 focus:border-orange-700 dark:bg-orange-900 dark:text-gray-200 dark:focus:text-gray-200 dark:focus:bg-orange-900'
                                        : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 hover:border-gray-300 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-900 focus:border-gray-300') +
                                    ' mt-1 block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none transition duration-150 ease-in-out'
                                }
                            >
                                {element.title}
                            </a>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
