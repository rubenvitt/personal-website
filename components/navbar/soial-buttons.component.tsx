import React from 'react';
import { calculateMail } from '../../helper/mail-helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLightbulbOn, faLightbulbSlash } from '@fortawesome/pro-light-svg-icons';
import { faLinkedin, faXing, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useDarkMode } from '../../helper/theme.helper';

export class SocialButtonProps {
    marginLeft: boolean;
}

export const SocialButtons = ({ marginLeft }: SocialButtonProps): JSX.Element => {
    const [isDarkMode, toggleTheme] = useDarkMode();

    return (
        <div className={(marginLeft ? 'ml-6' : '') + ' flex items-center'}>
            <a
                href="https://github.com/rubenvitt"
                target="_blank"
                rel="noreferrer"
                title={'Visit my GitHub profile'}
                className="w-7 text-gray-400 hover:text-github focus:text-github p-1 border-2 border-transparent rounded-full focus:outline-none transition duration-150 ease-in-out"
                aria-label="Notifications"
            >
                <FontAwesomeIcon size={'lg'} icon={faGithub} />
            </a>

            <a
                href="http://xing.com/profile/Ruben_Vitt"
                target="_blank"
                rel="noreferrer"
                title={'Visit my Xing profile'}
                className="w-7 text-gray-400 hover:text-xing focus:text-xing p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
                aria-label="Notifications"
            >
                <FontAwesomeIcon size={'lg'} icon={faXing} />
            </a>

            <a
                href="https://www.linkedin.com/in/ruben-vitt-389801140/"
                target="_blank"
                rel="noreferrer"
                title={'Visit my LinkedIn profile'}
                className="w-7 text-gray-400 hover:text-linkedin focus:text-linkedin p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
                aria-label="Notifications"
            >
                <FontAwesomeIcon size={'lg'} icon={faLinkedin} />
            </a>
            <a
                onMouseOver={(e) => (e.currentTarget.href = calculateMail())}
                target="_blank"
                rel="noreferrer"
                title={'Write me a mail'}
                className="w-7 text-gray-400 hover:text-fastmail focus:text-fastmail p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
                aria-label="Notifications"
            >
                <FontAwesomeIcon size={'lg'} icon={faEnvelope} />
            </a>
            <a
                onClick={toggleTheme}
                href={'#'}
                className="w-7 text-gray-400 dark:text-yellow-400 dark:hover:text-yellow-200 dark:focus:text-yellow-200 hover:text-yellow-700 focus:text-yellow-700 p-1 border-2 border-transparent rounded-full focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
            >
                {isDarkMode ? (
                    <FontAwesomeIcon size={'lg'} icon={faLightbulbOn} />
                ) : (
                    <FontAwesomeIcon size={'lg'} icon={faLightbulbSlash} />
                )}
            </a>
        </div>
    );
};
