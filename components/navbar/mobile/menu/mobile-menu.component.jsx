import {MenuList} from "../../menu-items.list";
import {useTranslation} from "../../../../config/i18next.config";
import React from "react";
import {useRouter} from "next/router";
import {route} from "next/dist/next-server/server/router";

export const MobileMenu = ({isOpen}) => {

    const {t} = useTranslation('common');
    const router = useRouter();

    return <div className={"sm:hidden " + (isOpen ? '' : "hidden")}>
        <div className="pt-2 pb-3">
            {MenuList(t).map((element, i) => {
                return (
                    <a key={element.url} href={element.url}
                       className={
                       (router.pathname === element.url ? 'border-indigo-500 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700'
                           : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300')
                       + " mt-1 block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none transition duration-150 ease-in-out"
                       }>
                        {t(element.title)}</a>
                )
            })}
        </div>
    </div>
}
