import { MenuList } from '../../../../data/menu-items.list';
import React from 'react';
import { useRouter } from 'next/router';

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
                        <a
                            key={element.url}
                            href={element.url}
                            className={
                                (router.pathname === element.url
                                    ? 'border-orange-500 text-orange-700 bg-orange-50 focus:text-orange-800 focus:bg-orange-100 focus:border-orange-700'
                                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300') +
                                ' mt-1 block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none transition duration-150 ease-in-out'
                            }
                        >
                            {element.title}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
