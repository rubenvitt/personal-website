import React from 'react';
import { NavBar } from '../navbar/navbar.component';
import { PageContainerProps } from '../page-container/page-container.component';
import { calcDurationBetween } from '../../helper/date-calculator';
import Image from 'next/image';
import Link from 'next/link';

export const MainLandingPage = (): JSX.Element => {
    return (
        <div className="relative bg-white dark:bg-trueGray-800">
            <main className="lg:relative">
                <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 dark:text-gray-200 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                            Hey, I'm
                            <br className="xl:hidden" />
                            <span className="text-orange-600 dark:text-orange-700"> Ruben</span>
                            <span className="hidden xl:inline font-light ml-2 mt-1 text-sm leading-5 text-gray-400 dark:text-gray-600 truncate">
                                Developer
                            </span>
                        </h2>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 dark:text-gray-400 sm:text-xl md:mt-5 md:max-w-3xl">
                            Welcome on my website. I'm a{' '}
                            {calcDurationBetween({ start: new Date('1997-04-07'), end: new Date() })} old fullstack
                            developer from Germany, working as Consultant at fme AG.
                        </p>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <Link href={'/blog'}>
                                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 dark:bg-orange-700 hover:bg-orange-500 dark:hover:bg-orange-800 bg-border-white focus:outline-none focus:border-orange-700 dark:focus:border-orange-800 focus:ring-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                        Read my publications
                                    </a>
                                </Link>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <Link href={'/cv'}>
                                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-orange-600 bg-white dark:bg-trueGray-800 hover:text-orange-500 hover:bg-gray-100 hover:border-orange-500 focus:outline-none focus:border-orange-300 focus:ring-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                        View my CV
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full relative shadow-2xl">
                    <Image
                        className="r-profile-image lg:rounded-l-2xl xl:rounded-2xl absolute inset-0 w-full h-full object-cover"
                        src="/assets/images/profile.jpg"
                        alt="Ruben Vitt • Profile Picture"
                        layout={'fill'}
                    />
                </div>
            </main>
        </div>
    );
};

export const Container = ({ children }: PageContainerProps): JSX.Element => {
    return (
        <div>
            <div className="min-h-screen bg-white dark:bg-trueGray-800">
                <NavBar />
                <div>
                    <main>
                        <div className="max-w-7xl mx-auto max-w-screen-xl">
                            <div className={'pb-8 sm:px-0'}>{children}</div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};
