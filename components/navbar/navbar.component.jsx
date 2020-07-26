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
                            return <a href={element.url}
                                      className={
                                          ((i === 0) ? '' : 'ml-8 ')
                                          + ((element.url === path)
                                              ? 'border-indigo-500 text-gray-900 focus-border-indigo-700'
                                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300')
                                          + ' inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none'
                                      }
                            >{element.title}</a>
                        })}
                    </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                        className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
                        aria-label="Notifications">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                    </button>

                    <div className="ml-3 relative">
                        <div>
                            <button
                                className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                                id="user-menu" aria-label="User menu" aria-haspopup="true"
                                onClick={toggleProfileMenu}>
                                <img className="h-8 w-8 rounded-full"
                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
                <MobileMenuButton onClick={toggleMobileMenu}/>
            </div>
        </div>

        <MobileMenu isOpen={mobileMenuOpen}/>
    </nav>
}
