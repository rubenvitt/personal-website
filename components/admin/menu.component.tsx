import React from 'react';
import Image from 'next/image';

interface MenuItem {
    title: string;
    svg: JSX.Element;
    active: boolean;
}

interface MobileMenuToggler {
    toggleMobileMenu: () => void;
}

interface AdminMenuProps extends MobileMenuToggler {
    menuItems: MenuItem[];
    mobileMenuOpen: boolean;
}

export const MenuSwitcher = ({ toggleMobileMenu }: MobileMenuToggler): JSX.Element => {
    return (
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
            <button
                onClick={toggleMobileMenu}
                className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 lg:hidden"
                aria-label="Open sidebar"
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </button>
        </div>
    );
};

export const AdminMenu = ({ menuItems, mobileMenuOpen, toggleMobileMenu }: AdminMenuProps) => {
    return (
        <>
            <MobileMenu menuItems={menuItems} mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            <DesktopMenu menuItems={menuItems} toggleMobileMenu={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen} />
        </>
    );
};

const MobileMenu = ({ menuItems, toggleMobileMenu, mobileMenuOpen }: AdminMenuProps) => {
    return (
        <div className={`lg:hidden ${mobileMenuOpen ? '' : 'hidden'}`}>
            <div className="fixed inset-0 flex z-40">
                <div onClick={toggleMobileMenu} className={`fixed inset-0`}>
                    <div className="absolute inset-0 bg-gray-600 opacity-75" />
                </div>
                <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                    <div className="absolute top-0 right-0 -mr-14 p-1">
                        <button
                            onClick={toggleMobileMenu}
                            className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                            aria-label="Close sidebar"
                        >
                            <svg className="h-6 w-6 text-black" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-shrink-0 flex items-center px-4">
                        <Image className="h-8 w-auto" src="/assets/images/rubeen.png" alt="Rubeen" unsized />
                    </div>
                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                        <nav className="px-2">
                            <div className="space-y-1">
                                {menuItems.map((item) => {
                                    return (
                                        <a
                                            href="#"
                                            className={`group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md ${
                                                item.active
                                                    ? 'text-gray-900 bg-gray-100 hover:bg-gray-100 focus:bg-gray-200'
                                                    : 'text-gray-600 hover:bg-gray-50 focus:bg-gray-50'
                                            } hover:text-gray-900 focus:outline-none transition ease-in-out duration-150`}
                                        >
                                            <svg
                                                className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                {item.svg}
                                            </svg>
                                            {item.title}
                                        </a>
                                    );
                                })}
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="flex-shrink-0 w-14" />
            </div>
        </div>
    );
};
const DesktopMenu = ({ menuItems }: AdminMenuProps) => {
    return (
        <div className="hidden lg:flex lg:flex-shrink-0">
            <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100">
                <div className="flex items-center flex-shrink-0 px-6">
                    <Image className="h-8 w-auto" src="/assets/images/rubeen.png" alt="Rubeen" unsized />
                </div>
                {/*<!-- Sidebar component, swap this element with another sidebar if you like -->*/}
                <div className="h-0 flex-1 flex flex-col overflow-y-auto">
                    {/*}<!-- Navigation -->*/}
                    <nav className="px-3 mt-6">
                        <div className="space-y-1">
                            {menuItems.map((item) => {
                                return (
                                    <a
                                        href="javascript:void"
                                        key={item.title}
                                        className={`group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md ${
                                            item.active
                                                ? 'text-gray-900 bg-gray-200'
                                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                        }  focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150`}
                                    >
                                        <svg
                                            className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            {item.svg}
                                        </svg>
                                        {item.title}
                                    </a>
                                );
                            })}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
