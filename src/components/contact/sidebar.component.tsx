import React from 'react';
import { calculateMail } from '../../helper/MailHelper';

export const ContactSidebar = (): JSX.Element => {
    return (
        <div className="max-w-lg mx-auto">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
                Do you have any questions or generally want to contact me? Don't hesitate and try contacting me on one
                of these platforms. You can expect an answer.
            </p>
            <dl className="mt-8 text-base leading-6 text-gray-500">
                <div>
                    <dt className="sr-only">located in</dt>
                    <dd>Endeholz, near Hamburg | Hannover | Braunschweig </dd>
                </div>
                <div className="mt-3">
                    <dd className="flex">
                        <svg
                            className="flex-shrink-0 h-6 w-6 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <span className="ml-3">
                            <a onMouseOver={(e) => (e.currentTarget.href = calculateMail())}>Send mail</a>
                        </span>
                    </dd>
                </div>
            </dl>
        </div>
    );
};
