import React from 'react';
import { contactInformationList } from '../../data/contact-items.list';

export const ContactInformation = (): JSX.Element => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto py-12">
                <div className="grid gap-8 grid-cols-2">
                    {contactInformationList.map((element) => {
                        return (
                            <a
                                href={element.serviceUrl}
                                onMouseOver={element.hoverFunction}
                                key={element.brandName}
                                className={`flex justify-center col-span-1 text-gray-300 text-lg leading-6 border rounded-lg border-gray-200 py-5 font-medium hover:text-${element.hoverColor} focus:text-${element.hoverColor} hover:border-${element.hoverColor} focus:border-${element.hoverColor} hover:bg-gray-50`}
                            >
                                <svg
                                    className="flex-shrink-0 mr-2 h-5 w-5"
                                    viewBox={`0 0 ${element.viewBox} ${element.viewBox}`}
                                    fill="currentColor"
                                    clipRule="evenOdd"
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
                    'dark hidden text-xing text-linkedin text-tutanota text-github ' +
                    'hover:text-xing focus:text-xing hover:border-xing focus:border-xing ' +
                    'hover:text-linkedin focus:text-linkedin hover:border-linkedin focus:border-linkedin ' +
                    'hover:text-tutanota focus:text-tutanota hover:border-tutanota focus:border-tutanota ' +
                    'hover:text-github focus:text-github hover:border-github focus:border-github '
                }
            />
        </div>
    );
};
