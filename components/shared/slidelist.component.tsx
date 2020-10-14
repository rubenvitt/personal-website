import React from 'react';
import { calcArrowDirection, calcColor } from '../cv/skill.component';
import { Skill, SkillDirection, TaggedSkill } from '../../types/skill-items.types';

class SlideListElementProps {
    skill: Skill;
}

export const SlideListElement = ({ skill }: SlideListElementProps): JSX.Element => {
    return (
        <li key={skill.title} className="col-span-1 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-900">
            {(skill as TaggedSkill).tag ? (
                <div className="border-b border-gray-200 bg-gray-100 py-1 px-2 text-xs">
                    {(skill as TaggedSkill).tag}
                </div>
            ) : null}
            <div className="w-full flex items-center justify-between p-1 space-x-1">
                <div className="ml-1 w-0 flex-1 flex items-stretch">
                    <div className="mt-1 mr-3">
                        <svg className="h-10 w-10 text-blue-900" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d={
                                    skill.svg ??
                                    'M8.705,15.182c-0.238,0-0.432,0.193-0.432,0.432v2.592c0,0.238,0.194,0.432,0.432,0.432s0.432-0.193,0.432-0.432v-2.592C9.137,15.375,8.943,15.182,8.705,15.182 M11.295,14.318c-0.238,0-0.432,0.193-0.432,0.432v2.591c0,0.238,0.193,0.432,0.432,0.432c0.239,0,0.433-0.193,0.433-0.432V14.75C11.728,14.512,11.534,14.318,11.295,14.318 M3.522,13.455c-0.238,0-0.432,0.193-0.432,0.432v2.591c0,0.239,0.194,0.432,0.432,0.432c0.238,0,0.432-0.192,0.432-0.432v-2.591C3.955,13.648,3.761,13.455,3.522,13.455 M6.113,14.318c-0.238,0-0.431,0.193-0.431,0.432v1.728c0,0.239,0.193,0.432,0.431,0.432c0.239,0,0.432-0.192,0.432-0.432V14.75C6.545,14.512,6.352,14.318,6.113,14.318 M16.903,5.793c0.002-0.037,0.006-0.073,0.006-0.112c0-1.43-1.161-2.59-2.591-2.59c-0.653,0-1.248,0.243-1.704,0.642c-0.922-1.424-2.518-2.369-4.342-2.369c-2.601,0-4.748,1.918-5.119,4.415C1.633,6.141,0.5,7.504,0.5,9.136c0,1.908,1.546,3.455,3.455,3.455h12.09c1.908,0,3.455-1.547,3.455-3.455C19.5,7.526,18.396,6.176,16.903,5.793 M16.045,11.728H3.955c-1.429,0-2.591-1.162-2.591-2.591c0-1.203,0.819-2.239,1.99-2.517c0.343-0.082,0.602-0.364,0.654-0.713C4.32,3.809,6.153,2.227,8.272,2.227c1.465,0,2.384,0.307,3.186,1.543c0.136,0.21,0.789,0.783,1.037,0.817c0.04,0.006,0.119,0.009,0.119,0.009c0.208,0,0.41-0.075,0.568-0.213c0.315-0.276,0.72-0.429,1.136-0.429c0.953,0,1.727,0.775,1.726,1.736l-0.003,0.063c-0.02,0.409,0.252,0.774,0.648,0.876c1.146,0.294,1.946,1.324,1.946,2.506C18.636,10.565,17.475,11.728,16.045,11.728M13.887,13.455c-0.238,0-0.432,0.193-0.432,0.432v2.591c0,0.239,0.193,0.432,0.432,0.432s0.432-0.192,0.432-0.432v-2.591C14.318,13.648,14.125,13.455,13.887,13.455 M16.477,13.455c-0.237,0-0.432,0.193-0.432,0.432v1.727c0,0.239,0.194,0.433,0.432,0.433c0.239,0,0.433-0.193,0.433-0.433v-1.727C16.909,13.648,16.716,13.455,16.477,13.455'
                                }
                            />
                        </svg>
                    </div>
                    <div>
                        <dl>
                            <dt className="text-xs leading-5 font-medium text-black truncate">{skill.title}</dt>
                            <dd className="flex items-baseline">
                                <div className="text-2l leading-8 font-semibold text-gray-700">
                                    {Number.isNaN(skill.level) ? '' : skill.level + '%'}
                                </div>
                                {skill.skillDirection !== SkillDirection.NA ? (
                                    <div
                                        className={
                                            'ml-2 flex items-baseline text-sm leading-5 font-semibold ' +
                                            calcColor(skill.skillDirection)
                                        }
                                    >
                                        <svg
                                            className={
                                                'self-center flex-shrink-0 h-5 w-5 transform ' +
                                                calcArrowDirection(skill.skillDirection)
                                            }
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                ) : null}
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            {skill.certificates && skill.certificates.length > 0 ? (
                <div className="border-t border-gray-200">
                    <div className="-mt-px">
                        {skill.certificates.slice(0, 3).map((cert) => {
                            return (
                                <div key={cert.url} className="flex-1 border-b flex border-r border-gray-200">
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="truncate relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-2 text-xs leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                                    >
                                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                        <span className="ml-3 truncate">{cert.title}</span>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </li>
    );
};
