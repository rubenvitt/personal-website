import React, { useState } from 'react';
import { CategorySelector } from './category-selector.component';
import { AdminMenu, MenuSwitcher } from './menu.component';
import { PageTitle } from './page-title.component';

const menuItems = [
    {
        active: true,
        title: 'Home',
        svg: (
            <>
                <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1"
                    stroke="#221b38"
                    fill="none"
                    d="M3 9L12 2L21 9V22H3V9Z"
                />
                <path strokeMiterlimit="10" strokeWidth="1" stroke="#221b38" d="M6 18H18" />
                <path strokeMiterlimit="10" strokeWidth="1" stroke="#221b38" d="M6 14H18" />
            </>
        ),
    },
    {
        active: false,
        title: 'Website',
        svg: (
            <>
                <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1"
                    stroke="#221b38"
                    fill="none"
                    d="M12 18C6.48 18 2 12 2 12C2 12 6.48 6 12 6C17.52 6 22 12 22 12C22 12 17.52 18 12 18Z"
                />
                <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1"
                    stroke="#221b38"
                    fill="none"
                    d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
                />
            </>
        ),
    },
];

export const AdminPageContentComponent = (): JSX.Element => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="h-screen flex overflow-hidden bg-white dark:bg-gray-900">
            <AdminMenu menuItems={menuItems} mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

            {/*<!-- Main column -->*/}
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <MenuSwitcher toggleMobileMenu={toggleMobileMenu} />

                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={0}>
                    <PageTitle />

                    <CategorySelector />
                    <div className="mt-10">
                        <div className="px-4 sm:px-6">
                            <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Projects</h2>
                        </div>
                        <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                                >
                                    <div className="flex items-center truncate space-x-3">
                                        <div className="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600" />
                                        <p className="font-medium truncate text-sm leading-6">
                                            GraphQL API{' '}
                                            <span className="truncate font-normal text-gray-500">in Engineering</span>
                                        </p>
                                    </div>
                                    <svg
                                        className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
};
