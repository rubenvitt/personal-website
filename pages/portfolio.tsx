import React, { useEffect } from 'react';
import { PortfolioList } from '../components/portfolio/portfolio.list.component';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { fetchPortfolioItems } from '../helper/http-helper';
import { GraphQLClient } from 'graphql-request';
import { URLGraphCMS } from '../config/constants.config';
import { useSeoHelperStore } from '../helper/seo.helper';

/*
const list = portfolioList().sort((a, b) => {
        if (a.portfolioItemType === b.portfolioItemType) {
            return a.title.localeCompare(b.title);
        } else {
            return (b.portfolioItemType ?? 1) - (a.portfolioItemType ?? 1);
        }
    });
 */

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const graphcms = new GraphQLClient(URLGraphCMS);

        const portfolioItems = await fetchPortfolioItems(graphcms)
            .then((items) => {
                return items.sort((a, b) => {
                    if (a.portfolioItemType === b.portfolioItemType) {
                        return a.title.localeCompare(b.title);
                    } else {
                        return (b.portfolioItemType ?? 1) - (a.portfolioItemType ?? 1);
                    }
                });
            })
            .then((items) => {
                return items.map((item) => {
                    if (typeof item.portfolioItemType === 'string') {
                        item.portfolioItemType = Number(item.portfolioItemType);
                    }
                    return item;
                });
            });
        return {
            props: {
                list: portfolioItems,
            },
            revalidate: 1,
        };
    } catch (e) {
        console.error(e);
        return {
            props: {
                list: [],
            },
            revalidate: 1,
        };
    }
};

export default function Home({ list }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    const { setSeo } = useSeoHelperStore();

    useEffect(() => {
        setSeo(
            'Rubeen • Portfolio',
            'Get to know more about my projects at my interactive portfolio. All projects hosted on GitHub.',
        );
    }, []);

    return (
        <div>
            <PortfolioIntroduction />
            <PortfolioList list={list} />
        </div>
    );
}

const PortfolioIntroduction = (): JSX.Element => {
    return (
        <>
            <div className="flex-1 max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10">
                    <span className="block">Do you like, what you saw?</span>
                    <span className="block text-orange-600 dark:text-orange-700">Get to know more of my Projects.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/rubenvitt"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white dark:text-gray-200 bg-orange-600 dark:bg-orange-700 hover:bg-orange-500 dark:hover:bg-orange-900 focus:outline-none focus:ring transition duration-150 ease-in-out"
                        >
                            On Github
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-1"></div>
        </>
    );
};

<div className="bg-gray-50">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
                <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Get started
                </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
                <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                    Learn more
                </a>
            </div>
        </div>
    </div>
</div>;
