import React from 'react';
import { CertificateSkill, Skill, SkillDirection, SkillType, TaggedSkill } from '../../data/skill-items.list';
import Lottie from 'react-lottie';
import { ShapeAnimation } from '../../data/icons/animation-data/icons';
import { ComplexIcons } from '../../data/icons/complexIcons';

class SkillElementProps {
    skill: Skill;
    listIndex: number;
}

class DefaultSkillElementProps {
    max: number;
    skills: Skill[];
    buttonHandler: () => void;
}

export const SkillElement = ({ skill, listIndex }: SkillElementProps): JSX.Element => {
    return (
        <div
            key={listIndex}
            className="group bg-white overflow-hidden shadow rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out"
        >
            {(skill as TaggedSkill).tag !== undefined ? (
                <div className="flex items-center bg-gray-100 px-4 py-2 border-b border-gray-200 sm:px-6">
                    <svg
                        className="inline-block mr-1 h-5 w-5 text-blue-900"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="none"
                    >
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
                    {(skill as TaggedSkill).tag}
                </div>
            ) : null}
            <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                    <div className="flex-shrink-0 bg-gray-200 rounded-md p-3">
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
                    <div className="ml-5 w-0 flex-1">
                        <dl>
                            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                {skill.title}
                                {skill.certificates && skill.certificates.length > 0 ? (
                                    <span className="inline-flex items-center ml-5 pr-2 py-0.5 rounded text-xs font-medium leading-4 bg-yellow-100 text-yellow-800">
                                        <span className="mr-1">
                                            <Lottie
                                                options={{
                                                    loop: true,
                                                    autoplay: true,
                                                    animationData: ShapeAnimation.WandAndStartAnimation,
                                                    rendererSettings: {
                                                        preserveAspectRatio: 'xMidYMid slice',
                                                    },
                                                }}
                                                height={24}
                                                width={24}
                                            />{' '}
                                        </span>
                                        Certified
                                    </span>
                                ) : null}
                            </dt>
                            <dd className="flex items-baseline">
                                <div className="text-2xl leading-8 font-semibold text-gray-900">
                                    {skill.type !== SkillType.Certificate
                                        ? Number.isNaN(skill.value)
                                            ? ''
                                            : skill.value + '%'
                                        : (skill as CertificateSkill).date.toLocaleDateString('en-gb')}
                                    {}
                                </div>
                                <div
                                    className={
                                        'ml-2 flex items-baseline text-sm leading-5 font-semibold ' +
                                        calcColor(skill.status)
                                    }
                                >
                                    {skill.type !== SkillType.Certificate ? (
                                        <>
                                            <svg
                                                className={
                                                    'self-center flex-shrink-0 h-5 w-5 transform ' +
                                                    calcArrowDirection(skill.status)
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
                                            {skill.status}
                                        </>
                                    ) : null}
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            {skill.certificates && skill.certificates.length > 0 ? (
                <div className="align-bottom bg-gray-50 px-4 py-4 sm:px-6 group-hover:bg-gray-200 transition duration-150 ease-in-out">
                    <div
                        className={'text-sm leading-5 grid grid-cols-' + calcCols(skill.certificates.length) + ' gap-5'}
                    >
                        {skill.certificates.map((cert, i) => {
                            return (
                                <a
                                    href={cert.url}
                                    key={i}
                                    className="truncate bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    {cert.title} {ComplexIcons.Find}
                                </a>
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export const DefaultSkillElement = ({ skills, buttonHandler, max }: DefaultSkillElementProps): JSX.Element => {
    return skills.length <= max ? null : (
        <button
            onClick={buttonHandler}
            className="bg-white shadow overflow-hidden sm:rounded-md block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
        >
            <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                    <div className="min-w-0 flex-1 px-4 md:grid grid-cols-1 md:gap-4">
                        <div>
                            <div className="text-sm leading-5 font-medium text-orange-500 truncate">There's more!</div>
                            <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                <span className="">Get to know more of my language skills</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'transform rotate-180'}>
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: ShapeAnimation.BackAnimation,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice',
                            },
                        }}
                        height={96}
                        width={96}
                    />
                </div>
            </div>
        </button>
    );
};

function calcCols(certs): number {
    if (certs < 7) return certs;
    if (certs % 6 === 0) return 6;
    if (certs % 5 === 0) return 5;
    if (certs % 4 === 0) return 4;
    else return 3;
}

export const calcColor: (direction: SkillDirection) => string = (direction) => {
    switch (direction) {
        case SkillDirection.UP:
            return 'text-green-500';
        case SkillDirection.DOWN:
            return 'text-red-500';
        case SkillDirection.UNCHANGED:
            return 'text-yellow-300';
        case SkillDirection.NA:
            return 'text-gray-600';
    }
};

export const calcArrowDirection: (direction: SkillDirection) => string = (direction) => {
    switch (direction) {
        case SkillDirection.UP:
            return 'rotate-180';
        case SkillDirection.DOWN:
            return '';
        case SkillDirection.UNCHANGED:
            return '-rotate-90';
    }
};