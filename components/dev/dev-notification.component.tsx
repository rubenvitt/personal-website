import React from 'react';
import { useDevNotificationStore } from './dev-notification.hooks';
import { useEffect, useState } from 'react';

export const DevNotification = () => {
    const { closeNotification, closed } = useDevNotificationStore();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (!closed) {
            setOpen(true);
        }
    });

    return (
        <div
            className={`fixed inset-0 items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end ${
                open ? 'flex' : 'hidden'
            }`}
        >
            <div className="max-w-sm w-full bg-white dark:bg-trueGray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg
                                className="h-6 w-6 text-orange-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="1"
                                    stroke="#221b38"
                                    fill="none"
                                    d="M21 14H20V9H21C21.55 9 22 9.45 22 10V13C22 13.55 21.55 14 21 14Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="1"
                                    stroke="#221b38"
                                    fill="none"
                                    d="M3 9H4V14H3C2.45 14 2 13.55 2 13V10C2 9.45 2.45 9 3 9Z"
                                />
                                <path
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="1"
                                    stroke="currentColor"
                                    fill="none"
                                    d="M18 19H6C4.9 19 4 18.1 4 17V7C4 5.9 4.9 5 6 5H18C19.1 5 20 5.9 20 7V17C20 18.1 19.1 19 18 19Z"
                                />
                                <path
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="1"
                                    stroke="currentColor"
                                    fill="none"
                                    d="M15.25 12.5C16.2165 12.5 17 11.7165 17 10.75C17 9.7835 16.2165 9 15.25 9C14.2835 9 13.5 9.7835 13.5 10.75C13.5 11.7165 14.2835 12.5 15.25 12.5Z"
                                />
                                <path
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="1"
                                    stroke="currentColor"
                                    fill="none"
                                    d="M8.75 12.5C9.7165 12.5 10.5 11.7165 10.5 10.75C10.5 9.7835 9.7165 9 8.75 9C7.7835 9 7 9.7835 7 10.75C7 11.7165 7.7835 12.5 8.75 12.5Z"
                                />
                                <path
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="1"
                                    stroke="currentColor"
                                    d="M9.5 16H14.5"
                                />
                            </svg>
                        </div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Development Mode active
                            </p>
                        </div>
                        <div className="ml-4 flex-shrink-0 flex">
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    closeNotification();
                                }}
                                className="bg-white dark:bg-trueGray-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
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
    );
};
