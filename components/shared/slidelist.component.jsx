import React from "react";
import {calcArrowDirection, calcColor} from "../cv/skill.component";

export const SlideListElement = ({skill}) => {
    return <li key={skill.url} className="col-span-1 bg-white rounded-lg shadow">
        <div className="w-full flex items-center justify-between p-1 space-x-1">
            <div className="ml-1 w-0 flex-1">
                <dl>
                    <dt className="text-xs leading-5 font-medium text-gray-500 truncate">
                        {skill.title}
                    </dt>
                    <dd className="flex items-baseline">
                        <div className="text-2l leading-8 font-semibold text-gray-900">
                            {skill.value}%
                        </div>
                        <div
                            className={"ml-2 flex items-baseline text-sm leading-5 font-semibold " + calcColor(skill.status)}>
                            <svg
                                className={"self-center flex-shrink-0 h-5 w-5 transform " + calcArrowDirection(skill.status)}
                                fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
        {
            skill.certificates && skill.certificates.length > 0 ?
                <div className="border-t border-gray-200">
                    <div className="-mt-px flex">
                        {
                            skill.certificates.map(cert => {
                                return <div key={cert.url} className="w-0 flex-1 flex border-r border-gray-200">
                                    <a href={cert.url} target='_blank'
                                       className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-xs leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
                                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                                        </svg>
                                        <span className="ml-3">{cert.title}</span>
                                    </a>
                                </div>
                            })
                        }
                    </div>
                </div> : null
        }
    </li>
}
