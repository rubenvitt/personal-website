import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/pro-solid-svg-icons';
import { faCaretDown } from '@fortawesome/pro-light-svg-icons';

interface MobileMenuButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

export const MobileMenuButton = ({ onClick, isOpen }: MobileMenuButtonProps): JSX.Element => {
    return (
        <div className="-mr-2 flex items-center sm:hidden">
            <button
                onClick={onClick}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-300 transition duration-150 ease-in-out"
            >
                <FontAwesomeIcon width={24} height={24} icon={isOpen ? faCaretUp : faCaretDown} />
            </button>
        </div>
    );
};
