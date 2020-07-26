import React, {useState} from "react";
import {useTranslation} from "../../config/i18next.config";
import {useRouter} from "next/router";
import {MenuList} from "./menu-items.list";
import {MobileMenuButton} from "./mobile/menu-button/mobile-menu-button";
import {MobileMenu} from "./mobile/menu/mobile-menu.component";

export const NavBar = () => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const {t} = useTranslation('common');

    const path = useRouter().pathname

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!profileMenuOpen);
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                        <img className="block lg:hidden h-8 w-auto"
                             src="assets/images/r.png"
                             alt="Rubeen logo"/>
                        <img className="hidden lg:block h-8 w-auto"
                             src="assets/images/rubeen.png"
                             alt="Rubeen logo"/>
                    </div>

                    <div className="hidden sm:-my-px sm:ml-6 sm:flex">
                        {MenuList(t).map((element, i) => {
                            return <a key={i} href={element.url}
                                      className={
                                          ((i === 0) ? '' : 'ml-8 ')
                                          + ((element.url === path)
                                              ? 'border-orange-500 text-gray-900 focus-border-orange-700'
                                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300')
                                          + ' inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none'
                                      }
                            >{element.title}</a>
                        })}
                    </div>
                </div>

                {/* TODO: profile links (github etc) */}
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                        className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
                        aria-label="Notifications">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"/>
                        </svg>
                    </button>
                </div>
                <MobileMenuButton onClick={toggleMobileMenu}/>
            </div>
        </div>

        <MobileMenu isOpen={mobileMenuOpen}/>
    </nav>
}
