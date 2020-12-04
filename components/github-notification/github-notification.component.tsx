import React, { useEffect, useState } from 'react';
import TransitionComponent from '../shared/Transition.component';
import { Icons } from '../../data/icons/icons';
import {useGithubNotificationStore} from "./github-notification.hooks";

export const GithubNotification = () => {
    const [open, setOpen] = useState(false);
    const {closed, closeNotification} = useGithubNotificationStore();

    useEffect(() => {
        if (!closed) {
            setTimeout(() => {
                setOpen(true);
            }, 3000);
        }
    });

    const handleClose = () => {
        setOpen(false);
        closeNotification();
    };
    const handleGithub = () => {
        window.location.href = 'https://github.com/rubenvitt/personal-website';
    };

    return (
        <div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-end sm:justify-start">
            <TransitionComponent
                show={open}
                enter={'transform ease-out duration-300 transition'}
                enterFrom={'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'}
                enterTo={'translate-y-0 opacity-100 sm:translate-x-0'}
                leave={'transition ease-in duration-100'}
                leaveFrom={'opacity-100'}
                leaveTo={'opacity-0'}
            >
                <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
                    <div className="rounded-lg ring-1 ring-black ring-opacity-5">
                        <div className="p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5">
                                    <svg
                                        className="flex-shrink-0 mr-2 h-10 w-10 round-full"
                                        viewBox={`0 0 24 24`}
                                        fill="currentColor"
                                        clipRule="evenOdd"
                                    >
                                        <path d={Icons.GitHub} />
                                    </svg>
                                </div>
                                <div className="ml-3 w-0 flex-1">
                                    <p className="text-sm leading-5 font-medium text-gray-900">Open Source</p>
                                    <p className="mt-1 text-sm leading-5 text-gray-500">
                                        This website is hosted on GitHub!
                                    </p>
                                    <div className="mt-4 flex">
                                        <span className="inline-flex rounded-md shadow-sm">
                                            <button
                                                onClick={handleGithub}
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:ring-orange active:bg-orange-700 transition ease-in-out duration-150"
                                            >
                                                View Sourcecode
                                            </button>
                                        </span>
                                        <span className="ml-3 inline-flex rounded-md shadow-sm">
                                            <button
                                                onClick={handleClose}
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                                            >
                                                Close
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div className="ml-4 flex-shrink-0 flex">
                                    <button
                                        className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                                        onClick={handleClose}
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TransitionComponent>
        </div>
    );
};

/*
<!--
    Notification panel, show/hide based on alert state.

Entering: "transform ease-out duration-300 transition"
From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
To: "translate-y-0 opacity-100 sm:translate-x-0"
Leaving: "transition ease-in duration-100"
From: "opacity-100"
To: "opacity-0"
-->
 */
