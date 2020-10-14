import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { MenuList } from '../../data/menu-items.list';
import { MobileMenuButton } from './mobile/menu-button/mobile-menu-button';
import { MobileMenu } from './mobile/menu/mobile-menu.component';
import { SocialButtons } from './soial-buttons.component';

export const NavBar = (): JSX.Element => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const path = useRouter().pathname;

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src="assets/images/r.png" alt="Rubeen logo" />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src="assets/images/rubeen.png"
                                alt="Rubeen logo"
                            />
                        </div>

                        <div className="hidden sm:-my-px sm:ml-6 sm:flex">
                            {MenuList.map((element, i) => {
                                return (
                                    <a
                                        key={i}
                                        href={element.url}
                                        className={
                                            (i === 0 ? '' : 'ml-8 ') +
                                            (element.url === path
                                                ? 'border-orange-500 text-gray-900 focus-border-orange-700 dark:text-gray-100'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 dark:text-gray-500') +
                                            ' inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none'
                                        }
                                    >
                                        {element.title}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <SocialButtons marginLeft={true} />
                    <MobileMenuButton onClick={toggleMobileMenu} />
                </div>
            </div>

            <MobileMenu isOpen={mobileMenuOpen} />
        </nav>
    );
};
