import React from 'react';
import { PageHead } from '../components/page-head/page-head.component';
import { PageContainer } from '../components/page-container/page-container.component';
import { PortfolioList } from '../components/portfolio/portfolio.list.component';
import {PageFooter} from "../components/page-footer/page-footer.component";
import Lottie from 'react-lottie';

export default function Home(): JSX.Element {
    return (
        <div>
            <PageHead />
            <PageContainer>
                <PortfolioIntroduction />
                <PortfolioList />
            </PageContainer>
            <PageFooter />
        </div>
    );
}

const PortfolioIntroduction = (): JSX.Element => {
    return (
        <div className="bg-white flex justify-between">
            <main className="lg:relative">
                <div className="flex-1 max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
                    <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        Do you like, what you saw?
                        <span className="block text-orange-600">Get to know more of my Projects.</span>
                    </h2>
                    <div className="mt-8 flex">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://portfolio.rubeen.dev"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                            >
                                At my Portfolio-Page
                            </a>
                        </div>
                        <div className="ml-3 inline-flex">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/rubenvitt"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-orange-700 bg-orange-100 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:shadow-outline focus:border-orange-300 transition duration-150 ease-in-out"
                            >
                                On Github
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <div className="flex-1">

            </div>
        </div>
    );
};
