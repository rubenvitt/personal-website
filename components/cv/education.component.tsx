import React from 'react';
import { Status, Study, studyList } from '../../data/study-items.list';

export const CvEducation = (): JSX.Element => {
    const studies = studyList.sort((a, b) => {
        return b.duration.end.getTime() - a.duration.end.getTime();
    });

    return (
        <div className="relative pt-16 px-4 sm:px-6 lg:pt-24 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <h2 className="text-xl leading-6 font-medium text-gray-900">Education</h2>
                <div className="bg-white shadow overflow-hidden sm:rounded-md mt-3 lg:mt-6">
                    {studies.map((elem, i) => {
                        return <EducationItem key={i} study={elem} i={i} />;
                    })}
                </div>
            </div>
        </div>
    );
};

class EducationItemProps {
    i: number;
    study: Study;
}

const EducationItem = ({ i, study }: EducationItemProps) => {
    return (
        <ul>
            <li className={i != 0 ? 'border-t border-gray-200' : ''}>
                <a
                    href={study.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                    <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                            <div className="text-sm leading-5 font-medium text-orange-600 truncate">
                                {study.subject}{' '}
                                <span className={study.status === Status.COMPLETED ? 'text-gray-500' : 'text-gray-300'}>
                                    | {study.degree}
                                </span>
                            </div>
                            <div className="ml-2 flex-shrink-0 flex">
                                <span
                                    className={
                                        'px-2 inline-flex text-xs leading-5 font-semibold rounded-full ' +
                                        (study.status === Status.INCOMPLETE
                                            ? 'bg-red-100 text-red-800'
                                            : study.status === Status.SWITCHED
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : 'bg-green-100 text-green-800')
                                    }
                                >
                                    {study.status}
                                </span>
                            </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                                <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
                                    <svg width="24" height="24">
                                        <rect width="24" height="24" fill="none" rx="0" ry="0" />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M11 11H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V11Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12ZM12 10.8C14.0987 10.8 15.8 9.09868 15.8 7C15.8 4.90132 14.0987 3.2 12 3.2C9.90132 3.2 8.2 4.90132 8.2 7C8.2 9.09868 9.90132 10.8 12 10.8ZM10.766 6.14279C10.2335 6.7774 9.45889 7.00407 9.03582 6.64907C8.61274 6.29406 8.70145 5.49182 9.23396 4.85721C9.76646 4.2226 10.5411 3.99593 10.9642 4.35093C11.3873 4.70594 11.2985 5.50818 10.766 6.14279Z"
                                            fill="#b7791f"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.03582 6.64908C9.45889 7.00408 10.2335 6.77741 10.766 6.1428C11.2985 5.50819 11.3873 4.70595 10.9642 4.35095C10.5411 3.99595 9.76646 4.22262 9.23395 4.85723C8.70145 5.49184 8.61274 6.29408 9.03582 6.64908Z"
                                            fill="currentColor"
                                            fillOpacity="0.3"
                                        />
                                    </svg>
                                    {study.university}
                                </div>
                                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                    <svg width="24" height="24">
                                        <rect width="24" height="24" fill="none" rx="0" ry="0" />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.4999 2.3999H6.4999C5.0699 2.3999 3.8999 3.5699 3.8999 4.9999V18.9999C3.8999 20.4299 5.0699 21.5999 6.4999 21.5999H19.4999C19.8299 21.5999 20.0999 21.3299 20.0999 20.9999V16.9999V2.9999C20.0999 2.6699 19.8299 2.3999 19.4999 2.3999ZM5.0999 4.9999V16.8118C5.50468 16.5513 5.98546 16.3999 6.4999 16.3999H18.8999V3.5999H6.4999C5.7299 3.5999 5.0999 4.2299 5.0999 4.9999ZM6.4999 17.5999H18.8999V20.3999H6.4999C5.7299 20.3999 5.0999 19.7699 5.0999 18.9999C5.0999 18.2299 5.7299 17.5999 6.4999 17.5999ZM8.4999 8.5999H15.4999C15.8299 8.5999 16.0999 8.3299 16.0999 7.9999C16.0999 7.6699 15.8299 7.3999 15.4999 7.3999H8.4999C8.1699 7.3999 7.8999 7.6699 7.8999 7.9999C7.8999 8.3299 8.1699 8.5999 8.4999 8.5999ZM15.4999 11.3999H8.4999C8.1699 11.3999 7.8999 11.6699 7.8999 11.9999C7.8999 12.3299 8.1699 12.5999 8.4999 12.5999H15.4999C15.8299 12.5999 16.0999 12.3299 16.0999 11.9999C16.0999 11.6699 15.8299 11.3999 15.4999 11.3999Z"
                                            fill="#b7791f"
                                        />
                                    </svg>
                                    {study.courses.join(', ')}
                                </div>
                            </div>
                            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                <svg width="24" height="24">
                                    <rect width="24" height="24" fill="none" rx="0" ry="0" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8 8.39999C7.66863 8.39999 7.4 8.66862 7.4 8.99999C7.4 9.33137 7.66863 9.59999 8 9.59999H12H16H20C20.3314 9.59999 20.6 9.33137 20.6 8.99999C20.6 8.66862 20.3314 8.39999 20 8.39999H16H12H8Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.6 2.99999C8.6 2.66862 8.33137 2.39999 8 2.39999C7.66863 2.39999 7.4 2.66862 7.4 2.99999V4.39999H6C4.56406 4.39999 3.4 5.56405 3.4 6.99999V18C3.4 19.4359 4.56406 20.6 6 20.6H18C19.4359 20.6 20.6 19.4359 20.6 18V6.99999C20.6 5.56405 19.4359 4.39999 18 4.39999H16.6V2.99999C16.6 2.66862 16.3314 2.39999 16 2.39999C15.6686 2.39999 15.4 2.66862 15.4 2.99999V4.39999H8.6V2.99999ZM8 5.59999H16H18C18.7732 5.59999 19.4 6.2268 19.4 6.99999V18C19.4 18.7732 18.7732 19.4 18 19.4H6C5.2268 19.4 4.6 18.7732 4.6 18V6.99999C4.6 6.2268 5.2268 5.59999 6 5.59999H8ZM18 16.5C18 17.3284 17.3284 18 16.5 18C15.6716 18 15 17.3284 15 16.5C15 15.6716 15.6716 15 16.5 15C17.3284 15 18 15.6716 18 16.5Z"
                                        fill="#b7791f"
                                    />
                                </svg>
                                <span>
                                    {study.duration.start.toLocaleDateString('en-gb')} until{' '}
                                    {study.duration.end?.toLocaleDateString('en-gb') ?? 'until now'}
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    );
};
