import React from 'react';
import { calculateDaysBetween } from '../../helper/DateCalculator';
import { skillList, SkillType } from '../../data/skill-items.list';
import Shape from 'shape-library';

export const CvSummary = (): JSX.Element => {
    const workdays = calculateDaysBetween(new Date('2019-08-01').getTime(), Date.now());
    const certCount = skillList
        .filter((x) => x.type === SkillType.ProgrammingLanguage)
        .map((x) => x.certificates?.length ?? 0)
        .reduce((a, b) => a + b);

    return (
        <div className="py-12 bg-white border-b border-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="text-base leading-6 text-orange-600 font-semibold tracking-wide uppercase">
                        Developer
                    </p>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        Ruben Vitt
                    </h3>
                    <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                        Hey, I'm a 23 years old bachelor graduated computer scientist. I work since one year at fme.
                    </p>
                </div>

                <div className="mt-10">
                    <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
                        <li>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        <Shape
                                            type="icons"
                                            category="Office"
                                            name="Briefcase"
                                            primaryColor="#ffffff"
                                            size={24}
                                            theme={0}
                                            backgroundColor="none"
                                            borderRadius={0}
                                        />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">Work Experience</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        I have professional experience (after university) since currently{' '}
                                        {workdays + ' '}
                                        days. Currently I'm working at fme AG in Braunschweig, Germany.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10 md:mt-0">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        <Shape
                                            type="icons"
                                            category="Office"
                                            name="Book"
                                            primaryColor="#ffffff"
                                            secondaryColor="#22a6b3"
                                            size={24}
                                            backgroundColor="none"
                                            borderRadius={0}
                                        />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">Education</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        After the university degree I can't stop to learn. Currently I finished
                                        {' ' + certCount + ' '} online course-certificates already and I'm open for new
                                        ones.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10 md:mt-0">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        <Shape
                                            type="icons"
                                            category="Object"
                                            name="Cloud"
                                            primaryColor="#ffffff"
                                            secondaryColor="#4A90E2"
                                            size={24}
                                            backgroundColor="none"
                                            borderRadius={0}
                                        />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                                        Technologies & Mindset
                                    </h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        I love new programming languages, modern tools and modern work. I love to work
                                        from home & testing out new things.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10 md:mt-0">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        <Shape
                                            type="icons"
                                            category="Object"
                                            name="More"
                                            primaryColor="#ffffff"
                                            size={24}
                                            backgroundColor="none"
                                            borderRadius={0}
                                        />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">Some more words</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        I really like cycling in the woods or near the sea, programming of course and to
                                        listen or make music. Another wonderful thing is kayaking on rivers.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
