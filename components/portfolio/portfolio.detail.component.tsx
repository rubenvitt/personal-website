import React from 'react';
import { PortfolioModel } from '../../types/portfolio-items.types';

interface Props {
    portfolioItem: PortfolioModel;
}

export const PortfolioDetailComponent: React.FC<Props> = ({ portfolioItem }) => {
    return (
        <>
            <div className="relative pt-16 overflow-hidden sm:pt-24 lg:pt-32">
                <div className="px-4 text-center ">
                    <div>
                        <p className="text-base sm:px-6 lg:px-8 font-semibold tracking-wider text-orange-600 uppercase">
                            {portfolioItem.langs[0].title}
                        </p>
                        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                            {portfolioItem.title}
                        </h2>
                        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc,
                            ullamcorper malesuada. Eleifend condimentum id viverra nulla.
                        </p>
                    </div>
                    {portfolioItem.image && (
                        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                            <img
                                className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                                src={portfolioItem.image}
                                alt=""
                            />
                        </div>
                    )}
                </div>
            </div>
            {portfolioItem.id}, {portfolioItem.url}, {portfolioItem.title}, {portfolioItem.image},{' '}
            {portfolioItem.description}, {portfolioItem.liveUrl}
            {portfolioItem.langs.map((value) => value.title)}, {portfolioItem.linesOfCode},{' '}
            {portfolioItem.portfolioItemType?.toString()}
        </>
    );
};
