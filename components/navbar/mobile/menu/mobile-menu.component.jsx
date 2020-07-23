import {MenuList} from "../../menu-items.list";
import {useTranslation} from "../../../../config/i18next.config";
import React from "react";
import {useRouter} from "next/router";
import {route} from "next/dist/next-server/server/router";

export const MobileMenu = ({isOpen}) => {

    const {t} = useTranslation('common');
    const router = useRouter();

    return <div className={"sm:hidden " + (!isOpen ? "hidden" : '')}>
        <div className="pt-2 pb-3">
            {MenuList(t).map((element, i) => {
                return (
                    <a key={element.url} href={element.url}
                       className={(i === 0 ? 'mt-1 ' : null)
                       + (router.pathname === element.url ? 'border-indigo-500 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700'
                           : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300')
                       + " block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none transition duration-150 ease-in-out"}>
                        {t(element.title)}</a>
                )
            })}
            <a href="#"
               className="focus:outline-none   transition duration-150 ease-in-out">
                Dashboard</a>
            <a href="#"
               className="focus:outline-none    transition duration-150 ease-in-out">
                Team</a>
            <a href="#"
               className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
                Projects</a>
            <a href="#"
               className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
                Calendar</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="mt-3" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="#"
                   className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                   role="menuitem">Your Profile</a>
                <a href="#"
                   className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                   role="menuitem">Settings</a>
                <a href="#"
                   className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                   role="menuitem">Sign out</a>
            </div>
        </div>
    </div>
}
