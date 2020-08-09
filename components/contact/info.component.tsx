import React from 'react';
import { contactInformationList } from '../../data/contact-items.list';

export const ContactInformation = (): JSX.Element => {
    const contactsList = contactInformationList;
    return (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 grid-cols-2 lg:grid-cols-3">
                    {contactsList.map((element) => {
                        return (
                            <a
                                href={element.serviceUrl}
                                onMouseOver={element.hoverFunction}
                                key={element.brandName}
                                className={`flex justify-center col-span-1 lg:col-span-${element.colSpan} text-gray-300 text-lg leading-6 border rounded-lg border-gray-200 py-5 font-medium hover:text-${element.hoverColor} focus:text-${element.hoverColor} hover:border-${element.hoverColor} focus:border-${element.hoverColor} hover:bg-gray-50`}
                            >
                                <svg
                                    className="flex-shrink-0 mr-1.5 h-5 w-5"
                                    viewBox={`0 0 ${element.viewBox} ${element.viewBox}`}
                                    fill="currentColor"
                                >
                                    <path d={element.imagePath} />
                                </svg>
                                {element.name}
                            </a>
                        );
                    })}
                </div>
            </div>
            <div
                className={
                    'hidden text-xing text-linkedin text-tutanota text-calendly text-github ' +
                    'hover:text-xing focus:text-xing hover:border-xing focus:border-xing ' +
                    'hover:text-linkedin focus:text-linkedin hover:border-linkedin focus:border-linkedin ' +
                    'hover:text-tutanota focus:text-tutanota hover:border-tutanota focus:border-tutanota ' +
                    'hover:text-calendly focus:text-calendly hover:border-calendly focus:border-calendly ' +
                    'hover:text-github focus:text-github hover:border-github focus:border-github '
                }
            />
        </div>
    );
};
